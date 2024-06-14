---
author:
  - mos
  - efo
category: webbprogrammering
revision:
  "2020-03-30": (C, efo) Uppdaterade för att passa kolada API:t istället.
  "2018-03-14": (B, efo) Native Postman istället för Chrome App.
  "2015-10-28": (A, mos) Första utgåvan inför kursen webapp.
updated: "2015-10-28 08:19:23"
created: "2015-10-27 16:36:50"
---
Utvecklingsverktyg för RESTful tjänster
==================================

När du utvecklar mot servrar som har ett RESTful API så underlättar det att ha ett par bra utvecklingsverktyg som hjälper dig att skicka requestarna till server och kanske även hjälper dig att visa och hantera svaren.

<!--more-->

Låt oss titta på tre varianter som hjälper dig att komma igång och undersöka en server som publicerat ett RESTful API: Postman, Curl och jQ.



En RESTful tjänst att testa mot {#rest}
-----------------------

Först behöver vi en RESTful tjänst som vi kan använda för att testa mot. Jag väljer [Kolada API](https://www.kolada.se/), som är en tjänst för att jämföra kommuner och landsting.

Där finns bland annat ett API endpoint, en URL, för att hitta skolor i Sverige och i de olika kommunerna.

Det jag använder är en länk som ger mig alla skolor i Karlskrona.

Informationen som behövs för att testa verktygen är en basurl till API:et och en metod att använda.



Postman {#postman}
-----------------------
Postman har tidigare varit en Chrome App, men är nu släppt som en native app. [Installera Postman](https://www.getpostman.com/apps) för ditt operativ system, är ett oerhört användbart verktyg för att testa API:er.

Så här kan det se ut när jag gör en request med Postman.

[FIGURE src=/image/snapht15/postman.png?w=w2 caption="En request mot ett API med Postman."]

Postman känns som ett potent verktyg med möjligheter att spara undan och synka arbetsytan.



<!-- REST Easy för Firefox {#resteasy}
-----------------------

Till Firefox finns en Addn-on som heter [REST Easy](https://github.com/nathan-osman/REST-Easy). Jag söker efter den bland Firefox Add-ons och installerar den.

[FIGURE src=/image/snapht15/firefox-resteasy.png?w=w2 caption="Installera REST Easy som en Firefox Add-on."]

Så här kan det se ut när jag gör en request med REST Easy.

[FIGURE src=/image/snapht15/resteasy.png?w=w2 caption="En request mot AFs API med Postman."]

REST Easy känns som en enklare lillebror till Postman, men ändock lika användbart och enkelt utan att krångla till saker. -->



Curl på kommandoraden {#curl}
-----------------------

Verktyg är trevliga men ibland vill man ha tillgång till en enkel och snabb variant på kommandoraden. Låt oss se hur kommandot curl kan hantera det som Postman nu gjort.

Först prövar vi bara att koppla upp oss mot tjänsten för att hitta vilket ID Karlskrona har i Koladas API.

```bash
$ curl http://api.kolada.se/v2/municipality?title=karlskrona
{"count": 1, "values": [{"id": "1080", "title": "Karlskrona", "type": "K"}]}
```

Det gick ungefär som väntat. Vi ser att det finns en kommun (K) med id't 1080. Låt oss då använda ID't för att se vilka skolor som finns i Karlskrona kommun.

```bash
$ curl http://api.kolada.se/v2/ou?municipality=1080&title=skola
{"count": 168, "values": [{"id": "V15E108000701", "municipality": "1080", "title": "Rödebyskolan F-9"}, {"id": "V15E108000801", "municipality": "1080", "title": "Nättraby kunskapscentrum 7-9"}, {"id": "V15E108000901", "municipality": "1080", "title": "Fridlevstadsskolan F-6"}, {"id": "V15E108000904", "municipality": "1080", "title": "Tvingskola F-6"}, {"id": "V15E108001101", "municipality": "1080", "title": "Spandelstorpskolan F-6"}, ---
```




<!-- ###Curl i Bash-script {#bash}

Om man gör detta många gånger så underlättar det att göra ett litet Bash-script. Här är en variant som jag döper till `af.bash`.

```bash
#!/bin/bash
curl \
    --silent   \
    --header "Accept: application/json" \
    --header "Accept-Language: sv" \
    --header "From: mos@dbebb.se" \
    http://api.arbetsformedlingen.se/af/v0/$* \
    | python3 -mjson.tool
```

I skriptet ovan använder jag en modul i Python, `python3 -mjson.tool`, för att formattera JSON så det blir enklare att läsa.

Så här ser det ut när jag kör skriptet.

```bash
$ ./af.bash platsannonser/soklista/lan
{
  "soklista": {
    "listnamn": "lan",
    "totalt_antal_platsannonser": 35250,
    "totalt_antal_ledigajobb": 64362,
    "sokdata": [
      {
        "id": 10,
        "namn": "Blekinge län",
        "antal_platsannonser": 400,
        "antal_ledigajobb": 715
      },
```

Nu blir det enklare att se resultatet. -->



### Sök i JSON data med jq {#jq}

En annan variant att formattera snyggt är programmet [jq](https://stedolan.github.io/jq/) som är en utility för att jobba med JSON data. Där kan jag få färgkodad utskrift vilket gör det än enklare att läsa innehållet i svaret. Med hjälp av `jq` kan man söka i JSON-svaret och enbart visa delar av svaret. Det kan vara behändigt när man söker efter viss information i större filer. Vi kommer jobba vidare med `jq` senare under kursen.

Här är ett exempel där jag kombinerar curl och jq.

```bash
$ curl -s "http://api.kolada.se/v2/ou?municipality=1080&title=skola" | jq "."
{
  "count": 30,
  "values": [
    {
      "id": "V15E108000701",
      "municipality": "1080",
      "title": "Rödebyskolan F-9"
    },
    {
      "id": "V15E108000901",
      "municipality": "1080",
      "title": "Fridlevstadsskolan F-6"
    },
    {
      "id":"V15E108000904",
      "municipality": "1080",
      "title": "Tvingskola F-6"
    },
    {
      "id": "V15E108001101",
      "municipality": "1080",
      "title": "Spandelstorpskolan F-6"
    },
    ---
```

Och med jq kan vi sedan plocka ut till exempel count

```bash
$ curl -s "http://api.kolada.se/v2/ou?municipality=1080&title=skola" | jq ".count"
30
```

Som du ser så kan curl och jq vara alternativa verktyg att jobba mot RESTful tjänster. Att använda kommandoraden kan vara ett kraftfullt alternativ till de verktyg vi såg inledningvis.



Avslutningsvis {#avslutning}
--------------------------------------

Detta var en genomgång av ett par användbara verktyg när man jobbar mot en RESTful server.

Du kan ställa frågor eller ge tips och förslag i den [forumtråd som är kopplad till artikeln](t/4750).
