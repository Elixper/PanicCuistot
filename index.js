//1 - TOOLS NEEDED

//FOR THE NAV BAR
//audio file
document.audio = new Audio("./3-music/rockmusic.mp3");
document.audio.loop = true;
//ORIGINAL ARRAY OF ELEMENTS - We will reference the name and by image will mean the sourrce name.
const food = [
  { name: "cake", img: "iconcake.svg" },
  { name: "hamburger", img: "iconhamburger.svg" },
  { name: "meat", img: "iconmeat.svg" },
  { name: "cupcake", img: "iconcupcake.png" },
  { name: "fries", img: "iconfrench-fries.svg" },
  { name: "grape", img: "icongrape.svg" },
  { name: "chicken", img: "iconchicken-thigh.svg" },
  { name: "salt", img: "salt.png" },
];
// pickedArray is the array of random 6 image names chosen by clicking New Game and then new.. for the random 3
let pickedArray = [];
let newPickedArray=[];
// pickedSrc the first 6 svg chosen 6 images svg chosen by clicking New Game
let pickedSrc = [];
let newPickedSrc=[];
// solutionArray will correspond to p
let solutionArray = [];
let gamerArray=[];

//2 - ALL THE FUNCTIONS - the logic
//
//
//Picks 6 svg in an ARRAY and 3 among those 6, TRIGGERED BY New GAME
function chooseShape(array,n) {
  for (let i = 0; i < n; i++) {
    let pickedNumber = Math.floor(Math.random() * array.length);
    // console.log(pickedNumber);
    pickedArray.push(food[pickedNumber].name);
    pickedSrc.push(food[pickedNumber].img);
    if (i%2===0) solutionArray.push(food[pickedNumber].name);
  }
  // console.log(pickedSrc); 
  return pickedSrc; 
}
chooseShape(food,6);
console.log(`the picked 6 are ${pickedArray}`);
console.log(`the solution 3 are ${solutionArray}`);

//render buttons avec Picked Src
// render buttons central avec Picked src from Picked Src

//add event listener for all buttons 
// compare the picked solution with the solution 


// RENDER BUTTONS : takes the random svg and put it in place in the left or right.
// function renderButtons(){
// document.querySelectorAll('.icon').forEach(el => el.getAttribute('src')="src='/1-img/icones food/${food[pickedNumber].img}'");
// }
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
