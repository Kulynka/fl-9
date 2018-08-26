function getClosestToZero() {
	let num = Math.abs(arguments[0]);
	for (let i = 0; i < arguments.length; i++) {
		if (Math.abs(arguments[i]) < num) {
num = arguments[i]
}
	}
	return num;
}

getClosestToZero();
