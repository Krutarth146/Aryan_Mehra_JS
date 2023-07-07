var x;
// Single Line Comment

/*
Multi
Line
Comment
*/

console.log(typeof x);

console.log("Hello Aryan")

var user = {
    "Name" : "Krutarth",
    "Roll" : 32,
    'is_Active' : true,
    "Address" : {
        "Area" : "Sargasan",
        "city" : "Gnr",
        "Pincode" : 399999
    }
}

console.log(typeof user.Address)
console.log(user.Address)
console.log(user.Address.city)


var another = {
    "arr1" : ["Krutarth", 'Manoj', 'Aryan', 900]
}

console.log(another.arr1[4])


let other = {
    "arr2" : [
        {"Name2" : "Jenil", "roll" : 5000},
        {"Name3" : "Zafar", 'un1' : undefined}
    ]
}

console.log(other.arr2[1].Name3)


// Naming Conversation

// Camel case  firstName
// Pascal case  FirstName
// Snake case  first_name

const dumb = {
    "arr3" : [
        {"name4" : [{'alias1' : "Aryan", 'alias2' : 56}]}
    ]
}

console.log(dumb.arr3[0].name4[0].alias1 + dumb.arr3[0].name4[0].alias2)

// Aryan 56



////////////////////////////////////////////////////////////////////


document.addEventListener("DOMContentLoaded", function()
    {   
        let firstBtn = document.querySelector('button')
        firstBtn.addEventListener('click', printMsg)


        function printMsg()
        {
            // alert("Hello Manoj!");
            let name = prompt("Enter Student Name: ");
            firstBtn.textContent = name + "-- Id. No - 41"
        }

});
