function setAlarm(time, callback) { // функция, проверяющая время с заданным
	const alarm = time;
	return (curTime) => {
		if (curTime === alarm) {
			callback();
		}
	}
}

const goodMorning = function() {
    console.log('Good Morning, Василий.');
} 
const goodNight = function() {
    console.log('Good Night, Василий.') // объявляем переменные ,выводящие на экран уведомление.
} 

function setDaylyRhythm(wakeUpTime, bedTime) { //функция с параметрами подъема и укладывания
	const wakeUp = setAlarm(wakeUpTime, goodMorning); 
	const bed = setAlarm(bedTime, goodNight); 

	setInterval(() => { 
		const now = new Date();  // переменная текущей даты
		let h = now.getHours(); // текущего времени
        let m = now.getMinutes(); // текущей минуты

        if (h < 10) {
            h = '0' + h;
        } else {
            h;
        }

        if (m < 10) {
            m = '0' + m;
        } else {
            m;
        }                     // проверяем условия для правильного отображения времени

		const time = h + ': ' + m;
		wakeUp(time);
		bed(time);
	}, 1000);  // срабатывание с задержкой в 1 секунду
}

checkTime = setAlarm('07:00', goodMorning);
checkTime('07:30');
checkTime('07:00');

setDaylyRhythm('23:30','23:50');