// Задача №1. Корни квадратного уравнения
function getSolutions(a,b,c) {
    let D = Math.pow(b, 2) - 4 * a * c;

    if (D < 0) {
        return {
            D: D
        };     
    } else if (D === 0) {
        let x1 = (-b) / (2 * a);
        return {
            roots: [ x1 ],
            D: D
        };
    } else {
        let x1 = ((-b) + Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);
        let x2 = ((-b) - Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);
        return {
            roots: [ x1, x2 ],
            D: D
        };
    }
}

function showSolutionsMessage(a,b,c) {
    let result = getSolutions(a,b,c);
    console.log('Вычисляем корни квадратного уравнения ' + a + 'x² + ' + b + 'x + ' + c);
    console.log('Значение дискриминанта: ' + result.D);
    
    if (result.roots === undefined) {
        console.log('Уравнение не имеет вещественных корней');
        return;
    } else if (result.roots.length === 1) {
        console.log('Уравнение имеет один корень X₁ = ' + result.roots[0]);
        return;
    } else {
        console.log('Уравнение имеет два корня. X₁ = ' + result.roots[0] +', X₂ = ' + result.roots[1]);
        return;
    }
 }

showSolutionsMessage(1,2,3);
showSolutionsMessage(7,20,-3);
showSolutionsMessage(2,4,2);

// Задача №2. Журнал успеваемости
function getAverageScore(data) {
    console.log('\n');

    let averageSumOfMarks = 0;
    let k = 0;
    for (let prop in data) {
        let value = data[ prop ];
        
        let sumOfMarks = 0;
        for (let i = 0; i < value.length; i++) {
            sumOfMarks += value[i]
        }
        
        let averageMark = sumOfMarks /value.length;
        console.log(`${prop}: ${averageMark}`);

        averageSumOfMarks += averageMark;
        k++;
    }
    
    data.average = averageSumOfMarks/k;
    console.log('average: ' + data.average);
    return data;
}

console.log(getAverageScore({
    algebra: [2, 4, 5, 2, 3, 4],
    geometry: [2, 4, 5],
    russian: [3, 3, 4, 5],
    physics: [5, 5],
    music: [2, 2, 6],
    english: [4, 4, 3],
    poetry: [5, 3, 4],
    chemistry: [2],
    french: [4, 4]
}));