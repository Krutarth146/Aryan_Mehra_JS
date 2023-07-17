// Arithmetic O/p  + - * / % ++ -- << >> 
// Assignment O/p  = += -= *= /= %=
// Comparison O/p  < > <= >= == !=    (=== !==) --> with D.types
// Logical O/p     &&  ||  !
// Condition O/p   Ternary O/p  ---> condition  ?  statement1 : statement2
// Type operator  typeof

var n1 = 6
// document.write(n1<<3,"<br>")  // 110000 
// document.write(n1>>3,"<br>")  // 0.1100000 
// document.write(n1++,"<br>")  // 6 
// document.write(++n1,"<br>")  // 8
// document.write(++n1 + ++n1 + n1++ + n1++ + ++n1,"<br>")  // 8
// var n2 = ++n1 + ++n1 + n1++ + n1++ + ++n1
// var n2 = ++n1 + ++n1 + ++n1 + ++n1;
// var n2 = n1++ + n1++ + n1++ + ++n1 + ++n1;
// document.write(n2,"<br>")  // 42

// document.write(n2+=2,"<br>")  // n2 = n2 + 2  // 44
// document.write(n2%=4,"<br>")  // 0
// document.write(n2+=250,"<br>")  // 250
// // document.write(n2/=3,"<br>")  // 83.33333333

// if(n2 % 3 == 0 || n2 % 5 == 0)
// {
//     document.write(true,"<br>")
// }
// else{
//     document.write(false,"<br>")
// }


// var n3 = Number(prompt("Enter a Number: "))
// var v4 = Boolean(prompt("Enter a Number: "))

// document.write(typeof n3,"<br>")  // number
// document.write(typeof v4,"<br>")  // str
// document.write(typeof (n3+v4),"<br>")  // str
// document.write((n3+v4),"<br>")  // str
// document.write((n3+v4),"<br>")  // str
// document.write((56 > 230 ? 56 : 230),"<br>") 

if("krutarth")
{
    document.write(true)
}

// truthy values 5 -4 "kruatrth" true [1]
// falsy values false 0 "" null NaN [] undefined

// var i = 1;
// while(i<=3)
// // while(-3)
// {
    
//     i++;
// }

// 5689


arr1 = [10,20,30,40]
var a = 90
// while(1)
while(a <= 100)
{
    // document.write(true)
    // arr1.pop()
    a++;
    if(a === 95)
    {
        document.write("Matched","<br>")
        break
    }
    document.write(a,"<br>");
}   