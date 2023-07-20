let channels = [
  {
    name: "Krutarth",
    sub: 10000
  },

  {
    name: "Aryan",
    sub: 30000
  },

  {
    name: "Manoj",
    sub: 50000
  }
]

console.log(channels)

c1 = ['Aman', 'Ashok', 'Manoj1']

console.log(c1.includes('Ashok'))


console.log(channels.includes(
   {
    name: "Manoj",
    sub: 50000
  }
))

console.log(channels.find(function(element)
                          {
                            // return element.sub === 50000
                            return element.name === "Aryan"
                          }))

console.log(channels.find(element => element.name === "Krutarth"))

console.log(c1.indexOf('Aman'))



// ... ---> spread Operator
let name1 = ['Aman', 'Dhaval', 'Nayan']
let name2 = ['Shok', 'Dev', 'Vishwa']

let name3 = [name1, ...name2, ...[10,20,30,40,50]]

console.log(name3,'--------------')
// for-of
for(let i of name3)
  {
    console.log(i)
  }


// for in

for(let i in name3)
  {
    console.log(`value of Element name3[${i}] --->`,name3[i])
  }
console.log("----------------------")

name3.forEach(function(nameeeeee, jk)
              {
                console.log(nameeeeee, jk)
              })


let cities = [
  {name : "Ahm", population : 9000},
  {name : "Ahm2", population : 10000},
  {name : "Ahm3", population : 66000},
  {name : "Ahm4", population : 77000},
  {name : "Ahm5", population : 99000},
]

console.log(cities.filter((city) => 
  {
    return city.population > 50000;
  }))


console.log(cities.filter(city => city.population > 50000))
console.log(arr90 = cities.map(city => city.population * 2))

console.log(arr90)

console.log(f)

var f = 90

royal()

function royal()
{
  console.log("Royal Called")
}


var arr3 = []

arr3.push(500)

console.log(arr3)


var arr4 = ['str1', 'str2', 'str3', 'str4', 'str5']
var [v1,v2,v3] = arr4


console.log(v3)

var [v1,,v3] = arr4
console.log(v3)

var [...arr7] = arr4
console.log(arr7)

var [ , , , ,...arr7] = arr4
console.log(arr7)

var [...arr13] = arr4.concat(['Amanaaaa'])
console.log(arr13,"---------------")

var [arr13, ...arr50] = arr4.concat(['Amanaaaa'])
console.log(arr13,"---------------",arr50)