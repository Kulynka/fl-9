// Task 1
function findType(a){
    return typeof a;
}

// Task 2
function forEach(array, func){
	for (let i = 0; i < array.length; i++){
		func(array[i]);
	}
}

// Task 3
function map(arr, func) {
    let arr2 = [];
    for (let i = 0; i < arr.length; i++) {
        arr2.push(func(arr[i]));
    }
    return arr2;
}

//Task 4
function getFilteredArray(list, getFilteredfunc) {
	let array3 = [];
	forEach(list, function (elem) {
		if (getFilteredfunc(elem)) {
			array3.push(elem);
		}
	});
	return array3;
}

//Task 5
function getAdultAppleLovers(data) {
    let arr = [];
    for (let i = 0; i < data.length; i++) {
        if (data[i].age > 18 && data[i].favoriteFruit === `apple`) {
            arr.push(data[i].name);
        }
    }
    return console.log(arr);
}

//Task 6
function keys(object) {
    let arr = [];
    for (let key in object) {
        if(object.hasOwnProperty(key)) {
            arr.push(key);
        }
    }
    return console.log(arr);
}

//Task 7
function values(object) {
    let arr = [];
    for (let key in object) {
        if(object.hasOwnProperty(key)) {
            arr.push(object[key]);
        }
    }
    return console.log(arr);
}

//Task 8
function showFormattedDate(date) {
    let month = [`Jan`, `Feb`, `Mar`, `Apr`, `May`, `Jun`, 
                      `Jul`, `Aug`, `Sep`, `Oct`, `Nov`, `Dec` ];
    return console.log(`It is ${date.getDate()} of ${month[date.getMonth()]}, ${date.getFullYear()}`);
}
