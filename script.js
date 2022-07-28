`use strict`;

const buttonGame = document.getElementById('game');

buttonGame.onclick = function () {
	beginGame();
	function beginGame () {
		const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
		let numberGame = numbers[Math.floor(Math.random() * numbers.length)];
		let count = 10;
		console.log(numberGame);
		function game () {
			if (count === 0) {
				let choise = confirm(`Попытки закончились. Хотите сыграть еще?`)					
					if (choise === true) {
						beginGame();					
					} else {
						return alert("Приходи еще! Удачного дня!");
					}
			} else {
				let result = prompt(`Угадай число от 1 до 10. У тебя ${count} попыток`);				
				if (result === null) {
					return alert("Игра окончена");				
				} else {
					result = parseInt(result);
					console.log(result);
					if (isNaN(result) === true) {
						--count;
						alert(`Введи число! у вас осталось ${count} попыток`);
						game();				
					} else if (result > numberGame) {
						--count;
						alert(`Загаданное число меньше. У вас осталось ${count} попыток`);
						game();				
					} else if (result < numberGame) {
						--count;
						alert(`Загаданное число больше. У вас осталось ${count} попыток`);
						game();				
					} else if (result === numberGame) {
						--count;
						choise = confirm(`Поздравляю, Вы угадали!!! загаданное число было ${numberGame} у вас оставалось ${count} попыток. Хотите сыграть еще?`)					
						if (choise === true) {
							beginGame();				
						} else {
							return alert("Приходи еще! Удачного дня!");
						}
					}
				}		 
			}
		}
		game();
	}
}