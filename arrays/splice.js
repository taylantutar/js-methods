let names = ["Ahmet", "Ayşe", "Mehmet", "Kaan", null, undefined];

names.splice(1,0, "Arda" , "Metin") // (start,deleteCount, additems)
console.log(names);
// [
//     'Ahmet',  'Arda',
//     'Metin',  'Ayşe',
//     'Mehmet', 'Kaan',
//     null,     undefined
// ]

console.log("*************");

let names2 = ["Ahmet", "Ayşe", "Mehmet","Kaan"];
let removed = names2.splice(1,2, "Arda" , "Metin");
console.log(removed); // [ 'Ayşe', 'Mehmet' ]
console.log(names2) // [ 'Ahmet', 'Arda', 'Metin', 'Kaan' ]
