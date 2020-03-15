class AlarmClock {

    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    }

    addClock(time,callback,id) {
        if (!id) {
            console.error('Ошибка! Параметр "id" не передан');
            return;
        }
        if (this.alarmCollection.find(item => item.id === id)) {
            console.error('Ошибка! Параметр "id" уже существует');
            return;
        }
        this.alarmCollection.push({id,callback,time});
}

    removeClock(id) {
        if (this.alarmCollection.some(item => item.id === id)) {
            this.alarmCollection = this.alarmCollection.filter(item => item.id !== id);
            console.log( `Будильник ${id} удален!`);
            return true;
        } else {
            console.log(`Будильника ${id} несуществует!`);
            return false;
        }      
    }

    getCurrentFormattedTime() {
        let date = new Date();
        let hour = date.getHours();
        let minutes = date.getMinutes();

        if (hour < 10) {
            hour = `0${hour}`;
        }

        if (minutes < 10) {
            minutes = `0${minutes}`;
        }
        return `${hour}:${minutes}`;
    }

    start() {
        function checkClock(item) {
            if (item.time = newDate) {
                return item.callback();
            }
        }

        let newDate = this.getCurrentFormattedTime();
        let interval = setInterval(() => {
            this.alarmCollection.forEach(item => checkClock(item))
        }, 1000);
        return this.timerId = interval;
    }

    stop() {
        if (this.timerId !== null) {
            clearInterval(this.timerId);
        }
        return this.timerId = null;
    }

    printAlarms () {
        this.alarmCollection.forEach(element => console.log(`Будильник под номером ${element.id} зазвонит ${element.time}`));
    }

    clearAlarms () {
        this.stop();
        this.alarmCollection = [];
    }
}

function testCase() {
    let wakeUpAlarm = new AlarmClock();

    wakeUpAlarm.addClock('23.30', () => console.log('Начинаем готовится ко сну!'), 1);
    wakeUpAlarm.addClock('23.31', () => {
        console.log('Выключай компьютер!');
        wakeUpAlarm.removeClock(2)
    }, 2);
    wakeUpAlarm.addClock('23.31', () => console.log('И телефон поставь на зарядку!'));
    wakeUpAlarm.addClock('23.32', () => {
        console.log('Опять проспишь и опаздаешь на работу!');
        wakeUpAlarm.clearAlarms();
        wakeUpAlarm.printAlarms();
    }, 3);
    wakeUpAlarm.addClock('23.50', () => {
        console.log('Последнее китайское предупреждение!')
    }, 1);
    wakeUpAlarm.printAlarms();
    wakeUpAlarm.start();
}

testCase();