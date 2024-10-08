//Part 1 Fizz Buzz
/*Loop through all numbers from 1 to 100.
If a number is divisible by 3, log “Fizz.”
If a number is divisible by 5, log “Buzz.”
If a number is divisible by both 3 and 5, log “Fizz Buzz.”
If a number is not divisible by either 3 or 5, log the number.*/

for (i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("Fizz Buzz");
    }
    else if (i % 3 === 0) {
        console.log("Fizz")
    }
    else if (i % 5 === 0) {
        console.log("Buzz");
    }
    else console.log(i);
}
// Part 2 Prime Time
/*Context: A prime number is any whole number greater than 1 
that cannot be exactly divided by any whole number other than itself and 1. 
For example, the number 5 is prime because it cannot be divided by 4, 3, or 2; it can only be divided by itself(5) and 1.
Write a script that accomplishes the following:
Declare an arbitrary number, n.
Create a loop that searches for the next prime number, starting at n and incrementing from there.
As soon as you find the prime number, log that number and exit the loop. */

// Vinncent Solution/////////////////////////////////
function primeTime(n) {
    // prime is a true/false value to be checked 
    let prime;
    // set n to next value after n to see if it is prime
    n++;
    // continues until prime is true
    while (prime != true) {
        // checks if prime
        //temporarily sets prime to true
        prime = true;
        for (let i = n - 1; i > 1; i--) {
            if (n % i == 0) {
                // if even 1 number is divisible, prime is false
                prime = false;
            }
        }
        if (prime == false) {
            // if prime is still false, increases n by one
            n++;
        } else {
            // if it makes it to here and prime is still true, new n is prime
            console.log(`${ n } is the next prime number.`)
            prime = true;
        }
    }
}
// primeTime(8);
///////////////////////


let n = 3;
n = n + 1;
for (let i = 2; i < n; i++){
    if (n % i == 0){
        n++;
        i = 2;
    }
}
console.log("next prime num is ", n);

// original feeling loopy
const CSV =
    "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";
let column = "";
let row = [];
let result = [];
// Loop through each character in the CSV string
for (let i = 0; i < CSV.length; i++) {
    const char = CSV[i];
    if (char === ",") {
        // If we encounter a comma, store the current column and reset it
        row.push(column.trim());
        column = ""; // Reset column for the next value
    } else if (char === "\n") {
        // If we encounter a newline, store the last column and log the row
        row.push(column.trim());
        result.push(row);
        //console.log(...row); // Log the current row
        column = ""; // Reset column for the next value
        row = []; // Reset row for the next line
    } else {
        // Otherwise, keep building the current column
        column += char;
    }
}
// Handle the last column if the string does not end with a newline
if (column) {
    row.push(column.trim());
    result.push(row)
    //console.log(...row); // Log the last row
}

// feeling loopy using objects and arrays
//console.log(result)
let objectArray = []
result.forEach(row => {
    // let obj = Object.assign({}, row)
    // console.log((obj))
    row = { id: row[0], name: row[1], occupation: row[2], age: row[3] }
    objectArray.push(row)
});


// manipulate data using array methods
// removed the first element (header)
header = objectArray.shift()
// removed the last element
objectArray.pop()
// splice add object at index 1
objectArray.splice(1, 0, { id: "48", name: "Barry", occupation: "Runner", age: "25" })
// added object to end of array
objectArray.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" })

// use loop to find avg age of group
totalAge = 0
for (let i = 0; i < objectArray.length; i++) {
    totalAge += (+objectArray[i].age)
}
avgAge = totalAge / objectArray.length;


// turn objects into csv format
objectArray.unshift(header)
let arrayOfRows = []
for (let i = 0; i < objectArray.length; i++) {
    let row = `${objectArray[i].id},${objectArray[i].name},${objectArray[i].occupation},${objectArray[i].age}`
    arrayOfRows.push(row)
}                                              
//ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,2
                                            // \n is how original exercise is written
const final = JSON.stringify(arrayOfRows.join('\n')) // turns into a string 
console.log(final)


