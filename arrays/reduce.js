const students = [
    {
        name: "Ali",
        surname: "Kaya",
        age: 18,
        notes: [15, 56, 78]
    },
    {
        name: "Elif",
        surname: "Mete",
        age: 19,
        notes: [45, 12, 9]
    },
    {
        name: "Ali",
        surname: "Kaya",
        age: 20,
        notes: [66, 8, 90]
    }
]

let totalAge = students.reduce((acc , student) => {
    return acc +  student.age
},0);
console.log(totalAge);