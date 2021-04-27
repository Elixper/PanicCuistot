//1 - TOOLS NEEDED

//FOR THE NAV BAR
//audio file
document.audio = new Audio("./3-music/rockmusic.mp3");
document.audio.loop = true;
//ORIGINAL ARRAY OF ELEMENTS - We will reference the name and by image will mean the sourrce name.
const food = [
  { name: "cake", img: "cake.png" },
  { name: "pie", img: "iconpie.png" },
  { name: "meat", img: "meat.png" },
  { name: "fries", img: "fries.png" },
  { name: "chicken", img: "chicken.png" },
  { name: "carrot", img: "carrot.png" },
];
// pickedArray is the array of random 6 objects image chosen by clicking New Game 
let pickedArray = [];

// solutionArray is the random array of 6 objects image
let solutionArray = [];
let gamerArray=[];

//2 - ALL THE FUNCTIONS - the logic

//a Random function to get a random number
function getRandomNumber(number){
  return Math.floor(Math.random() * number);
}
//a chooseshape function to choose randomly N shapes in an ARRAY and store them in the DESTINATION ARRAY
//TRIGGERED BY New GAME
function chooseShape(array, destinationArray,n) {
  for (let i = 0; i < n; i++) {
    destinationArray.push(array[getRandomNumber(array.length)]);
  }
}
chooseShape(food,pickedArray,6);

// function chooseUniqueShape(array, destinationArray,n) {
//   let arrayCopy=array;
//   for (let i = 0; i < n; i++) {
//     destinationArray.push(arrayCopy[getRandomNumber(arrayCopy.length)]);
//     arrayCopy.pop(arrayCopy[getRandomNumber(arrayCopy.length)]);
//     }
// }
// chooseUniqueShape(pickedArray,solutionArray,3);
chooseShape(pickedArray,solutionArray,3);

console.dir(`the picked 6 are ${JSON.stringify(pickedArray)}`);
console.dir(`the solution 3 are ${JSON.stringify(solutionArray)}`);

//add event listener for all buttons 
//compare the picked solution with the solution 

// RENDER BUTTONS : takes the random svg and put it in place in the left or right.
// console.log(document.getElementsByClassName('icon')[0].getAttribute("src"));
// console.log(document.getElementsByClassName('icon')[1].getAttribute("src"));

console.log(`src file in solutionArray",${JSON.stringify(solutionArray[0].img)}`);


//RENDER SHAPE : will put the buttons with the corresponding images
// buttonsArray, 
function renderShape(buttonsArray,solutionArray){
//RENDER the center Zone with the buttons for the solution
for (let i=0;i<solutionArray.length;i++) {
console.log(solutionArray[i].img);
// console.log(`src=/1-img/SVGicones food/${solutionArray[i].img}`);
document.getElementById('centerZone').innerHTML+=`<img class="center icon" src="/1-img/PNG/${solutionArray[i].img}""></img>`;
}
// RENDER THE SIDES Zone left and right for the answer options
console.log("what'sthat")
document.getElementById('leftZone').innerHTML+=`<img class="left icon" src="/1-img/PNG/${buttonsArray[0].img}""></img>`;
document.getElementById('leftZone').innerHTML+=`<img class="left icon" src="/1-img/PNG/${buttonsArray[1].img}""></img>`;
document.getElementById('leftZone').innerHTML+=`<img class="left icon" src="/1-img/PNG/${buttonsArray[2].img}""></img>`;

document.getElementById('rightZone').innerHTML+=`<img class="right icon" src="/1-img/PNG/${buttonsArray[3].img}""></img>`;
document.getElementById('rightZone').innerHTML+=`<img class="right icon" src="/1-img/PNG/${buttonsArray[4].img}""></img>`;
document.getElementById('rightZone').innerHTML+=`<img class="right icon" src="/1-img/PNG/${buttonsArray[5].img}""></img>`;
// for(let i=0;i<buttonsArray;i++){
// if (i<3) {
// document.getElementById('leftZone').innerHTML+=`<img class="left icon" src="/1-img/PNG/${buttonsArray[i].img}""></img>`;
// } else {
// document.getElementById('rightZone').innerHTML+=`<img class="right icon" src="/1-img/PNG/${buttonsArray[i].img}""></img>`;
// }
// }
}
renderShape(pickedArray,solutionArray);
// // buttonsArray
// // solutionArray
// //solution=> solutionArray
// //bouton = > pickedArray
// renderButtons();


//COMPARE STRINGS FUNCTION : I want to compare my solution string with the picked string by the player
let svg1 = "zoo";
let svg2 = "zoo";
function checkAnswer(a, b) {

  if (a.localeCompare(b) === 0 && solutionArray.length === 3) {
  } else {
  }
}
checkAnswer(svg1, svg2);
//3 - EVENTS
//NEW GAME BUTTON
document.getElementById("myBtn").addEventListener("click", function () {
  //On cache les éléments précédents intro ou partie précédente

  // on choisit au hasard 6 formes : fonction chooseShape
  if (myBtn4.textContent === "Music On") {
    myBtn4.textContent = "Music Off";
    document.audio.play();
  } else {
    myBtn4.textContent = "Music On";
    document.audio.pause();
  }
});

// //HIDE BUTTON
// document.getElementById("myBtn3").addEventListener("click", function () {
//   if (document.getElementById("demo").style.display === "none") {
//     document.getElementById("demo").style.display = "inherit";
//   } else {
//     document.getElementById("demo").style.display = "none";
//   }
// });
//1/2 Create a HINT button for the solutions
document.getElementById("myBtn6").addEventListener("click", function () {
  if (myBtn6.textContent === "Hint?") {
    myBtn6.textContent = "Back to Game?";
    document
      .querySelectorAll("#sideLeftIcons > *")
      .forEach((el) => el.classList.remove("black"));
  } else if (myBtn6.textContent === "Back to Game?") {
    myBtn6.textContent = "Hint?";
    document
      .querySelectorAll("#sideLeftIcons > *")
      .forEach((el) => el.classList.add("black"));
  }
});
// add borders to the SVG object

//Create an on/OFF event for button audio
document.getElementById("myBtn4").addEventListener("click", function () {
  if (myBtn4.textContent === "Music On") {
    myBtn4.textContent = "Music Off";
    document.audio.play();
  } else {
    myBtn4.textContent = "Music On";
    document.audio.pause();
  }
});

// document.getElementById("myBtn2").addEventListener("click", function() {
// document.getElementById("demo").innerHTML = " ";
// });

// document.getElementById("myBtn3").addEventListener("click", function() {
//   document.getElementById('circle').classList.toggle("display");
//   document.getElementById('circle').classList.toggle("visibility");

//     });

//pick a random element

// getElementById("demo").innerHTML=`${"test"}`;
// `${<img src="./1-img/cross.png"></img>}`
