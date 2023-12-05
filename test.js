// let num = [100,20,30,40,-1000];

// Ans - 01 - Checking if numbers are divisible by 10
// let result = num.every((e)=> e%10 == 0)

// console.log(result);

// Ans - 02 - returning the lowest value from array
// let result = num.reduce((min,ele) => min < ele ? min : ele )

// console.log(result);

// Ans - 03 - applying the Ans02 logic in a function

// function getming (arr){
//     let result = num.reduce((min,ele) => {
//         if (min < ele) {
//             return min;
//         } else {
//             return ele;
//         }
//     });
//     return result;
// }

    
// function (n){

//     for (let i=0; i<n.le){}

//     }

// JS (Part-8) PQ

// Ans - 01

// let arr = [1,2,3,4,5];
// let modifiedArr = arr => {
//     let newArr = arr.map( num => num*num );
//     console.log(newArr);
//     let sum = newArr.reduce((acc,ele) => acc + ele);
//     return sum / arr.length;
// }

// console.log(modifiedArr(arr));

// Ans - 02

// let q2 = arr.map( num => num + 5);
// console.log(q2);

// Ans - 03 

// const arr2 = ['a','b','c','d','e'];

// let newArr = arr2.map( char => char.toUpperCase());
// console.log(newArr);

// Ans - 04

// let double = (arr,...args) => {
//     let argsdobled = args.map( n => n + n);
//     return final = [...arr,...argsdobled];
// } 

// console.log(double(arr, 10, 20, 30, 40, 50));

// //  OR 

// let double = (arr,...args) => [
//     ...arr,
//     ...args.map( n => n + n),
// ];

// console.log(double(arr, 10, 20, 30, 40, 50));

// Ans - 05 

// const obj1 = {
//     name1 : "MSM",
//     age1 : 90,
//     gender1 : "Male",
//     home1 : "AKDM",
// }

// const obj2 = {
//     name2 : "PSM",
//     age2 : 95,
//     gender2 : "Male",
//     home2 : "Anirdesh",
// }

// let mergeObjects = (obj1, obj2) => {
//         let newObj = {
//             ...obj1,
//             ...obj2,
//         };
//         console.log(newObj);
// };

// mergeObjects(obj1, obj2)