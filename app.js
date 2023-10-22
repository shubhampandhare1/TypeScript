"use strict";
// const num1Ele = document.getElementById('num1') as HTMLInputElement;
// const num2Ele = document.getElementById('num2') as HTMLInputElement;
// const btnEle = document.querySelector('button')!;
// function add(num1: number, num2: number) {
//     return num1 + num2;
// }
// btnEle.addEventListener('click', () => {
//     const num1 = num1Ele.value;
//     const num2 = num2Ele.value;
//     const result = add(+num1, +num2);
//     console.log(result);
// })
//>>>>>>>>>>>>>    Working with Union Type    <<<<<<<<<<<<<<<<<<<<//
// const num1Ele = document.getElementById('num1') as HTMLInputElement;
// const num2Ele = document.getElementById('num2') as HTMLInputElement;
// const btnEle = document.querySelector('button')!;
// function add(num1: number | string, num2: number | string) {
//     if (typeof num1 === 'number' && typeof num2 === 'number') {
//         return num1 + num2;
//     }
//     else if (typeof num1 === 'string' && typeof num2 === 'string') {
//         return num1 + num2;
//     }
//     return +num1 + +num2;
// }
// btnEle.addEventListener('click', () => {
//     const num1 = num1Ele.value;
//     const num2 = num2Ele.value;
//     const result = add(+num1, +num2);
//     const stringResult = add(num1, num2);
//     console.log(result);
//     console.log(stringResult);
// })
//>>>>>>>>>>>>>>>   Using Object & Array Types  <<<<<<<<<<<<<<<<<<<<<<//
// const num1Ele = document.getElementById('num1') as HTMLInputElement;
// const num2Ele = document.getElementById('num2') as HTMLInputElement;
// const btnEle = document.querySelector('button')!;
// //Array Types ==>
// const numResult: number[] = [];
// const textResult: string[] = [];
// function add(num1: number | string, num2: number | string) {
//     if (typeof num1 === 'number' && typeof num2 === 'number') {
//         return num1 + num2;
//     }
//     else if (typeof num1 === 'string' && typeof num2 === 'string') {
//         return num1 + num2;
//     }
//     return +num1 + +num2;
// }
// //Object Type==>
// //  In below function argument we are not creating the object,
// //  we are just defining the structure of the object, we are defining the so called object type
// function printResult(resObj: { val: number; timeStamp: Date }) {
//     console.log(resObj.val)
// }
// btnEle.addEventListener('click', () => {
//     const num1 = num1Ele.value;
//     const num2 = num2Ele.value;
//     const result = add(+num1, +num2);
//     numResult.push(result as number);     // Array Types
//     const stringResult = add(num1, num2);
//     textResult.push(stringResult as string);      // Array Types
//     console.log(result);
//     console.log(stringResult);
//     console.log(numResult, textResult);      //Array Types Result
//     //Object Type==>
//     printResult({ val: result as number, timeStamp: new Date() });
// })
//>>>>>>>>>>>   Working with Type Aliases & Interfaces  <<<<<<<<<<//
const num1Ele = document.getElementById('num1');
const num2Ele = document.getElementById('num2');
const btnEle = document.querySelector('button');
const numResult = [];
const textResult = [];
function add(num1, num2) {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 + num2;
    }
    else if (typeof num1 === 'string' && typeof num2 === 'string') {
        return num1 + num2;
    }
    return +num1 + +num2;
}
function printResult(resObj) {
    console.log(resObj.val);
}
btnEle.addEventListener('click', () => {
    const num1 = num1Ele.value;
    const num2 = num2Ele.value;
    const result = add(+num1, +num2);
    numResult.push(result);
    const stringResult = add(num1, num2);
    textResult.push(stringResult);
    console.log(result);
    console.log(stringResult);
    console.log(numResult, textResult);
    printResult({ val: result, timeStamp: new Date() });
});
//>>>>>>>>>>    Understanding Generics  <<<<<<<<<<<<//
//Array
const numArr = [];
//Promises
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('It Worked');
    }, 2000);
});
myPromise.then((result) => {
    console.log(result.split(' '));
});
