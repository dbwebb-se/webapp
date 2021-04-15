(function iife() {
    for (let i = 10; i > 0; i--) {
        console.log(i);
    }

    function countdown(n) {
        console.log(n);

        return n > 1 ? countdown(n - 1) : 1;
    }

    countdown(10);
})();

const institution = [
    { name: "DIDA", parent: null},
    { name: "DIPT", parent: null},
    { name: "efo", parent: "DIDA"},
    { name: "mos", parent: "DIDA"},
    { name: "cjh", parent: "DIPT"},
    { name: "klw", parent: "DIDA"},
    { name: "aar", parent: "DIDA"},
    { name: "jbo", parent: "DIPT"},
    { name: "DV1609", parent: "efo"},
    { name: "PA1436", parent: "efo"},
    { name: "PA1438", parent: "cjh"},
    { name: "PA1445", parent: "jbo"},
    { name: "DV1611", parent: "klw"},
    { name: "DV1608", parent: "mos"},
    { name: "DV1531", parent: "aar"},
];


function makeTree(inst, parent) {
    let tree = {};

    inst.forEach(function(element) {
        if (element.parent === parent) {
            tree[element.name] = makeTree(inst, element.name);
        }
    });

    return tree;
}

let completeTree = makeTree(institution, null);

console.log(completeTree);
