function myEveryDayOne(weekday) {
    let plan = "";
    switch (weekday) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            plan = `Я встаю в семь утра
        Завтракаю
        чищу зубы
        иду на работу
        работаю 8 часов
        прихожу с работы
        курю с соседом на лестничной площадке
        смотрю программу время
        иду спать        `
            break;
        case 6:
            plan = "бухаю";
            break;
        case 7:
            plan = "сплю целый день";
            break;
    }
}

function myEveryDayTwo(weekday) {
    let plan = "";
    if (weekday >= 1 && weekday <= 5) {
        plan = `Я встаю в семь утра
        Завтракаю
        чищу зубы
        иду на работу
        работаю 8 часов
        прихожу с работы
        курю с соседом на лестничной площадке
        смотрю программу время
        иду спать`;
    } else if (weekday === 6) {
        plan = "бухаю";
    } else {
        plan = "сплю целый день";
    }
}