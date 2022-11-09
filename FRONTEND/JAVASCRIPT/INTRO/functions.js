//  declaring a function
function sayHello() {
	console.log("hello world");
}
function getName(name) {
        console.log(name)}

    function getFullname(firstname, lastname){let fullname = firstname + ' ' + lastname 
        console.log(fullname); return fullname}
// calling a function
sayHello();
getName('tolu')
getFullname('adanna', 'anachu')
let fullname = getFullname('adanna', 'anachu')

console.log(fullname)

    // return statment no code after a return stament runs

    // default values using the = sign to Aadd a default value so it wont be undefined if not filled
    function surName(firstname, lastname = 'bitch'){let somename = firstname + ' ' + lastname 
        console.log(somename); return fullname}
      
        surName('alex')

        // example write a function min(a, b) which returns the least of two numbers a and b
        function min(a, b){
            if (a < b) {return a;}
            else { return b;}
        }
       console.log(min(2,3))
        

