let names = ["Ali", "Ayşe", "Fatma"];
let animals = ["Leon", "Tiger"];

console.log(names.toString()); // Ali,Ayşe,Fatma
console.log("*************");

console.log(names.at(1)); // Ayşe
console.log(names.at(2)); // Fatma
console.log(names.at(3)); // undefined
console.log("*************");

console.log(names.concat(animals)); // [ 'Ali', 'Ayşe', 'Fatma', 'Leon', 'Tiger' ]
console.log("*************");

console.log(names.find(x => x.length > 3)); // Ayşe
console.log(names.filter(x => x.length > 3)); // [ 'Ayşe', 'Fatma' ]
console.log("*************");

console.log(names.join('-')); // Ali-Ayşe-Fatma
console.log("*************");

console.log(names.reverse()); // [ 'Fatma', 'Ayşe', 'Ali' ]
console.log("*************");
