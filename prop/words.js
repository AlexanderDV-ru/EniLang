wordsFlags+=`
g	gender
	=0  cant have gender
	=u  undefined
	=f  female
	=m  male
n   number
	=0  cant have number
	=u  undefined
	=s  single
	=m  multi
t	tense
	=0  cant have tense
	=u  undefined
	=p  past
	=n  present
	=f  future
s   stage
	=0  cant have stage
	=u  undefined
	=p  perfect
	=c  continuos
f   face
    =1  first
    =2  second
    =3  third
tr  translate
sp  part of speech
sp.t	part of speech type
`
wordsConfig+=`
prospitxpart
	pronon -prospitxpart
nono
	non
	ad_non
	verb_non
	verb_ad_non
questions
	+k+	-tr=anyquestion
verbo
	verb
	verb_non
	verb_ad_non
+o
	verbo
+d
	+o
+m
	+o
+l
	+o
verbo_tense
	+o  -t=u
	+d  -t=p
	+m  -t=n
	+l  -t=f
+n
	verbo_tense
+z
	verbo_tense
verbo_stage
	verbo_tense -s=u
	+n  -s=c
	+z  -s=p
verbos
	verbo_stage
+r
	+o
+v
	+o
+i
	nono
	+r  -maker  -fromverb
	+v  -making  -fromverb
un+
	+i
	un+  un
+s
	+i
nombro
	+b+ -tr=zero
	+s+ -tr=one
	+d+ -tr=two
	+f+ -tr=three
	+g+ -tr=four
	+h+ -tr=five
	+j+ -tr=six
	+k+ -tr=seven
	+l+ -tr=eight
	+p+ -tr=nine
	+r+ -tr=ten
	+t+ -tr=eleven
	#
poverovalueo
	+yota+
	+zeta+
	+eksa+
	+peta+
	+tera+
	+giga+
	+mega+
	+kilo+
	+hekto+
	+deka+
	+deci+
	+centi+
	+mili+
	+mikro+
	+nano+
	+piko+
	+femto+
	+ato+
	+zepto+
	+yokto+
+a
	ad  -tr=adj
+e
	ad  -tr=adv
nonos
	+i  -n=s
	+s  -n=m -tr=many
advos
	+e
adjos
	+a
interjekos
	interjeko
kunigos
	kunigo
eros
	ero
service_words
	kunigos -sp=kunigo
	eros -sp=ero
kefa_vortos
	nonos -sp=nono
	verbos -sp=verbo
	advos -sp=advo
	adjos -sp=adjo
words
	service_words  -sp.t=servisa
	kefa_vortos -sp.t=kefa
	interjekos -sp=interjeko
	propaj_vortos -sp=propaj
	questions   -__temp
return
	words
`
