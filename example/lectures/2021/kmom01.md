# kmom01

## Agenda

1. Välkommen
2. JavaScript
3. Mobil design och använderupplevelse

## Välkommen

Välkomst och kursintro finns i Canvas. Så vi kan fokusera på innehållet istället.

JavaScript

Mobil design och använderupplevelse

## JavaScript

Många använder JavaScript ramverk utan att kunna underliggande teknologi.

I dessa två första kursmoment ska vi titta på JavaScript och hur språket är uppbyggt för att vi får en bättre förståelse för ramverken senare.

En del kommer säkert vara repetition från javascript i höstas, men hoppas bidra med lite nytt.


#### What does the research say?

[Factors and actors leading to the adoption of a JavaScript framework](https://link.springer.com/article/10.1007/s10664-018-9613-x)



### Scope

```javascript
var elephant = "elephant";
```

Exempelprogram: `errors.js` och `scope.js`.



#### What does the research say?

Principle of Least Privilege (PoLP)

P. J. Denning (December 1976). "Fault tolerant operating systems". ACM Computing Surveys. 8 (4): 359–389. doi: [https://dl.acm.org/doi/10.1145/356678.356680](https://dl.acm.org/doi/10.1145/356678.356680).

Jerry H. Saltzer, Mike D. Schroeder (September 1975). "The protection of information in computer systems". Proceedings of the IEEE. 63 (9): 1278–1308. CiteSeerX 10.1.1.126.9257. doi: [https://doi.org/10.1109%2FPROC.1975.9939](https://doi.org/10.1109%2FPROC.1975.9939)

Exempelprogram: `function_expression.js`.


#### 5-minutare: Har vi tidigare i programmen/kurspaketen stött på denna principen? Hur har vi gjort då?


### Closures

> Functions are first class objects / citizens

[https://developer.mozilla.org/en-US/docs/Glossary/First-class_Function](https://developer.mozilla.org/en-US/docs/Glossary/First-class_Function)

Vi kan alltså tilldela funktioner till variabler och vi kan skicka med funktioner som argument till funktioner. Exempel på detta är när ni gör callbacks till exempel för en `EventListener` eller ett AJAX anrop med `XMLHttpRequest` eller `fetch`.

```javascript
var element = document.getElementById("element");

element.addEventListener("click", handleClick);

function handleClick(event) {
    console.log(event.target);
}
```

När vi jobbar med objekt använder vi pass-by-reference och inte pass-by-value som vi har sett tidigare med andra datatyper som heltal, strängar och booleska värden. Exempelprogram `object.js` och `closure.js`.


### Nästa vecka

Tar vi en titt på hur vi kan använda funktioner tillsammans med Array och npgra av de inbyggda higher-order functions (funktioner som tar en annan funktion som argument) och funktionell programmering i JavaScript.



## Mobil design och användarupplevelse

En röd tråd i denna kursen är hur vi anpassar design och UX för små mobila enheter.


### Typografi

Readability vs Legibility

Legibility är en egenskap för typsnittet och den enskilda bokstaven.

Readability är hur vi designat text i allmänhet. Vi kan ha ett typsnitt med hög Legibility, men kass Readability.


#### 5-minutare: Vilka typsnitt har bra Legibility tycker ni? Vilka sidor har bra Readability?

Exempelprogram: `index.html`, `bad_readability.css` och `good_readability.css`;



#### What does the research say?

Aries Arditi, Jianna Cho, Serifs and font legibility, Vision Research, Volume 45, Issue 23, 2005, Pages 2926-2933, ISSN 0042-6989, https://doi.org/10.1016/j.visres.2005.06.013

Michael Bernard, Chia Hui Liao, and Melissa Mills. 2001. The effects of font type and size on the legibility and reading time of online text by older adults. In CHI '01 Extended Abstracts on Human Factors in Computing Systems (CHI EA '01). Association for Computing Machinery, New York, NY, USA, 175–176. DOI:https://doi.org/10.1145/634067.634173



## JSON-API - order_api

[Lager API:t](https://lager.emilfolino.se/v2) - [GitHub](https://github.com/emilfolino/order_api)

Baseras till dels på denna specifikation: [jsonapi.org/](https://jsonapi.org/)

#### Vad händer när vi går in på en webbsida eller skickar en förfrågan till ett API?

Vi skapar en HTTP Session mellan klienten (webbläsaren/JavaScript) och servern.

Vi kan skicka en `GET`, `POST`, `PUT`, `DELETE` och ett antal andra requests.

Vi får tillbaka ett svar.

![REQUEST](https://documentation.help/DogeTool-HTTP-Requests-vt/http_requestmessageexample.png)

![RESPONSE](https://documentation.help/DogeTool-HTTP-Requests-vt/http_responsemessageexample.png)


Läs mer:

[Samlingssida HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP)

[En session](https://developer.mozilla.org/en-US/docs/Web/HTTP/Session)

[Request Methods](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)

[Response Status](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)

[Headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers) relevant sen i kmom04.
