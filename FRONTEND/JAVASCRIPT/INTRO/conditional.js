// if statment
let isLoggedIn = false;
let isLoggedOut = true;
if (isLoggedIn == false) {
	console.log("zuri");
}
if (isLoggedOut) {
	console.log("zuri");
}

// if else
let goated = "ronaldo";
if (goated == "ronaldo") {
	console.log("ronaldo is the real goat");
} else {
	console.log("messi is better");
}
console.log("i dont realy care");
let goaTed = "messi";
if (goaTed == "ronaldo") {
	console.log("ronaldo is the real goat");
} else {
	console.log("messi is the real goat");
}
console.log("i dont really care");

// else if else use else if when more than 2 onditions
// 1st condition is true
let username = "tolu";
if (username == "tolu") {
	console.log("passed");
} else if (username == "") {
	console.log("failed");
} else {
	console.log("unknown");
}
console.log("byebye");

//  2nd condition is true
let Username = "bolu";
if (Username == "") {
	console.log("failed");
} else if (Username == "bolu") {
	console.log("passed");
} else {
	console.log("unknown");
}
console.log("byebye");

//  no codition is true
let userName = 'shola'
if(userName == ''){console.log('failed')}
else if( userName == 'bolu'){console.log('wrong')}
else if(userName == 'tolu'){console.log('also wrong')}
else{console.log('please input correct user')}
console.log('enter')

// typeof can be used to check the datatype of a value
typeof 'tolu'

//  logical or boolean operators
let personA = 'peter'
let personB = 'paul'

if(personA === 'peter' && personB ==='paul'){console.log('ok')}
if(personA === 'peter' && personB ==='pau'){console.log('ok')}
if(personA === 'peter' || personB ==='pau'){console.log('ok')}
if(personA === 'peter' || personB ==='paul'){console.log('ok')}

// for loop you initialize; add condition; then update;
let num = 0

for(let i = 0; i < 11; i += 1){console.log(i)}
// to add the number together the variable num starts with 0 and as it keeps increasing as it is added to each no
for(let i = 0; i < 11; i += 1){num += i}
console.log(num);

// while block/loop
let i = 1
while( i < 10) { console.log(i); i++;
}
