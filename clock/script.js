// const person = {
//     fullName: "Michael Mi",
//     age: 40,
//     isEmpolyed: true,
//     hobbies: ["coding", "running", "shopping"],
//     address: {
//         province: "Zhejiang",
//         city: "Haining",
//         town: "Dingqiao",
//         village: "Luwan"
//     }
// }

// for(const property in person.address){
//     console.log(person.address[property]);
// }

// class Person {
//     constructor(name, age, ...address){
//         this.name = name;
//         this.age = age;
//         this.address = new Address(...address);
//     }
// }

// class Address{
//     constructor(street, city, country) {
//         this.street = street;
//         this.city = city;
//         this.country = country;
//     }
// }

// const person1 = new Person("Michael",30, "Dingqiao", "Haining", "China");
// const person2 = new Person("Jenny",13, "Adobe", "L.A.", "USA");
// console.log(person1.address.country);

// const fruits = [{name: "apple", color: "red", calories: 95},
//                 {name: "orange", color: "orange", calories: 45},
//                 {name: "banana", color: "yellow", calories: 105},
//                 {name: "coconut", color: "white", calories: 159},
//                 {name: "pineapple", color: "yellow", calories: 37}];


// let numbers = [1,5,9,8,4,3,7,-1,2,6];
// numbers.sort((a,b)=>b-a);
// console.log(numbers);

// const date = new Date();
// const year = date.getFullYear();
// const month = date.getMonth();
// const day = date.getDate();
// const week = date.getDay();
// console.log(year);
// console.log(month);
// console.log(day);
// console.log(week);

// Closure = A function defined inside of another function,
//  the inner function has access to the variables
//  and scope of the outer function.
//  Allow for private variables and state maintenance
//  Used frequently in JS frameworks: React, VUe, Angular

// function createIncrement(){
//     let count = 0;
//     function increment() {

//         count++;
//         console.log(`The count is ${count}`);
//     }
//     return increment;
// }

// const increment = createIncrement();
// increment();
// increment();
// increment();
// increment();

// function createGame() {
//     let score = 0;
//     function increment(point) {
//         score += point;
//         console.log(`+${point}pts`);
//     }
//     function decrement(point) {
//         score -= point;
//         console.log(`-${point}pts`);
//     }
//     function getScore() {
//         return score;
//     }
//     return { increment, decrement, getScore };
// }

// const game = createGame();
// game.increment(6);
// game.increment(5);
// game.decrement(2);
// console.log(`The score is ${game.getScore()}pts.`);

// function startTimer(){
//     setTimeout(()=>window.alert('Hello'),3000);
// }

function updateClock(){
    const now = new Date();
    const hours = now.getHours().toString().padStart(2,0);
    const minutes = now.getMinutes().toString().padStart(2,0);
    const seconds = now.getSeconds().toString().padStart(2,0);
    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateClock,1000);

