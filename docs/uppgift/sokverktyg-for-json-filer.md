---
author:
    - lew
    - efo
category:
    - javascript
    - kurs webapp
revision:
    "2020-02-05": "(D, efo) Gjorde om till labbverktyget."
    "2017-04-28": "(C, aar) Förtydligade krav 15, att alla användarnamn ska hittas och inte bara det första."
    "2017-04-05": "(B, mos) Ändrade krav 13 från felaktiga 3 till 7 som facit visar."
    "2015-11-23": "(A, mos) Första utgåvan i samband med kursen webapp."
---
Sökverktyg för JSON filer
==================================

Använd applikationen jq och labbverktyget för att söka och visualisera data i en JSON fil. Svara på ett antal frågor genom att kombinera sökfrågor som du kör i verktyget jq och på det viset skapar du en egen förståelse för hur innehållet i en mer komplex JSON fil är uppbyggt.

<!--more-->



Förkunskaper {#forkunskaper}
-----------------------

Du har jobbat igenom artikeln "[Installera verktyget jq för att söka i JSON-filer](kunskap/installera-verktyget-jq-for-att-soka-i-json-filer)" och du har tillgång till verktyget jq via terminalen.



Hämta labben {#hamta}
-----------------------

Labben automatgenereras för dig. Gör så här för att checka ut din personliga labb.

Gå till din kurskatalog i terminalen och kör följande kommando.

```shell
# Flytta till kurskatalogen
dbwebb create jq
```

Materialet till labben skapas nu och sparas i din kurskatalog enligt följande.

| Fil                | Innehåll                                                              |
|--------------------|-----------------------------------------------------------------------|
| `instruction.html` | Beskrivning av labben och de uppgifter som skall göras.               |
| `answer.bash`      | Här skall du skriva din kod för att lösa respektive uppgift i labben. |
| `tag-dbwebb.json`          | textfil för vissa av uppgifterna.                              |


Öppna filen `instruction.html` i en webbläsare och läs igenom de uppgifter som labben omfattar.

Öppna filen `answer.bash` i din texteditor och koda ihop svaren på uppgifterna.

Skriv dina jq uttryck kod inom `$( )` för att den ska exekveras och returnera svaret, ex.:

```bash
ANSWER=$( jq 'keys' tag-dbwebb.json )
```

Du kan testa dina lösningar genom att köra programmet `answer.bash` i din terminal.

```shell
$ bash answer.bash
```



Krav {#krav}
-----------------------

1. Gör de uppgifter som finns i labben `instruction.html`.

2. Skriv dina lösningar, på rätt plats, i filen `answer.bash`.

3. Testkör din labb genom att köra filen `answer.bash`.

4. Ladda upp, validera och publicera labben genom att göra följande kommando i kurskatalogen i terminalen.

```shell
# Flytta till kurskatalogen
dbwebb validate jq
dbwebb publish jq
```

Rätta eventuella fel som dyker upp och publicera igen. När det ser grönt ut så är du klar.



Tips från coachen {#tips}
-----------------------

Se till att dela upp problemen i mindre problem. Du kan använda `|` - pipe för att filtrera data.



Lycka till och hojta till i forumet om du behöver hjälp!
