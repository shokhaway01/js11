// // массивы

// const myArr = [1,2,3];

// for(arr of myArr){
//     // console.log(arr);
// }

// const newArr = new Array(1,2,3,4,5,6,79,7,7,9,5,2,1,5,6);
// // for(a of newArr) console.log(a);

// // console.log(myArr);


// const hilol = [
//     {
//         relative: "sister",
//         age: 19
//     },

//     {
//         relative: 'father',
//         age: 35
//     },
//     {
//         relative: "mother",
//         age:33
//     }
// ]

// for(each of hilol){
//     console.log('This is Hilol\'s ' + each.relative + '. he/she is ' + each.age + 'y.o');
//     console.log(" ")
// }

// // основные методы массивов кторые облегчат работу с ними.

// const family = new Array(1, true, "shokha");

// let a = family.length;
// // console.log(a)

// // push - добавляет новый элемент в конец массива.

// family.push("Karimov")

// // console.log(family)


// // pop - удаляет последний элемент массива.
// family.pop()
// // console.log(family)

// // unshift - добавляет новый жлемент в начало массива. используется очень редко так как метод pop используется чаще

// family.unshift("abs")
// // console.log(family)

// // forEach - метод

// const num = new Array(5,4,3,2,1)
// let s = 0

// num.forEach( el => console.log(s += el) )

// console.log(num)


// // MAP - метод массивов которые часто используются в реакте

// const letter = new Array(
//     "shokha",
//     "bekha",
//     "xonda"
// )

// console.log(letter);

// const notNewArr = letter.map( el => el + "jon" )
// console.log(notNewArr)



// операторы в жс 

// Конкотенация строк

// console.log( 'arr' + ' object');
// console.log(5 + ' - длина массива');

// // инеркемент и декремент
// // в чем разница прежфиксной и посфиксной 

// let incr = 10,
//     decr = 10;


// console.log(++incr);
// console.log(decr--);
// console.log(5%2); // 5%2 = 1

//     /* 
//     = оператор присваивания
//     == сравнивание по значению
//     === приравнивание типа данных
//     */


// // логические операторы || и &&

// let isChecked = true,
//     isClose  = false;
    
// console.log(isChecked || isClose)


// Циклы

// For While Do while

// let num = 1;


// while (num < 100){
//     console.log(num)
//     num =+ num + num;
// }


// Массивы это объекты которые содержать элементы по порядку

// let arr = new Array(1,2,3,4,5,6,7,8,9,10);

// console.log(arr)

// arr.pop()
// console.log(arr)
// arr.push(11);
// console.log(arr)
// arr.shift();
// console.log(arr)
// arr.unshift(0)
// console.log(arr)

// for (item of arr){ 
//     console.log(item);
// }


// FOREACH

// arr.forEach(
//     (item, idx) => {
//         console.log(item + " является " + idx + " элементом по счету" )
//     }
// )

// For of || for in

// for ( key in arr){
//     console.log(key);
// }

// for (item of arr){
//     console.log(item)
// }




// let nArr = [
//     "asda",
//     'adasd',
//     "afghlkjd"
// ], i = nArr.join();

// console.log(i)

// let b = i.split(",")
// console.log(b)



//OOP

// let solider = {
//     healt: 400,
//     armor: 100
// }

// let john = {
//     healt: 100
//     // armor: 0
// }

// john.__proto__ = solider;
 

// console.log(john);
// console.log(john.armor)


// Делегирование событий!

// let ism = prompt();

function sayHI() {
    alert("Honda")
}

setTimeout(sayHI,1500);

let time = 0;

while (time <= 60) {
     setInterval(() => {
        console.log(`Hello world ${time} seconds`);
        time++
     }, 1000);
}
