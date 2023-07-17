// var choice = Number(prompt("ENter your chocie: "))

// switch(choice)
// {
//     case 1: console.log("Case 1");
//             break;

//     case 'Z' : console.log("Case Z");
//                 break;

//     default: console.log("Default !!");
//                 break;
// }


// For Loop

// for(intialization ; condition ; Inc/dec)
// {
//         statement;
// }


// intialization;
// for(  ; condition ;   )
// {
        // statements
        // Flow
// }


var num = 9852
var counter = 0

for(  ; num > 0 ;  )
{
        num = Math.floor(num / 10);
        document.write(num,"<br>");
        counter++;
}

document.write("Counter = ",counter)


// ------------------------

var str1 = "Nayan"

str1 = str1.toLowerCase()
var len = str1.length


document.write(str1,len)

var flag = 0

for(let i=0 ; i < len/2 ; i++)
{
        if(str1[i] == str1[len-1-i])
        {
                flag = 1;
        }
        else{
                flag = 0;
                break;
        }
}

if(flag == 1)
{
      document.write("Palindrome");  
}
else{
        document.write("Fail");
}


var i = 1   // start point
while(i<=10)  // condition
{
        document.write(i,"<br>");  // statement
        i++;  // Flow
}

var i = 1
do
{
        document.write(i,"<br>");  // statement
        i++;  // Flow

}while(i<=10);



j = 1
while(j<=5)
{
        if(j==3)
        {
                break;
        }
        document.write(j,"<br>");
        j++;
}

j = 1
while(j<=5)
{
        if(j==3)
        {
                j++;
                continue;
        }
        document.write(j,"<br>");
        j++;
}


document.write("---------------------------")
k = 10
while(k<=15)
{
        var j = 10;
        while(j<=14)
        {
                if(k==j)
                {
                        j+=1;
                        continue;
                }
                document.write(j,"  ");
                j+=1;

        }
        document.write(k,"  ");
        k++;
}

// 11 12 13 14 10 10 12 13 14 11 10 11 13 1411 12 13 14 10 10 12 13 14 11 10 11 13 14 12 10 11 12 14 13 10 11 12 13 14 10 11 12 13 15

// 11, 12, 13, 14, 10, 10, 12, 13, 14, 11, 10, 11, 13, 14, 12, 10, 11, 12, 14, 13, 10, 11, 12, 13, 14, 10, 11, 12, 13, 14, 15