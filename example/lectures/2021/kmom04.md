# kmom04

### Agenda

1. JWT och headers
2. GDPR
3. Mithril Masterclass



## JWT och headers

När vi skickar en request/förfrågan eller får tillbaka en response/svar skickas en header.

![REQUEST](https://documentation.help/DogeTool-HTTP-Requests-vt/http_requestmessageexample.png)

![RESPONSE](https://documentation.help/DogeTool-HTTP-Requests-vt/http_responsemessageexample.png)

Hur ser det ut från utvecklarens sida i till exempel [Lager API:t](https://lager.emilfolino.se/v2#examples).



## GDPR

Var allra mest relevant första året kursen i denna utgåva gick. Infördes 28/5 2018.

[GPDR](https://gdpr-info.eu)



## Formulär och tabeller

### Formulär

I formulär viktigt att anpassa tangent bordet till användningsområdet. Misstänker många kommer störa sig enormt på detta i framtiden, jag stör mig på det 5 gångar om dagen minst. Se till att skapa kontext i formuläret, speciellt viktigt om man behöver scrolla.

Exempel: [Försäkringskassan](https://www.forsakringskassan.se/)



### Tabeller

Svårt. Oändligt med yta vertikalt.



### Exempel

[Bootstrap](https://getbootstrap.com) - [Bootstrap Formulär](https://getbootstrap.com/docs/5.0/forms/overview/) - [Bootstrap Tabeller](https://getbootstrap.com/docs/5.0/content/tables/)

[Foundation](https://get.foundation) - [Foundation Formulär](https://get.foundation/sites/docs/forms.html) - [Foundation Tabeller](https://get.foundation/sites/docs/table.html)

[Material Design](https://material.io) - [Material Design Formulär](https://material.io/components/text-fields) - [Material Design Tabeller](https://material.io/components/data-tables)

[Bulma](https://bulma.io) - [Bulma Formulär](https://bulma.io/documentation/form/) - [Bulma Tabeller](https://bulma.io/documentation/elements/table/)



## Mithril Masterclass

![Leif](https://imageproxy.b17g.services/?format=jpg&quality=80&resize=894x503&source=https%3A%2F%2Fasset-images.b17g.net%2Fapi%2Fv2%2Fimg%2F5e4e50fce4b071ce13a17788-1582190844810-.jpg)

### Skriven masterclass

Tyvärr blev jag sjuk och kommer utgå från `bakery` exemplet i nedanstående kod. Jag har även kommenterat upp det lite bättre.

#### Vad är vnode?

Först en länk till [mithril's dokumentation](https://mithril.js.org/vnodes.html) om Virtual DOM.

Vnodes är JavaScript objekt och ett träd av dessa objekt renderas till det DOM-träd som vi ser.

Nedan har jag skrivit ut vnode-objektet som skickas med till form vyn (`js/views/form.js`):

```javascript
let editForm = {
    oninit: function(vnode) {
        // utskrift av vnode-objekt för att
        // exemplifiera virtuella noder och ///// det virtuella DOM-trädet.
        console.log(vnode);

        // vnode.attrs.id innehåller det id
        // vi skickar med som en del av urln
        // form/:id. Vi hämtar rätt bakverk
        // med hjälp av id
        bakery.load(vnode.attrs.id);
    },
    view: function() {
        ...
    }
};
```

Vnode objektet:

```javascript
{
  "tag": {},
  "attrs": {
    "id": "18357"
  },
  "children": [],
  "dom": {},
  "state": {},
  "instance": {
    "tag": "div",
    "attrs": {
      "className": "container"
    },
    "children": [
      {
        "tag": "h2",
        "attrs": null,
        "text": "Ändra kaka",
        "dom": {},
        "state": {}
      },
      {
        "tag": "form",
        "attrs": {},
        "children": [
          {
            "tag": "label",
            "attrs": {
              "className": "input-label"
            },
            "text": "Namn",
            "dom": {},
            "state": {}
          },
          {
            "tag": "input",
            "attrs": {
              "type": "text",
              "placeholder": "Name",
              "className": "input"
            },
            "children": [],
            "dom": {},
            "state": {},
            "events": {}
          },
          {
            "tag": "label",
            "attrs": {
              "className": "input-label"
            },
            "text": "Lagerplats",
            "dom": {},
            "state": {}
          },
          {
            "tag": "input",
            "attrs": {
              "type": "text",
              "placeholder": "Lagerplats",
              "className": "input"
            },
            "children": [],
            "dom": {},
            "state": {},
            "events": {}
          },
          {
            "tag": "label",
            "attrs": {
              "className": "input-label"
            },
            "text": "Lagersaldo",
            "dom": {},
            "state": {}
          },
          {
            "tag": "input",
            "attrs": {
              "type": "number",
              "placeholder": "Lagersaldo",
              "className": "input"
            },
            "children": [],
            "dom": {},
            "state": {},
            "events": {}
          },
          {
            "tag": "label",
            "attrs": {
              "className": "input-label"
            },
            "text": "Typ",
            "dom": {},
            "state": {}
          },
          {
            "tag": "select",
            "attrs": {
              "className": "input"
            },
            "children": [
              {
                "tag": "option",
                "attrs": {
                  "value": "Tårta"
                },
                "text": "Tårta",
                "dom": {},
                "state": {}
              },
              {
                "tag": "option",
                "attrs": {
                  "value": "Bröd"
                },
                "text": "Bröd",
                "dom": {},
                "state": {}
              },
              {
                "tag": "option",
                "attrs": {
                  "value": "Småkaka"
                },
                "text": "Småkaka",
                "dom": {},
                "state": {}
              }
            ],
            "dom": {
              "0": {},
              "1": {},
              "2": {}
            },
            "state": {},
            "events": {}
          },
          {
            "tag": "input",
            "attrs": {
              "type": "submit",
              "value": "Save",
              "className": "button green-button button"
            },
            "text": "Spara",
            "dom": {},
            "state": {}
          }
        ],
        "dom": {
          "0": {},
          "1": {},
          "2": {},
          "3": {
            "0": {},
            "1": {},
            "2": {}
          },
          "4": {}
        },
        "state": {},
        "events": {}
      }
    ],
    "dom": {},
    "state": {}
  }
}
```

#### Ternary-operator

I `js/views/list.js` listar vi alla bakverk i Emil's konditori. Här utnyttjar vi konstruktionen ternary-operator för att visa upp beroende på om det det finns bakverk eller ej.

```javascript
// Ternary-operator:
// [villkor ? retur-värde om sant : retur-värde om falskt]
// Här utnyttjar vi inline-if-satsen ternary-operator
// om det finns något i currentCakes laddar vi listan
// Annars en text om att det inte finns kakor.
// 3 sekunders timeout i modellen gör att först syns texten
// Sen syns listan. Se komponenterna ovan.
// Är ett bra sätt att få många små komponenter som har
// ett ansvarsområde.
// Också kallat SRP - single responsibility principle.
// Även ett sätt att skapa en loading-snurra.
m("div.cake-container", bakery.currentCakes.length ?
                            m(cakeList) :
                            m(noCakes))
```


#### Active i menyn

Vi vill ibland ha ett vald element i vår navigation. Här samverkar filerna `js/views/index.js` och `js/views/layout.js`.

Till m-funktionen kan vi skicka 2 eller 3 argument.

2-argument: m("p", "Hello") första argumentet är nuvarande element, andra argumentet är barn. Blir till följande HTML i DOM-trädet: <p>Hello</p>

3-argument: m("p", { class: "blue" }, "Hello") där andra argumentet är options till exempel en klass eller andra värden vi vill skicka med.


__index.js__

```javascript
// I nedanstående exempel skickar med två värden topNav och
// bottomNav. Vi når de i layout under vnode.attrs
"/login": {
    render: function() {
        return m(layout, {
            topNav: { route: "#!/", title: "Hem"},
            bottomNav: "#!/login"
        }, m(login));
    }
}
```

__layout.js__

```javascript
view: function(vnode) {
    // För att förenkla nedanstående kod sparar jag i två variabler
    let topNav = vnode.attrs.topNav;
    let bottomNav = vnode.attrs.bottomNav;

    return [
        m("nav.top-nav", { textContent: "Emils konditori"}, [
            // Vi använder ternary-operator och beroende på om
            // v har satt topNav i index.js visas en länk eller ej
            topNav ?
                m("span", [
                    m("a", { href: topNav.route }, topNav.title)
                ]) :
                null
        ]),
        // I main-contianer visar vi upp barn-noderna.
        // de skickades med från index.js som en komponent
        // tillexempel m(list)
        m("main.container", vnode.children),
        // Vi loopar igenom alla links vi har satt ovan
        m("nav.bottom-nav", layout.links.map(function(link) {
            // Vi vill bara att man kan lägga till nya bakverk
            // om man är inloggat. Vi kollar om token finns i auth
            // och om länken är #!/new
            // "Varvet" i map-loopen avslutas här genom att
            // returnera null, som inte renderas till nånting av
            // mithril
            if (link.route === "#!/new" && auth.token === "") {
                return null;
            }

            // Vi returnerar ett a element per link
            // beroende på om bottomNav värdet är lika med
            // nuvarande links route sätts en klass på elementet
            // till active.
            return m("a", {
                href: link.route,
                class: bottomNav === link.route ? "active" : null
            }, link.name);
        }))
    ];
}
```

#### value kopplat till modell (Andreas genomgång)

```javascript
m("label.input-label", "Namn"),
// I nedanstående kod använder vi oss av två attribut
// oninput och value.
// value skuggar/har samma värde som ett attribut i
// modellen (bakery.current.name), vi ändrar sedan
// detta värde och sätter det till e.target.value ////
// varje vi skriver i fältet. value (och det som finns
// i fältet ) uppdateras per automatik utifrån
// modellens värde/state.

m("input.input[type=text][placeholder=Name]", {
    oninput: function (e) {
        bakery.current.name = e.target.value;
    },
    value: bakery.current.name
}),
```

#### Vald i en select

Ett problem som uppstår när vi använder `onchange` för att sätta värdet i en select är att om vi inte ändrar i selecten får vi aldrig ett värde. Det lösas lättast på två lite olika sätt: Ha ett default icke valbart element eller sätta värdet i `current` till första elementet i arrayen efter laddning.

```javascript
// js/views/new.js
m("label.input-label", "Typ"),
m("select.input", {
    onchange: function (e) {
        bakery.current.specifiers = e.target.value;
    },
    // Sätter required true då löser webbläsaren det mesta
    required: true
}, [
    // Ytterligare ett element med value satt till en tom sträng
    m("option", { value: "" }, "Välj en typ"),
    bakery.cakeTypes.map(function(cakeType) {
        return m("option", { value: cakeType }, cakeType);
    })
]),
```

I formuläret för att ändra vill vi ha med värdet som är sparat i API:t till formuläret. Enklast görs det med hjälp av `selected`:

```javascript
// js/views/form.js
m("label.input-label", "Typ"),
m("select.input", {
    onchange: function (e) {
        bakery.current.specifiers = e.target.value;
    }
},               bakery.cakeTypes.map(function(cakeType) {
        return m("option", {
            value: cakeType,
            // Jämför current specifiers med cakeType
            // uttrycket returnerar sant eller falskt
            selected: bakery.current.specifiers === cakeType
        }, cakeType);
    })
),
```
