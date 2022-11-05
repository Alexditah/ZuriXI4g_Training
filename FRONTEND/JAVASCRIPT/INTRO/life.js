// alert("hello world");
            console.log('welcome to zuri')

            // creating a variable with let(reassignable),const(unreassignable), var(old)
 let theRealGoat = 'Ronaldo';
    let bestmusicianInNigeria = 'davido';
    var name = 'tolu';
    const password = 'alexditah19';

    // console.log writes msg on the console in inspect
    console.log(theRealGoat);
    console.log(bestmusicianInNigeria);

    let goat = 'ronaldo'
   //  start counting from 0 when counting strings the first letter is 0
    console.log(goat[0])
    console.log(goat[6])
    console.log(goat[5])

   //  length gets the length of the text ronaldo is a 7 letter word
    console.log(goat.length)
   
// string methods, slice can be used to divide?? a string
let z = goat.slice(1,7)
console.log(z)
// the firstletter variable is to makethe goat variable first letter uppercase
let firstletter = goat[0].toUpperCase()
console.log(firstletter)
let result = firstletter + z
console.log(result)
// replaces changes a word for another in a string 
let message = 'kola is a girl'
let answer = message.replace('kola', 'tolu')
console.log(message)
console.log(answer)
//  spaces are valid in string and you can trim by
 let city = '       lagos'
 console.log(city)
 console.log(city.trim())
//  null is intentional abscence of value
 let loggedin = null 
 let x = undefined