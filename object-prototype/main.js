function initCheckBirthday() {
    const birthday = document.getElementById('birthday').value;

    const result = checkBirthday(birthday) ? "Да" : "Нет";

    document.getElementById('disclaimer').innerHTML = result;   
}

function checkBirthday(birthday) {
    // код для задачи №3
    let now = Date.now();
    let dateOfBirthday = new Date(birthday);
    let birthday1 = dateOfBirthday.getTime();
    let diff = now - birthday1;
    let averageSum = ((3 * 31536000000) + 31622400000) / 4;
    let age = Math.floor(diff / averageSum);
    
    return age >= 18;
}

function initPrintAnimalSound() {
    const animal = {
        sound: 'grrrr',
    };

    const result = getAnimalSound(animal);

    document.getElementById('sound').innerHTML = result;   
}

function getAnimalSound(animal) {
    // код для задачи №1
    let sound = animal.sound;

    if (sound === undefined) {
        return null;
    } else {
        return sound;
    }
}

function initCalculateStatement() {
    for (let idx = 0; idx < 3; idx++) {
        const marks = document.getElementById('learner-' + idx).value.split(',');

        const average = getAverageMark(marks);

        document.getElementById('learner-' + idx + '-average').innerHTML = average;
    }
}

function getAverageMark(marks) {
    // код для задачи №2
    let sumOfMarks = 0;

    for (let i = 0; i < marks.length; i++) {
        sumOfMarks += parseInt(marks[i]);
    }

    let average = sumOfMarks / marks.length;
    let roundedAverage = Math.round(average);

    return roundedAverage;
}