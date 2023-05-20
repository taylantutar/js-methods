let names = ["Ahmet", "Ayşe", "Mehmet", "Kaan", null, undefined];

console.log(names.slice(1, 2)); // [ 'Ayşe' ]

console.log(names.slice(0)); // [ 'Ahmet', 'Ayşe', 'Mehmet', 'Kaan', null, undefined ]

console.log(names.slice(-1,-3));  // []

console.log(names.slice()) // [ 'Ahmet', 'Ayşe', 'Mehmet', 'Kaan', null, undefined ]

console.log("*************");

let n1 = names.slice(1, 2);
console.log(n1) // [ 'Ayşe' ]
n1[0] = "Ece";
console.log(names); // [ 'Ahmet', 'Ayşe', 'Mehmet', 'Kaan', null, undefined ]
console.log(n1) // [ 'Ece' ]


