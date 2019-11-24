function initCheckBirthday() {
    const birthday = document.getElementById('birthday').value;

    const result = checkBirthday(birthday) ? "Да" : "Нет";

    document.getElementById('disclaimer').innerHTML = result;   
}

function checkBirthday(birthday) {
    // код для задачи №1 писать здесь
    let now = Date.now(new Date());
    let dateOfBirthday = +new Date(birthday);
    console.log(dateOfBirthday);
    let diff = now - dateOfBirthday;
    let age = diff / (1000 * 60 * 60 * 24 * 365.25);
    return age >= 18 ? true : false;
}


function initPrintAnimalSound() {
    const animal = {
        sound: 'grrrr',
    };

    const result = getAnimalSound(animal);

    document.getElementById('sound').innerHTML = result;   
}

function getAnimalSound(animal) {
    // код для задачи №2 писать здесь
    let sound = animal.sound;
    return sound === undefined ? null : sound;
    }

function initCalculateStatement() {
    for (let idx = 0; idx < 3; idx++) {
        const marks = document.getElementById('learner-' + idx).value.split(',');

        const average = getAverageMark(marks);

        document.getElementById('learner-' + idx + '-average').innerHTML = average;
    }
}

function getAverageMark(marks) {
    // код для задачи №3 писать здесь
    let arrayMarks = [];
    let roundedAverage = 0;
    let sum = 0;

    for (let i = 0; i < marks.length; i++) {
        arrayMarks[i] = parseInt(marks[i], 10);
        sum += arrayMarks[i];
    }
    return roundedAverage = Math.round(sum / arrayMarks.length);
}