'use strict';

/* Combination of a function and lexical scope */

const passPrecourse = function () {
    let studentCount = 0;

    return function () {
        studentCount++;
        console.log(`${studentCount} students.`)
    };
};

const passed = passPrecourse();

passed();
passed();
passed();

console.dir(passed);

/* [[Scopes]]: Scopes[3]
0: Closure (passPrecourse) {studentCount: 3}
1: Script {passPrecourse: ƒ, passed: ƒ}
2: Global {window: Window, self: Window, document: document, na... */


/* More examples */

function a() {
    let grandpa = 'grandpa';
    return function b() {
        let father = 'father';
        return function c() {
            let son = 'son';
            // function c has access to all outer functions scopes? don't they get garbage collected?
            return `${grandpa} > ${father} > ${son}`
        };
    };
};

console.log(a());
console.log(a()());
console.log(a()()());


/* More examples */

const friends = (str) => (names) => (names2) => console.log(`${str} ${names} ${names2}`);

friends('Hello')('Hack')('Reactor');

/* More examples */

let f;

const g = function () {
    const a = 20;
    f = function () {
        console.log(a * 2);
    };
};

const h = function () {
    const b = 550;
    f = function () {
        console.log(b * 2);
    };
};

console.log(g);
console.dir(g);
g();

console.log(f);
console.dir(f);
f();

console.log(h);
console.dir(h);
h();

console.log(f);
console.dir(f);
f();

/* More examples */

const boardPassengers = function (n, wait) {
    const perGroup = n / 3;

    setTimeout(() => {
        console.log(`We are boarding all ${n} passsengers.`)
        console.log(`There are 3 groups, each with ${perGroup} passengers.`)
    }, wait * 1000);
    console.log(`Will start boarding in ${wait} seconds.`)
}
// const perGroup = 300; // closure >>> scope chain!
boardPassengers(90, 3);

function callMeBack() {
    const callMe = 'You can call me now!';
    setTimeout(() => {
        console.log(callMe);
    }, 4000);
};

callMeBack();


/* More examples */

(function () {
    const header = document.querySelector('h1');
    header.style.color = 'purple';

    /* How? Why? is closure???? */
    document.querySelector('body').addEventListener('click', () => header.style.color = 'red');

})();


/* Closures are memory efficient and can do Encapsulation */
/* More examples coming soon */