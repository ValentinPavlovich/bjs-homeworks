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
    // код для задачи №1
    "use strict";

    let now = new Date();
    let date1 = new Date(date);
    
    let n = 12 * (date1.getFullYear() - now.getFullYear()) + (date1.getMonth() - now.getMonth());
    console.log(n);
    let P = (percent / 100) / 12 ;
    console.log(P);

    /* Ввод: 10,0,50000,12. Вывод: 52749.53
       Ввод: 10,1000,50000,12. Вывод: 51694.54
       Ввод: 10,0,20000,24. Вывод: 22149.56
       Ввод: 10,1000,20000,24. Вывод: 21042.09
       Ввод: 10,20000,20000,24. Вывод: 0
       Ввод: 10,0,10000,36. Вывод: 11616.19
       Ввод: 15,0,10000,36. Вывод: 12479.52 

       Платеж = S*(P+P/(((1+P)^n)-1)), где: S - сумма кредита, 
       P - 1/12 процентной ставки (от 0 до 1), 
       n - количество месяцев ^ - возведение в степень*/

    let totalAmount = amount * (P + P / (((1 + P) ** n ) - 1));
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
    // код для задачи №2
    if (name === null || name === undefined || name === "") {
      name = 'Аноним';
    }

    let greeting = `Привет, мир! Меня зовут ${name}.`;
    console.log(`Привет, мир! Меня зовут ${name}.`);
    return greeting;
}