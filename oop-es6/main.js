// Задача №1. Оружие

class Weapon {
    constructor(name, attack, durability, range) {
        this.name = name;
        this.attack = attack;
        this.durability = durability;
        this.range = range;
        this.defaultDurability = durability;
    }

    takeDamage(damage) {
        if (damage <= this.durability) {
            this.durability -= damage;
        } else {
            this.durability = 0;
        }
    }

    getDamage() {
        if (this.durability >= (this.defaultDurability * 0.3)) {
            return this.attack;
        } else if (this.durability == 0) {
            return 0;
        } else {
            return this.attack / 2;
        }
    }

    isBroken() {
        return this.durability == 0;
    }
}

const oldSword = new Weapon('Старый меч', 20, 10, 1, 10);
const sword = new Weapon('Меч', 25, 500, 1, 500);
const arm = new Weapon('Рука', 1, Infinity, 1, Infinity);
const bow = new Weapon('Лук', 10, 200, 3, 200);
const knife = new Weapon('Нож', 5, 300, 1, 300);
const staff = new Weapon('Посох', 8, 300, 2, 300);
  
const longBow = new Weapon('Длинный лук', 15, bow.durability, 4, bow.durability);
const battleAxe = new Weapon('Секира', 27, 800, sword.range, 800);
const stormStaff = new Weapon('Посох Бури', 10, staff.durability, 3, staff.durability);


oldSword.takeDamage(5);
console.log(oldSword.durability);
oldSword.takeDamage(50);
console.log(oldSword.durability);

arm.takeDamage(20);
console.log(arm.durability);

bow.takeDamage(20);
console.log(bow.durability);
bow.takeDamage(200);
console.log(bow.durability);


console.log('\n');
knife.takeDamage(200);
console.log(knife.getDamage());

console.log(bow.durability);
console.log(bow.getDamage());

console.log(arm.durability);
console.log(arm.getDamage());


console.log(bow.durability);
console.log(bow.isBroken());

console.log(arm.durability);
console.log(arm.isBroken());


// Задача №2. Переработка оружия
console.log('\n');

class Arm extends Weapon {
    constructor() {
        super('Рука', 1, Infinity, 1, Infinity);
    }
}

const arm1 = new Arm();
console.log(arm1);

class Bow extends Weapon {
    constructor () {
        super('Лук', 10, 200, 3, 200);
    }
}

const bow1 = new Bow();
console.log(bow1);

class OldSword extends Weapon {
    constructor() {
        super('Старый меч', 20, 10, 1, 10);
    }
}

const sword1 = new OldSword();
console.log(sword1);

class Knife extends Weapon {
    constructor(){
        super('Нож', 5, 300, 1, 300)
    }
}

const knife1 = new Knife();
console.log(knife1);

class Staff extends Weapon {
    constructor() {
        super('Посох', 8, 300, 2, 300);
    }
}

const staff1 = new Staff();
console.log(staff1);


console.log('\n');
class LongBow extends Bow {
    constructor(durability) {
        super(durability);
        this.name = 'Длинный лук';
        this.attack = 15;
        this.range = 4;
    }
}

const longBow1 = new LongBow();
console.log(longBow1);

class Axe extends OldSword {
    constructor(durability) {
        super(durability);
        this.name = 'Секира';
        this.attack = 27;
        this.durability = 800;
        this.defaultDurability = 800
    }
}

const axe1 = new Axe();
console.log(axe1);

class StormStaff extends Staff {
    constructor(durability) {
        super(durability);
        this.name = 'Посох Бури';
        this.attack = 10;
        this.range = 3;
    }
}
 
const stormStaff1 = new StormStaff();
console.log(stormStaff1);

console.log('\n');
longBow1.takeDamage(250);
console.log(longBow1.durability);
console.log(longBow1.getDamage());
console.log(longBow1.isBroken());


axe1.takeDamage(400);
console.log(axe1.durability);
console.log(axe1.getDamage());
console.log(axe1.isBroken());

stormStaff1.takeDamage(250);
console.log(stormStaff1.durability);
console.log(stormStaff1.getDamage());
console.log(stormStaff1.isBroken());


// Задача №3. Школьный журнал
console.log('\n');

class StudentLog {
    constructor (name) {
        this.name = name;
        this.grades = {};
    }

    getName() {
        return this.name;
    }

    addGrade(grade, subject) {
        if (this.grades[subject] === undefined) {
            this.grades[subject] = [];
        }

        if (grade > 1 || grade < 5) {
            this.grades[subject].push(grade);
        } else {
            console.log(`Вы пытались поставить оценку ${grade} по предменту ${subject}, допускаются только числа от 1 до 5`);
        }

        return (this.grades[subject].length);
    }

    getAverageBySubject (subject) {
        if (this.grades[subject] === undefined || this.grades[subject] == 0) {
            return `По предмету ${subject} оценок нет`
        }

        let sum = 0;

        for (let grade in this.grades[subject]) {
            sum += this.grades[subject][grade];
        }

        const averageBySubject = sum / this.grades[subject].length;
        return `Средняя оценка по предмету ${subject} равна ${averageBySubject}`;
    }

    getTotalAverage () {
        let totalSum = 0;
        let countGrades = 0;

        for (let subject in this.grades) {
            for (let grade in this.grades[subject]) {
                totalSum += this.grades[subject][grade];
                countGrades ++;
            }
        }

        if (totalSum === 0 || countGrades === 0) {
            return `Ни по одному из предметов нет оценок`;
        }
    }
}

const log = new StudentLog('Олег Никифоров');

console.log(log.getName());

console.log(log.addGrade(2, 'algebra'));
console.log(log.addGrade(6, 'algebra'));
console.log(log.addGrade('Отлично!', 'algebra'));
console.log(log.addGrade(4, 'algebra'));
console.log(log.addGrade(5, 'geometry'));
console.log(log.addGrade(4, 'geometry'));

console.log(log.getAverageBySubject('geometry'));
console.log(log.getAverageBySubject('algebra'));
console.log(log.getAverageBySubject('math'));

console.log(log.getTotalAverage());