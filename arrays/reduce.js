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
        surname: "Ekici",
        age: 20,
        notes: [66, 8, 90]
    },
    {
        name: "Murat",
        surname: "Demir",
        age: 18,
        notes: [10, 80, 40]
    }
]

let totalAge = students.reduce((acc, student) => {
    return acc + student.age
}, 0);
console.log(totalAge);
console.log("*************");

const sameName = students.reduce((acc, student) => {
    if (student.name in acc) {
        acc[student.name] += 1;
    } else {
        acc[student.name] = 1;
    }
    return acc;
}, {})
console.log(sameName)
console.log("*************");

let key = "age"
let groupedByAge = students.reduce((acc,student) => {
    if(acc[student[key]]){
        acc[student[key]].push(student);
    }else{
        acc[student[key]] = [];
        acc[student[key]].push(student);
    }
    return acc;
},{})
console.log(groupedByAge);

