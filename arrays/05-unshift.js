const names = ["Mehmet", "Tekin"];
names.unshift('Zeki');
console.log(names) // [ 'Zeki', 'Mehmet', 'Tekin' ]
names.unshift('Metin', 'Kemal');
console.log(names) // [ 'Metin', 'Kemal', 'Zeki', 'Mehmet', 'Tekin' ]
