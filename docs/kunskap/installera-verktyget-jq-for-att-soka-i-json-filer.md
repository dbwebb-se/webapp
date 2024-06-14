---
author:
    - mos
    - efo
category: webbprogrammering
revision:
    "2022-03-29": (C, efo) Uppdaterade af läkn.
    "2016-10-18": (B, mos) Fel i exempel om hitta sista länet.
    "2015-11-23": (A, mos) Första utgåvan inför kurs webapp.
updated: "2015-11-23 16:06:17"
created: "2015-11-23 16:05:20"
---
Installera verktyget jq för att söka i JSON-filer
==================================

[FIGURE src=/image/snapht15/jq-logo.png?w=c5 class="right"]

När vi jobbar med JSON data kan filerna snabbt bli stora och svåra att överskåda och hitta informationen i. Med hjälp av ett verktyg som jq kan vi söka och visa informationen i en JSON fil.

Ett verktyg som jq kan vara bra för den webbprogrammerare som skall jobba med JSON. Artikeln visar hur du installerar och kommer igång med verktyget.

<!--more-->



Webbplatsen för jq {#intro}
--------------------------------------

Det finns en [webbplats för jq](https://stedolan.github.io/jq/) där du kan läsa manualen och det finns en tutorial som ger en översikt till verktyget.



Testa onlinevarianten jqplay {#online}
--------------------------------------

Det finns en onlinevariant [jqplay](https://jqplay.org/) där du kan testköra verktyget via ett webbgränssnitt. Där finns också ett cheatsheets om hjälper dig att komma igång med grunderna och det finns flera inbygga exempel som hjälper dig igång.

[FIGURE src=/image/snapht15/jq-play.png?w=w2 caption="Jag testar en av de inbyggda konstruktionerna i jq."]

Pröva de inbygga konstruktionera och redigera dem för att komma igång med hur du kan använda verktyget.



Installera {#installera}
--------------------------------------

Via webbplatsen ser du olika alternativ för att installera. De som jag själv väljer för våra vanligaste miljöer är följande.

För Linux/Debian med apt-get.

```bash
$ sudo apt-get install jq
```

För OS X med brew.

```bash
$ brew install jq
```

För Windows med apt-cyg.

```bash
$ apt-cyg install jq
```
<!-- För Windows med [chocolatey](https://chocolatey.org/).

```bash
$ chocolatey install jq
```

Det finns ett inlägg i forumet som visar hur jag [installerar Chocolatey och jq](f/40159). Du kan installera verktyget via Windows egna kommandoradsklient och du kan köra verktyget via Cygwin. -->



Använd verktyget vid terminalen {#terminalen}
--------------------------------------

När du installerat verktyget behöver du en JSON-fil för att komma igång. Här är en [JSON-fil](https://raw.githubusercontent.com/dbwebb-se/webapp/60ab93653ab2d4d26316f4585c79a93d79de3501/example/arbetsformedlingen/soklista_lan.json) som innehåller en översikt av lediga jobb i Sveriges alla län. Ladda ned den och börja testa.

```bash
$ wget -O af.json https://raw.githubusercontent.com/dbwebb-se/webapp/60ab93653ab2d4d26316f4585c79a93d79de3501/example/arbetsformedlingen/soklista_lan.json
```

Börja med att visa hjälptexten om jq samt dess manualsida.

```bash
$ jq
$ man jq
```

För att visa innehållet i JSON-filen, med färgformattering, kan du köra följande kommando. Färgformatteringen var påslagen för mig, även utan `-C` men i Cygwin behövde jag lägga till `-C` för att få färgen.

```bash
$ jq '.' af.json
$ jq -C '.' af.json
```

Början av `af.json` ser ut så här.

```bash
$ more af.json
{
    "soklista": {
        "listnamn": "lan",
        "sokdata": [
            {
                "antal_ledigajobb": 740,
                "antal_platsannonser": 423,
                "id": 10,
                "namn": "Blekinge l\u00e4n"
            },
```

I slutet av `af.json` finns det två värden som anger totalt antal lediga jobb och platsannonser.

```bash
$ tail af.json
                "antal_ledigajobb": 1040,
                "antal_platsannonser": 293,
                "id": 90,
                "namn": "Ospecificerad arbetsort"
            }
        ],
        "totalt_antal_ledigajobb": 66187,
        "totalt_antal_platsannonser": 36678
    }
}
```

Dessa värden kan jag välja ut på följande sätt.

```bash
$ jq '.soklista.listnamn' af.json
"lan"
$ jq '.soklista.totalt_antal_ledigajobb' af.json
66187
$ jq '.soklista.totalt_antal_platsannonser' af.json
36678
```

Ett annat sätt att se vilka nycklar som finns i objektet är med den inbyggda funktionen `keys`.

```bash
$ jq 'keys' af.json
[
  "soklista"
]
```

Vill man sedan se vilka nycklar det objektet innehåller så tittar man vidare.

```bash
$ jq '.soklista | keys' af.json
[
  "listnamn",
  "sokdata",
  "totalt_antal_ledigajobb",
  "totalt_antal_platsannonser"
]
```

I mitten av filen ligger en array `.soklista.sokdata` som innehåller varje län i form av ett objekt. Låt se hur många rader arrayen innehåller och vad det första och sista värdet innehåller.

```bash
$ jq '.soklista.sokdata | length' af.json
22
$ jq '.soklista.sokdata[0]' af.json
{
  "antal_ledigajobb": 740,
  "antal_platsannonser": 423,
  "id": 10,
  "namn": "Blekinge län"
}
$ jq '.soklista.sokdata[21]' af.json
{
  "antal_ledigajobb": 1040,
  "antal_platsannonser": 293,
  "id": 90,
  "namn": "Ospecificerad arbetsort"
}
```

Låt oss lista samtliga id som finns i arrayens respektive objekt. Det är ett id för varje län.

```bash
$ jq '.soklista.sokdata[].id' af.json
```

Välj ut alla län vars id är större än 30.

```bash
$ jq '.soklista.sokdata[] | select(.id > 30) ' af.json
{
    "antal_ledigajobb": 1040,
    "antal_platsannonser": 293,
    "id": 90,
    "namn": "Ospecificerad arbetsort"
}
```

Välj ut det län som har ett id som är lika med 6.

```bash
$ jq '.soklista.sokdata[] | select(.id == 6) ' af.json
{
    "antal_ledigajobb": 2556,
    "antal_platsannonser": 1396,
    "id": 6,
    "namn": "Jönköpings län"
}
```

Det var ett par exempel så du kommer igång på egen hand. Kika igenom manualen så du vet vilka konstruktioner som du kan använda.



Avslutningsvis {#avslutning}
--------------------------------------

Ett verktyg likt jq kan vara behändigt när du jobbar med stora JSON filer och när du testar dina egna filer för att se vad de innehåller och hur du kan söka ut data ur dem.

Har du [tips, förslag eller frågor om artikeln](t/4861) så finns det en specifik forumtråd för det.
