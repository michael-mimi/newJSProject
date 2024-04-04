// eventListener = Listen for specific events to create interactive web pages
//                 events: click, mouseover, mouseout,
//                 .addEventListener(event, callback(anonymous function, arrow function));

const myBox = document.getElementById("myBox");
const myButton = document.getElementById("myButton");

// function changeColor(event){
//     event.target.style.backgroundColor = "tomato";
//     event.target.textContent = "OUCH! 😣";
// }

myButton.addEventListener("click", event => {
    
    myBox.style.backgroundColor = "tomato";
    myBox.textContent = "OUCH! 😣";
});

myBox.addEventListener("mouseover", event =>{
    event.target.style.backgroundColor = "yellow";
    event.target.textContent = "Don't do it 😮";
});

myBox.addEventListener("mouseout", event =>{
    event.target.style.backgroundColor = "lightgreen";
    event.target.textContent = "Click Me 😀";
});

