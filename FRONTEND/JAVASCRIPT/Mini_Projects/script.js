// global object ctreation to store user  details
let userDetailsDatabase = {};

// the getuserdetails function put all the other funtions into one function and this prvents the prompt from coming up till the function is called
function getUserDetails() {
	// this creats a variable username and a function to validate it
	let userName = prompt("enter you username");
	// thise if statement helps it to cance if sender dosnt want 2 input details
	if (userName == null) {
		return;
	}
	function validateUserName(userName) {
		if (userName.length < 10 && userName.length > 0) {
			return true;
		} else {
			return false;
		}
	}
	// console.log(validateUserName(userName));
	// while loop tomake sure the user inputs correct details, it will keep looping till it gets correct input
	while (validateUserName(userName) == false) {
		userName = prompt("username must be less than 10 AND greater than zero");
	}

	//  ths code stores the user name gotten into the object key username
	userDetailsDatabase["userName"] = userName;

	// this creates a variabele for email and a function to validate it
	let email = prompt("enter your email address");
	if (email == null) {
		return;
	}
	function validateEmail(email) {
		const emailCheck =
			/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
		emailCheckResult = emailCheck.test(email);
		if (emailCheckResult == true) {
			return true;
		} else {
			return false;
		}
	}
	// console.log(validateEmail(email));
	while (validateEmail(email) == false) {
		email = prompt("enter a valid email address");
	}
	userDetailsDatabase["Email"] = email;

	// for phone numbers
	let phoneNumber = prompt("enter your phone number");
	if (phoneNumber == null) {
		return;
	}
	function validatePhoneNumber(phoneNumber) {
		if (phoneNumber.length == 11) {
			return true;
		} else {
			return false;
		}
	}

	// console.log(validatePhoneNumber(phoneNumber));

	while (validatePhoneNumber(phoneNumber) == false) {
		phoneNumber = prompt("enter a correct phone number");
	}
	userDetailsDatabase["Phone Number"] = phoneNumber;

	// for password
	let password = prompt("enter your passcode");
	if (password == null) {
		return;
	}
	function validatePassword(password) {
		if (password.length < 6) {
			return false;
		} else {
			return true;
		}
	}
	while (validatePassword(password) == false) {
		password = prompt("password must be more than 6 digits");
	}

	userDetailsDatabase["password"] = password;

	// console.log(validatePassword(password));

	// for confirm password
	let confirmPassword = prompt("confirm your password");

	if (confirmPassword == null) {
		return;
	}
	function validateConfirmPassword(confirmPassword) {
		if (confirmPassword != password) {
			return false;
		} else {
			return true;
		}
	}

	// console.log(validateConfirmPassword(confirmPassword));

	while (validateConfirmPassword(password) == false) {
		confirmPassword = prompt("password do not match");
	}

	// consoling loging the object so that the inputs will fill it
	console.log(userDetailsDatabase);
}
// this function is to display user details the \n creates newlines in the alert message, a back tick is used`` not a appostropy''
function displayUserDetails() {
	alert(`Your details\n\n\nUsername: ${userDetailsDatabase.userName}\n
	Phone Number: ${userDetailsDatabase.phoneNumber}\n
	Email: ${userDetailsDatabase.email}\n
	`);
}
