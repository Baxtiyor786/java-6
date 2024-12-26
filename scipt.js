// let fruits = ["Яблоко", "Банан", "Апельсин",]

// console.log(fruits)

// // push() добавляет элемент (или несколько элементов) в конец массива.

// fruits.push('Jonka');

// console.log(fruits);

// let qovunKalala = ['Abdulloh', 'Hadi', 'Yusup', 'MR Abdulaziz']

// console.log(qovunKalala)


// //pop() удаляет последний элемент массива и возвращает его.
// qovunKalala.pop()

// console.log(qovunKalala)

// //shift()  удаляет первый элемент массива и возвращает его.
// qovunKalala.pop()

// console.log(qovunKalala)

// //unshift() добавляет элемент (или несколько элементов) в начало массива.
// qovunKalala.unshift('OlimKal');

// console.log(qovunKalala)

// // length возвращает количество элементов в массиве.
// console.log(qovunKalala.length);


alert("Boshlanishida arrayingiz:4");
let fruits = ['olma', 'banan', 'gilos', 'shoftoli'];
console.log(fruits)

let confirm1 = confirm("Sizning arrayingizdan ma'lumotlarni olib tashlamoqchimiz");

if (confirm1) {
    fruits.pop();
    alert("arrayingiz 3");
    console.log(fruits)
} else {
    alert("arrayingiz 4");
    console.log(fruits)
}