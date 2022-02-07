
let randomCount;

const generateRandomCount = function () {
    return Math.floor(Math.random()*100);
};
const generateCount = function () {
    let count = +prompt("Угадай число от 1 до 100");
    function checkCount () {
        count = prompt("Введи число");
        if (!isNaN(parseFloat(count))) {
            return count;
        } else {
            checkCount();
        }
    }
    if (isNaN(parseFloat(count))) {
        checkCount();
    }
    
    return count;
};

const counter = function () {
    let count = 9;
    randomCount = generateRandomCount();
    const play = function() {
        let answer = generateCount();
        if (answer === 0) {       
            alert("Игра окончена");
            return;
        }
            console.log("Вы ввели число: " + answer);
            console.log("рандом " + randomCount);
            if (answer === randomCount) {
                let victory = confirm("Поздравляю, Вы угадали!!! Хотели бы сыграть еще?");
                if (victory) {
                    counter(9); 
                } else if (!victory) {
                    alert("Игра окончена");
                    return;
                }
            } else if (answer > randomCount) {
                alert("Загаданное число меньше. " + `Осталось ${count} попыток`);
            } else if (answer < randomCount) {
                alert("Загаданное число больше. " + `Осталось ${count} попыток`);
            }
        count--;
        console.log("Попытка номер " + count);
        if (count >0) {
            play();
        } else {
            let repeatPlay = confirm("Попытки закончились, хотите сыграть еще?");
            if (repeatPlay) {
                counter(9); 
            } else if (!repeatPlay) {
                alert("Игра окончена");
                return;
            }
        }
    };
    play();    
};

counter();
