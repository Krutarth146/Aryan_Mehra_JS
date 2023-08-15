// 1. Event Handlers
// 2. Event Listners
 


// Event Handler   ---> on

function fun1()
{
    console.log("Box-1 Clicked");
}

const fun2 = () => {
    console.log("Mouse Over");
}

const fun9 = () => {
    console.log("Fun999999999");
}

function keyPress11(){
    console.log("Key Pressed");
}

function keyUp11()
{
    console.log("Key Up");
}

function keyDown11()
{
    console.log("Key Down");
}


// Event Listners





const b4 = document.getElementById('name1')

b4.addEventListener('keydown', (e) => {
    console.log("e -->",e.key);
})


name1.addEventListener('focus', (e) => {
    console.log('key',e);
})



const m4 = document.getElementById('box-4')

m4.addEventListener('mousemove', (e) => {
    console.log("event object",e.clientX,e.clientY);
})



// Bubbling (Default) and Capture


const b1 = document.getElementById('box-1')

b1.addEventListener('click', () => {
    console.log("Clicked on Box");
})


b1.addEventListener('click', () => {
    console.log("Clicked Nexttttt on Box");
})


const c1 = document.getElementById('container')

c1.addEventListener('click', () => {
    console.log("Container clicked");
}, true)