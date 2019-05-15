// Задача №1. Оружие
class Weapon {

    constructor(object) {
        this.name = object.name;
        this.attack = object.attack;
        this.durability = object.durability;
        this.range = object.range;
        this.defaultDurability = object.durability;
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
            return this.attack /= 2;
        }
    }

    isBroken() {
        return this.durability == 0;
    }
}

const oldSword = new Weapon({
  name: 'Старый меч',
  attack: 20,
  durability: 10,
  range: 1
});

const sword = new Weapon({
  name: 'Меч',
  attack: 25,
  durability: 500,
  range: 1
})

const arm = new Weapon({
  name: 'Рука',
  attack: 1,
  durability: Infinity,
  range: 1
});

const bow = new Weapon({
  name: 'Лук',
  attack: 10,
  durability: 200,
  range: 3
});

const knife = new Weapon({
  name: 'Нож',
  attack: 5,
  durability: 300,
  range: 1
})

const staff = new Weapon({
  name: 'Посох',
  attack: 8,
  durability: 300,
  range: 2
})

const longBow = new Weapon({
  name: 'Длинный лук',
  attack: 15,
  durability: bow.durability,
  range: 4
})

const battleAxe = new Weapon({
  name: 'Секира',
  attack: 27,
  durability: 800,
  range: sword.range
})

const stormStaff = new Weapon({
  name: 'Посох бури',
  attack: 10,
  durability: staff.durability,
  range: 3
})


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


console.log(bow.durability);
console.log(bow.getDamage());

console.log(arm.durability);
console.log(bow.getDamage());


console.log(bow.durability);
console.log(bow.isBroken());

console.log(arm.durability);
console.log(bow.isBroken());

// Задача №2. Переработка оружия
console.log('\n');
class arm1 extends Weapon {
    constructor() {
        super({
            name: 'Рука',
            attack: 1,
            durability: Infinity,
            range: 1
          });
        }
      };
const arm2 = new arm1();
console.log(arm2.name, arm2.attack, arm2.durability, arm2.range);

class bow1 extends Weapon {
    constructor() {
        super({
            name: 'Лук',
            attack: 10,
            durability: 200,
            range: 3
          });
        }
      };
const bow2 = new bow1();
console.log(bow2.name, bow2.attack, bow2.durability, bow2.range);

class sword1 extends Weapon {
    constructor() {
        super({
            name: 'Меч',
            attack: 25,
            durability: 500,
            range: 1
          });
        }
      };
const sword2 = new sword1();
console.log(sword2.name, sword2.attack, sword2.durability, sword2.range);

class knife1 extends Weapon {
    constructor() {
        super({
            name: 'Нож',
            attack: 5,
            durability: 300,
            range: 1
          });
        }
      };
const knife2 = new knife1();
console.log(knife2.name, knife2.attack, knife2.durability, knife2.range);

class staff1 extends Weapon {
    constructor() {
        super({
            name: 'Посох',
            attack: 8,
            durability: 300,
            range: 2
          });
        }
      };
const staff2 = new staff1();
console.log(staff2.name, staff2.attack, staff2.durability, staff2.range);


class longBow1 extends bow1 {
    constructor(object) {
        super(object);
        this.name = object.name;
        this.parent = object.parent;
        this.attack = object.attack;
        this.range = object.range;
    }
}
const longBow2 = new longBow1({
    name: 'Длинный лук',
    parent: bow.name,
    attack: 15,
    range: 3
})
console.log(longBow2.name, longBow2.parent, longBow2.attack, longBow2.range, longBow2.durability);

class battleAxe1 extends sword1 {
    constructor(object) {
        super(object);
        this.name = object.name;
        this.parent = object.parent;
        this.attack = object.attack;
        this.durability = object.durability;
    }
}
const battleAxe2 = new battleAxe1({
    name: 'Секира',
    parent: sword.name,
    attack: 27,
    durability: 800
})
console.log(battleAxe2.name, battleAxe2.parent, battleAxe2.attack, battleAxe2.range, battleAxe2.durability);

class stormStaff1 extends staff1 {
    constructor(object) {
        super(object);
        this.name = object.name;
        this.parent = object.parent;
        this.attack = object.attack;
        this.range = object.range;
    }
}
const stormStaff2 = new stormStaff1({
    name: 'Посох бури',
    parent: staff.name,
    attack: 10,
    range: 3
})
console.log(stormStaff2.name, stormStaff2.parent, stormStaff2.attack, stormStaff2.range, stormStaff2.durability);

// Задача №3. Школьный журнал
console.log('\n');
class StudentLog {
    constructor (name) {
        this.name = name;
        this.grades = {};
    };

    getName() {
        return this.name;
    };

    addGrade(grade, subject) {
        if (this.grades[subject] === undefined) {
            this.grades[subject] = [];
        };

        if (grade > 1 || grade < 5) {
            this.grades[subject].push(grade);
        } else {
            console.log(`Вы пытались поставить оценку ${grade} по предменту ${subject}, допускаются только числа от 1 до 5`);
        };

        return (this.grades[subject].length);
    };

    getAverageBySubject (subject) {
        if (this.grades[subject] === undefined || this.grades[subject] == 0) {
            return `По предмету ${subject} оценок нет`
        };

        let sum = 0;

        for (let grade in this.grades[subject]) {
            sum += this.grades[subject][grade];
        };

        const averageBySubject = sum / this.grades[subject].length;

        return `Средняя оценка по предмету ${subject} равна ${averageBySubject}`;
    };

    getTotalAverage () {
        let totalSum = 0;
        let countGrades = 0;

        for (let subject in this.grades) {
            for (let grade in this.grades[subject]) {
                totalSum += this.grades[subject][grade];
                countGrades ++;
            }
        };

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