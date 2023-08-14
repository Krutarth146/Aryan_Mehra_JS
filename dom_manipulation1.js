// DOM ---> Document Object Model

const box1 = document.getElementById('box-1');

// box1.innerHTML = "<h1>Hello Aaryan Mehra</h1> <p>Lorem ipsum</p>"

box1.style.backgroundColor = "yellow";


const boxes = document.getElementsByClassName('box')

// document.write(boxes.length)


for(i=0;i<boxes.length;i++)
{
    boxes[i].classList.add('round1');
}

box1.classList.remove('round1')


const newPara = document.createElement('p')
newPara.innerText = "This is createElement Example";
newPara.classList.add('box');
newPara.classList.add('round1');

const container = document.getElementById('container')
container.appendChild(newPara)


const myBody = document.body

console.log(myBody)


const kru = document.getElementsByTagName('p')
console.log(kru)

const jk = document.getElementsByClassName('round1')
console.log(jk)


const manoj = document.querySelectorAll('.container .round1')

console.log(manoj)