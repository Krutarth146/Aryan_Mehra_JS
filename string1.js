// string ---> collection of char

var mystr1 = "Krutarth"
var mystr2 = 'Krutarth'
var mystr3 = `Krutarth is not good boy.` // backtick

console.log(mystr3)
console.log(mystr3.length)  // 8
console.log(mystr3[mystr3.length-1])  // h
console.log(mystr3[0])  // K

console.log(mystr3.slice(0,10))  // Krutarth i
console.log(mystr3.slice(10,5))  // 

// substr
console.log(mystr3.substr(10,5)) // s not   
console.log(mystr3.substr(0,10)) // Krutarth i  
console.log(mystr3.substr(5,10)) // rth is not 


// substring
console.log(mystr3.substring(0,10))  // Krutarth i
console.log(mystr3.substring(10,5))  // rth i
console.log(mystr3.substring(5,10))  // rth i
console.log(mystr3.slice(10,5))  // 


var str5 = "Lion is the King of the Lion Jungle."

console.log(str5.replace('Lion','Tiger'))  // Tiger is the King of the Lion Jungle.
console.log(str5.replaceAll('Lion','Tiger'))  // Tiger is the King of the Tiger Jungle.


console.log(str5.toLowerCase())  // lion is the king of the lion jungle.
console.log(str5.toUpperCase())  // LION IS THE KING OF THE LION JUNGLE.

// Concat
x = "Aman"
console.log(str6 = str5.concat(" ", "Royal is Best.", " ", '___ ',x)) // Lion is the King of the Lion Jungle. Royal is Best. ___

console.log(str6)


// charAt()

console.log(str5.charAt(0))  // L
console.log(str5.charAt(4))  //  
console.log(str5.charCodeAt(4))  // 32 (Ascii) 
console.log(str5.charCodeAt(0))  // 76


// split
var str5 = "Lion is the King of the Lion Jungle."
console.log(str5.split('i'))   // (5) ['L', 'on ', 's the K', 'ng of the L', 'on Jungle.']
console.log(typeof str5.split('i'))   // object


var str5 = "          Lion is the King of the Lion Jungle.            "
console.log(str5.trim())   // Lion is the King of the Lion Jungle.
console.log(str5.trimStart())   // Lion is the King of the Lion Jungle.
console.log(str5.trimEnd())   //           Lion is the King of the Lion Jungle.

var str5 = "Lion is the King of the Lion Jungle."
console.log(str5.length)  // 36
console.log(str5.padStart(40))   //     Lion is the King of the Lion Jungle.
console.log(str5.padEnd(40,'*'))   //  Lion is the King of the Lion Jungle.****


// Input Function

// var name1 = prompt("Enter your Name: ")
// var age = prompt("Enter your Age: ")
// console.log(`Your name is ${name1} and age is ${age}.`)


var num1 = Number(prompt("enter number 1:"));
var num2 = Number(prompt("enter number 2:"));

// console.log(num1 + num2);  // 133

// Operators

// 1. Comparison O/p < > <= >= == !=  ===  !==

if (num1 == num2)
{
    console.log("Same")
}

if(num1 === num2)
{
    console.log("Same")
}