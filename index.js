var toJSON=function(text)
{
	var json={}
	var last
	for(var v in text.split("\n"))
	{
		if(!text.split("\n")[v].startsWith(tabSym))
			json[last=text.split("\n")[v]]=""
		else if(last)
			if(!json[last])
				json[last]=text.split("\n")[v].substr(1)
			else json[last]+="\n"+text.split("\n")[v].substr(1)
	}
	for(var v in json)
		if(json[v].split("\n").length>1)
		{
			json[v]=toJSON(json[v])
		}
		else
		{
			var vv=json[v]
			json[v]={}
			json[v][vv]={}
		}
	return json
}
var ress
var onChange=function(json)
{
	for(var v in json)
		for(var v2 in json[v])
		{
			var vv=v2.split(/\s+/)
			if(vv[0].startsWith("+")&&vv[0].endsWith("+"))
			{
				json[v][v2]=json[v][v2]
			}
			else
			{
				for(var v3 in json[vv[0]])
					json[v]["+"+(vv[0].endsWith("+")&&!vv[0].startsWith("+")?vv[0].replace("+","").replace("+",""):"")+v3.split(/\s+/)[0].replace("+","").replace("+","")+(vv[0].startsWith("+")&&!vv[0].endsWith("+")?vv[0].replace("+","").replace("+",""):"")+"+"+"\t"+(v3.split(/\s+/)[1]?v3.replace(v3.split(/\s+/)[0],""):"")+"\t"+v2.replace(vv[0],"").replace("+","").replace("+","")]={}
				delete json[v][v2]
			}
		}
	var ress={}
	for(var v in json["return"])
		ress[v.split("\t")[0].replace("+","").replace("+","")]=v.substr(v.split("\t")[0].length).split(/\s+[-]/)
	return ress
}

fonemsConfig=fonemsConfig.replace("	","\t")
var fonemsJson=toJSON(fonemsConfig)
var fonems=onChange(fonemsJson)
console.log(fonems)

wordsConfig=wordsConfig.replace("	","\t")
var wordsJson=toJSON(wordsConfig)
var words=onChange(wordsJson)
console.log(words)

enterArea.oninput=fullDescriptionCheckbox.oninput=languageInput.oninput=function()
{
	var findFlag=function(flagConfig,flag, val)
	{
		var result=""
		for(var v in flagConfig.split("\n"))
			if(flagConfig.split("\n")[v].split(/\s+/)[0]==flag)
				result=flagConfig.split("\n")[v].substr(flag.length)
			else if(result&&val&&flagConfig.split("\n")[v].split(/\s+/)[1]=="="+val)
				return flagConfig.split("\n")[v].substr(flagConfig.split("\n")[v].indexOf(val)+val.length+1)
		return val&&result?val:(result?result:(val?val:flag))
	}
	var makeSingleDescription=function(flagConfig, arr)
	{
		var singleDescription=""
		for(var v in arr)
			if(fullDescriptionCheckbox.checked)
				singleDescription+=findFlag(flagConfig,arr[v].split("=")[0])+(arr[v].split("=")[1]?"="+findFlag(flagConfig,arr[v].split("=")[0],arr[v].split("=")[1]):"")+"\t"
			else singleDescription+=arr[v].split("=")[0]+(arr[v].split("=")[1]?"="+arr[v].split("=")[1]:"")+"\t"
		return singleDescription
	}
	{
		var enteredFonems=[]
		var inbr=false,connect=false
		for(var v in enterArea.value)
		{
			//if(enterArea.value[v]!=":")
				if(inbr||connect)
					enteredFonems[enteredFonems.length-1]+=enterArea.value[v]
				else enteredFonems[enteredFonems.length]=enterArea.value[v]
			if(enterArea.value[v]=="[")
				inbr=true
			if(enterArea.value[v]=="]")
				inbr=false
			//connect=enterArea.value[v]==":"
		}
		var fonemsResult=""
		for(var v in enteredFonems)
		{
			fonemsResult+="\""+enteredFonems[v]+"\""
			var ne=true
			for(var v22 in fonems)
			if(v22.split("|")[languageInput.value])
			{
				var v2=v22.split("|")[languageInput.value]
				for(var v3 in v2.split("/"))
					if(v2.split("/")[v3]==enteredFonems[v]&&ne)
					{
						fonemsResult+=""+makeSingleDescription(fonemsFlags,fonems[v22])
						ne=false
					}
			}
			fonemsResult+="\n"
		}
		fonemsDescriptionArea.value=fonemsResult
	}
	{
		var enteredWords=enterArea.value.split(/\s+/)
		var wordsResult=""
		for(var v in enteredWords)
		{
			wordsResult+="\""+enteredWords[v]+"\""
			var ne=true
			for(var v22 in words)
			if(v22.split("|")[languageInput.value])
			{
				var v2=v22.split("|")[languageInput.value]
				for(var v3 in v2.split("/"))
					if(v2.split("/")[v3]==enteredWords[v]&&ne)
					{
						wordsResult+=""+makeSingleDescription(wordsFlags,words[v22])
						ne=false
					}
			}
			wordsResult+="\n"
		}
		wordsDescriptionArea.value=wordsResult
	}
}
