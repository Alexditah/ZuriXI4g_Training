//    creating objects
let emptyObj = {};
console.log(emptyObj);

let person = {
	firstname: "taiwo",
};
console.log(person);

const user = {
	firstname: "sunshine",
	lastname: "zuri",
	age: 25,
	getWholename: function () {
		return this.firstname + " " + this.lastname;
		// the this.name points to the firstname or last name of the specific object
	},
};
console.log(user);

// accessing properties in an object
// the dot. notation
console.log(user.age);
// the bracket[''] notation
console.log(user["lastname"]);
// to access a function
let fname = user.getWholename();
console.log(fname);

// modifying the value of a property inan object can change value of properties
user.firstname = "Divine";
console.log(user);

// adding a new property to the object
user.ismarried = true;
console.log(user);

// deleting a property from an object

delete user.age;
console.log(user);

// checking if a property exist in an object
console.log("firstname" in user);
console.log("age" in user);

// the "for ..in" loop, it will get all/ list the properties keys we have in an object the let is optional
for (let key in user) {
	console.log(key);
    console.log(user[key]); // this gets the values in the keys
}

// write code to sum all the salaries and store in the variable sum used for in loop
let salaries = {
    tolu: 200,
    bola: 170,
    adamu: 210,

};

let sum = 0
for(let sal in salaries ){
    sum += salaries[sal];

}

console.log(sum)
