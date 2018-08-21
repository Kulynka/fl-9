let main = confirm(`Do you want to play a game?`);
let raund;
let range;
let number1 = 1;
let number6 = 6;

while (main) {
	let randomNumber = Math.floor(Math.random() * range);
	range = number6;
	let attemptsLeft = 3;
	let prize = 10;
	let remuneration = 10;
	let Cash = 0;
	let tryAgain = 0;
	raund = 0;
    let nextAttempt = true;
    

	while (tryAgain < 3 && nextAttempt) {
		let userNumber = Number(prompt(`Enter a number from 0 to ` + (range - number1) + `\n` +
			`Attempts left: ` + attemptsLeft + `\n` +
			`Total prize: ` + Cash + ` $` + `\n` +
			`Possible prize on current attempt: ` + remuneration + ` $`));

		if (userNumber === randomNumber) {
			Cash += remuneration;
			tryAgain = 0;
			attemptsLeft = 3;
			range = range * 2 - number1;
			prize *= 3;
			remuneration = prize;
			randomNumber = Math.floor(Math.random() * range);
			nextAttempt = confirm(`Congratulation! Your prize is: ` + Cash + ` Do you want to continue a game?`);
		} else {
			attemptsLeft--;
			tryAgain++;
			remuneration = Math.floor(prize / (tryAgain * 2));
		}
	}
	alert(`Thank you for a game. Your prize is ` + Cash + ` $`);
	main = confirm(`Do you want to try again?`);
	raund++;
}

if (!raund) {
	alert(`You did not become a millionaire, but can`);
}


