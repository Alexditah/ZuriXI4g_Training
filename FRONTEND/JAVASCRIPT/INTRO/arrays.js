// creating an array
let array = [];
console.log(array);
// let arr2 = new Array(); another way nof creating array
let topThreeEver = ["ronaldo", "roney", "kaka"];
console.log(topThreeEver);

//accessing each element in an array
console.log(topThreeEver[0]);
console.log(topThreeEver[1]);
console.log(topThreeEver[2]);

//  modifying arrays
topThreeEver[2] = "okosha";
console.log(topThreeEver);

// nested like arrays inside arrays
let nestedarr = [
	[1, 2, 3, 4],
	[1, 2, 3, 4, 5],
];
console.log(nestedarr);
// to call an array remeber start counting from 0
console.log(nestedarr[0]);
console.log(nestedarr[0][3]);
console.log(nestedarr[1]);
console.log(nestedarr[1][4]);

// arrays and objects
let users = [
	{ name: "tolu", id: "1" },
	{ name: "bolu", id: "2" },
];
console.log(users);
console.log(users[0]);
console.log(users[1]);

// arrays properties and methods
console.log(topThreeEver.length); // to get length of an array like total number of items in the array
topThreeEver.push("kaka"); // the push adds an element to the end
console.log(topThreeEver);

topThreeEver.pop(); //popremoves element from the end
console.log(topThreeEver);

topThreeEver.shift(); // the.shift removes an element from the beginning
console.log(topThreeEver);

topThreeEver.unshift("ronaldo");
console.log(topThreeEver);

// these next methods use function in them
topThreeEver.find(function (item, index, arr) {}); //used to find an element inside an array
topThreeEver.find(function (elem) {
	console.log(elem);
});
let isExist = topThreeEver.find(function (elem) {
	return elem === "ronaldo";
});
console.log(isExist);

// filter used to filter arrays based on specified criteria
const ages = [52, 18, 14, 40];
let agesAr = ages.filter(function (age) {
	console.log(age);
});

let agesArr = ages.filter(function (age) {
	return age >= 18;
});
console.log(agesArr);

// include checks if certain element is in the array and returns true or false
console.log(ages.includes(18));
console.log(ages.includes(100));

// map is used to transform array element and return the new elements
let newMap = ages.map(function (age) {
	return age * 2;
});
console.log(newMap);
