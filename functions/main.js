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
        let x1 = ((-b) + Math.sqrt(D)) / (2 * a);
        let x2 = ((-b) - Math.sqrt(D)) / (2 * a);
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

    let k = 0;
    let averageSumOfMarks = 0;
    let arr = {};

    for (let prop in data) {
        let averageMark = 0;

        averageMark = sum(data[prop]);
        console.log(`${prop}: ${averageMark}`);

        averageSumOfMarks += averageMark;
        arr[prop] = averageMark;
        k++;
    }

    function sum(value) {
    
        let averageMark = 0;
        for (let i = 0; i < value.length; i++) {
            averageMark += value[i]
        }
        averageMark = averageMark / value.length
        return averageMark;
    }    
        
    averageSumOfMarks = averageSumOfMarks / k;
    console.log('average: ' + averageSumOfMarks);
    return arr;
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

// Задача №3. Расшифровка данных
function getPersonData(secretData) {
    console.log('\n');
    
    function nameSearch(value) {
		let name = ["Родриго", "Эмильо"];
		return name[value];
	}
    
    return {
		firstName: nameSearch(secretData.aaa), 
		lastName: nameSearch(secretData.bbb)
	};
}

console.log(getPersonData({
    aaa: 0,
    bbb: 0
}));

console.log(getPersonData({
    aaa: 1,
    bbb: 0
}));

console.log(getPersonData({
    aaa: 0,
    bbb: 1
}));

console.log(getPersonData({
    aaa: 1,
    bbb: 1
}));