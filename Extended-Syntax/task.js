

function calculateQuadraticEquation(){
    let a = +window.a.value;
    let b = +window.b.value;
    let c = +window.c.value;
    let result = getResult(a,b,c);
    window.equation.textContent = `${a}*x^2 + (${b})*x + (${c}) = 0`;
    let span = window.result;
    span.textContent = "х = "+result;
}

function getResult(a,b,c){
    // код для задачи №1
    "use strict";

    let D = Math.pow(b, 2) - 4 * a * c;
    console.log('Дискриминант: ' + D);

    if (D < 0) {
        console.log('Корней нет');
        return;
      } else {
          if (D === 0) {
            let x = (-b) / (2 * a);
            console.log('Один корень: ' + x);
            return x;
          }
          console.log('Два корня: ' + ((-b) + Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a) + ', ' + ((-b) - Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a));
          return [
              ((-b) + Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a),
              ((-b) - Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a)
          ];
        }
}

function calculateDrinkTask(){
    let name = window.personName.value;
    let dateOfBirthday = new Date(window.dateOfBirthday.value);
    let drink = askDrink(name, dateOfBirthday);
    window.drink.textContent = drink;
}

function askDrink(name,dateOfBirthday){
    // код для задачи №3
    let now = new Date();
    console.log('Возраст пользователя: ' + (now.getFullYear() - dateOfBirthday.getFullYear()));

    if ((now.getFullYear() - dateOfBirthday.getFullYear()) >= 18) {
        let result = `Не желаете ли олд-фэшн, ${name}?`;
        console.log(result);
        return result;
    }

    let result = `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`
    console.log(result);
    return result;
}

function calculateAverageRating(){
    let marks = window.marks.value.split("").map(Number).filter((n)=> !isNaN(n) && n > 0);
    let averageMark = getAverageMark(marks);
    window.averageMark.textContent = averageMark;
}

function getAverageMark(marks){
    // код для задачи №2
    if (marks.length > 5) {
        console.log('Количество оценок больше 5');
        marks.length = 5;
    }

    let sumOfMarks = 0;
    for (let i = 0; i < marks.length; i++) {
        sumOfMarks += marks[i]
    }
    
    let averageMark = sumOfMarks / marks.length;
    return averageMark;
}
