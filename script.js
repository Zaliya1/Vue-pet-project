
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

const counter = function (count) {
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
                alert("Поздравляю, Вы угадали!!!");
                return;
            } else if (answer > randomCount) {
                alert("Загаданное число меньше");
            } else if (answer < randomCount) {
                alert("Загаданное число больше");
            }
        count++;
        console.log("Попытка номер " + count);
        if (count <=10) {
            play();
        }
    };
    play();    
};

counter(1);
