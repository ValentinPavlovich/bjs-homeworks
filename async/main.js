// Задача №1. Будильник-колыбельная

function setAlarm(time, callback) {

	return function () {
        const now = new Date();
        const hours = now.getHours().toString();
		const minutes = now.getMinutes().toString();
		let nowTime;

	  if (Number(hours) < 10) {
		  nowTime = '0' + hours + ":" + minutes;
      } else if (Number(minutes) < 10) {
		  nowTime = hours + ":" + '0' + minutes;
	  } else {
		  nowTime = hours + ':' + minutes;
	  }
	  
	  if (nowTime === time) {
		  callback();
	  }
	}	
}

function setDailyRhythm(wakeUpTime, bedTime) {

    const goodMorning = () => alert('Доброе утро!');
    const goodEvening = () => alert('Спокойной ночи!');

    const wakeUp = setAlarm(wakeUpTime, goodMorning);
    const bed = setAlarm(bedTime, goodEvening);

    setInterval(wakeUp, 1000);
    setInterval(bed, 1000);
}

setDailyRhythm('07:00', '23:00');