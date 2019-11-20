"use strict"

function calculateMortgage() {
    let percent = window.percent.value;
    let contribution = window.contribution.value;
    let amount = window.amount.value;
    let date = window.date.value;

    let result = calculateTotalMortgage(percent, contribution, amount, date);
    let span = window.mortageResult;
    span.textContent = result;
}

function calculateTotalMortgage(percent, contribution, amount, date) {

    // код для задачи №1 писать здесь
    //return totalAmount; 
  let credit = [];

  for (let i = 0; i < arguments.length - 1; i++) {
    credit[i] = parseInt(arguments[i], 10);
    if (isNaN(arguments[i])) {
      return `Параметр ${i + 1} содержит неправильное значение ${arguments[i]}`;
    }
  }

let S = amount - contribution;
let P = (percent / 100) / 12;
let newdate = new Date();
let end = new Date(date);
let n = ((end.getMonth() - newdate.getMonth()) + (12 * (end.getFullYear() - newdate.getFullYear())));
let pay = S * (P + P / (((1 + P) ^ n)-1));
let totalAmount = (n * pay).toFixed(2);
console.log(totalAmount);
return totalAmount;
}


function sayHello() {
    let name = window.personName.value;
    let greeting = getGreeting(name);
    let span = window.helloResult;
    span.textContent = greeting;
}

function getGreeting(name) {
    // код для задачи №2 писать здесь
    //return greeting;

    if (name == null || name == undefined || name == Number(name)) {
        name = 'Аноним';
        console.log(`Привет, мир! Меня зовут ${name}`);
        return `Привет, мир! Меня зовут ${name}`;
      } else { 
        console.log(`Привет, мир! Меня зовут ${name}`);
        return `Привет, мир! Меня зовут ${name}`;
      }
    }