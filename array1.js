var arr1 = [1,2,3,6];
document.write(arr1,"<br><br>")
console.log(arr1)

var arr2 = ["str1", 'str2', 'str3']
document.write(arr2,"<br><br>")


const arr3 = []
arr3[0] = "Manoj"
arr3[1] = "Saroj"
arr3[2] = "Saroj1"
arr3[4] = "Saroj1"
document.write(arr3,"<br><br>", arr3[3],"<br><br>")

const kru = new Array("str11", 'str22', 'str33');

document.write(kru,"<br><br>", kru[2],"<br><br>")

var kru1 = kru[2]
document.write(kru1,"<br><br>")

kru[2] = "Manoj"
document.write(kru,"<br><br>")


var arr2 = ["str1", 'str2', 'str3']

var x = arr2.toString()
document.write(x,typeof x,typeof arr2[1],typeof arr2,"<br><br>")

const royal = {first_name : "Aaryan", lname : "Mehra"}

document.write(royal.lname,"<br><br>")
document.write(arr2[1],"<br><br>")

const arr5 = []


// function func()
// {
//     document.write("Hello");
// }

arr5[0] = Date.now()
// arr5[1] = func
arr5[4] = arr3

document.write("<br><br>",arr5,"<br><br>")

document.write(arr5.length)

document.write(arr5.sort())


var arr2 = ["str1", 'str2', 'str3']

document.write(arr2[arr2.length-1])

var arr2 = ["str1", 'str2', 'str3', 'str4', 'str5']


// let p = "<ul>";
for(let i=0 ; i<arr2.length ; i++)
{
    document.write(arr2[i],"<br><br>")
}
// p += "</ul>";



const arr8 = [10,20,90,89,78,67]

let sum = 0

arr8.forEach(func1)

function func1(arya)
{
    sum += arya
}

document.write("<br>",sum)

var arr7 = [10]

const series = [32, 90, 67, 21, 89, 77]

series.forEach(fun_name)

function fun_name(item, index, arr7)
{
    // arr7[index] = item - 2
    document.write("<br>",arr7)
}

document.write("<br>",arr7)

// push, pop, shift, unshift

arr7.push("Aroma", true)
document.write("<br>",arr7)


arr7.pop()
document.write("<br>",arr7)

arr7.unshift('cdssdcscd')
document.write("<br>",arr7)


arr7.shift()
document.write("<br>",arr7)
