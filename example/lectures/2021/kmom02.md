# kmom02

## Agenda

1. Funktionell programmering i JavaScript
2. Knappar och SASS
3. Lager-API:t och mer om requests

## Funktionell programmering i JavaScript

### First-class functions & Higher-order functions

Funktioner kan skickas med som argument till andra funktioner.

Higher-order funktioner är funktioner som tar andra funktioner som argument. Exempel på dessa är `addEventListener`, `fetch` och sen de vi ska titta på idag.

Dokumentation: [Array.prototype](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

Exempelprogram: `filter.js`, `map.js`, `reduce.js`.

Funktionerna kan även samarbeta.

#### 5-minutare: Vilka fördelar ser ni med dessa funktioner?

#### Intermezzo: Let's Webpack


### Pure functions

En pure function är en funktion som inte har några sido-effekter:

* Muterar / ändrar inte på det globala state.
* Producerar alltid samma output med samma input.

Pure:
```javascript
function quadratic(n) {
    return n * n;
}
```

Ej pure:
```javascript
function randomize(n) {
    return Math.floor(Math.random() * n);
}
```

Exempelprogram: `pure.js`

### Rekursion

När en funktion anropar sig själv.

Viktigt att ha ett slut villkor och att vi jobbar oss mot villkoret.

Exempelprogram: `recursion.js`

#### 5-minutare: har vi sett vissa funktionella inslag tidigare i utbildningarna?

#### What does the research say?

John Backus. 1978. Can programming be liberated from the von Neumann style? a functional style and its algebra of programs. Commun. ACM 21, 8 (Aug. 1978), 613–641. DOI:https://doi.org/10.1145/359576.359579

## Knappar och SASS

Tillbakablick på förra veckan: Typografi - [en modular skala](https://typographyhandbook.com/#font-sizing)

Stora och lätta att trycka på både för höger- och vänsterhänta.

#### What does the research say?

Da Tao, Juan Yuan, Shuang Liu, Xingda Qu, Effects of button design characteristics on performance and perceptions of touchscreen use, International Journal of Industrial Ergonomics, Volume 64, 2018, Pages 59-68, ISSN 0169-8141, https://doi.org/10.1016/j.ergon.2017.12.001

[NN Group: Tablet Usability](https://www.nngroup.com/articles/tablet-usability/)


### Utveckla på mobilen??

Utvecklarverktyg på mobilen.


### SASS och webpack

Verktyg för att packa ihop. Två mål:

* Lättare för användaren
* Färre och mindre filer att hämta, parsea, rendera i webbläsaren.


Pihkola, H., Hongisto, M., Apilo, O., & Lasanen, M. (2018). Evaluating the energy consumption of mobile data transfer-from technology development to consumer behaviour and life cycle thinking. https://doi.org/10.3390/su10072494

Aslan, Joshua & Mayers, Kieren & Koomey, Jonathan & France, Chris. (2017). Electricity Intensity of Internet Data Transmission: Untangling the Estimates: Electricity Intensity of Data Transmission. Journal of Industrial Ecology. https://doi.org/10.1111/jiec.12630



## Lager-API:t och mer om requests
