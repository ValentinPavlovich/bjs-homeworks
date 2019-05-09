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

    let P, C, A;

    if (parseFloat(percent)) {
        P = parseFloat((percent / 100) / 12);
    } else {
        return `Параметр 'Процентная ставка' содержит неправильное значение '${percent}'`;
    }

    if (parseInt(contribution) || contribution == 0) {
        C = (parseInt(contribution)) ? parseInt(contribution) : 0;
    } else {
        return `Параметр 'Начальный взнос' содержит неправильное значение '${contribution}'`;
    }

    if (parseInt(amount)) {
        A = parseInt(amount);
    } else {
        return `Параметр 'Общая стоимость' содержит неправильное значение '${amount}'`;
    }

    let sum = A * (P + P / (Math.pow(1 + P, n) - 1));
    let totalAmount = sum + (A - C);
    console.log(totalAmount);

    return totalAmount.toFixed(2);
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
    console.log(greeting);
    return greeting;
}