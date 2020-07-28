wordsConfig+=`
spitxparto
	+noun+	-tr=noun
	+pronoun+	-tr=pronoun
	+verb+  -tr=verb
	+adj+	-tr=adjective
	+adv+	-tr=adverb
	+partisipl+ -tr=participle
	+union+ -tr=union
	+er+	-tr=particle
vortparto
	+prefikso+	-tr=prefix
	+postfisko+	-tr=postfix
lingo
	+fonem+ -tr=phonem
		translate
			"en-us"
				"phonem"
		synonym
			+fon+
	+morfem+   -tr=morphem
mIsko
	+nam+	-tr=name
	+sound+	-tr=sound
	+vid+	-tr=video
	+aud+	-tr=audio
	+hous+	-tr=house
	+hom+	-tr=home
	+vord+  -tr=word
	+tim+  -tr=time
	+spas+  -tr=space
	+vorld+ -tr=world
	+part+  -tr=part
	+number+ -tr=number
fudo
	+food+	-tr=food
	+vater+	-tr=water
	+kak+	-tr=cake
	+apl+	-tr=apple
	+pear+	-tr=pear
	+banan+ -tr=banana
	+cabag+	-tr=cabbage
	+veg+ -tr=vegetable
	+tomat+ -tr=tomato
	+potat+ -tr=potato
	+karot+ -tr=carrot
	+orang+ -tr=orange
polo
	+good+	-tr=good
	+boon+	-tr=boon
	+hot+	-tr=hot
	+forvard+  -tr=forward
	+var+	-tr=war
interjeko
	+hay+	-tr=hello
	+pay+	-tr=hello if you just seen anybody but dont want to speak
	+bay+	-tr=bye
ad_non
	polo
	+pol+	-tr=polaris
	+fe+	-tr=female
	+me+	-tr=male
verb_non
	+vork+  -tr=work
	+vis+	-tr=look/see
verb_ad_non
	+kolor+ -tr=color
	+paint+ -tr=paint
kunigo
	+en+	-tr=and
	+an+	-tr=and/but
	+ut+	-tr=but
ero
	+un+	-tr=un
	+ne+	-tr=not
	+ze+	-tr=the
	+li+	-tr=do ... ?
	+from+  -tr=from
	+of+	-tr=of
	+viv+	-tr=with
	+in+	-tr=in
	+on+	-tr=on
	+at+	-tr=at
besto
	+kat+	-tr=cat
	+dog+	-tr=dog
	+hom+	-tr=human
	+best+  -tr=animal
	+frog+	-tr=frog
	+cov+	-tr=cow
	+hors+  -tr=horse
	+kok+	-tr=chicken
	+pigi+  -tr=pig
pronon
	+m+ -tr=i -g=u  -f=1
	+v+ -tr=you -g=u  -f=2
	+h+ -tr=it -g=u  -f=3
gen
	pronon
	besto	-besto
	+kid+	-tr=kid
	+adult+ -tr=adult
	+old+	-tr=old
fe+
	gen
me+
	gen
gen2
	gen -g=u
	fe+ -g=f
	me+ -g=m
	ne+
	ke+
transporto
	+aut+	-tr=car
	+avi+	-tr=plane
	+helikopter+	-tr=helicopter
	+multikopter+	-tr=multicopter
	+kopter+	-tr=helicopter/multicopter
	+kvadrokopter+  -tr=quadrocopter
	+transport+ -tr=transport
	+vehikl+ -tr=vehicle
	+train+ -tr=train
	+bus+	-tr=bus
	+tram+  -tr=tram
negen
	spitxparto  -spitxparto
	vortparto  -vortparto
	transporto  -transporto
	mIsko	-mIsko
	fudo	-fudo
	lingo   -lingo
non
	gen2
	negen	-g=0`
