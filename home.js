//1 - TOOLS NEEDED

//ORIGINAL ARRAY OF ELEMENTS - We will reference the name and by image will mean the sourrce name.
const food = [
  { name: "cake", img: "cake.png" },
  { name: "pie", img: "iconpie.png" },
  { name: "meat", img: "meat.png" },
  { name: "fries", img: "fries.png" },
  { name: "chicken", img: "chicken.png" },
  { name: "carrot", img: "carrot.png" },
  { name: "apple", img: "apple.png" },
  { name: "bananas", img: "bananas.png" },
  { name: "blueberry", img: "blueberry.png" },
  { name: "bread", img: "bread.png" },
  { name: "cheese", img: "cheese.png" },
  { name: "chinesefood", img: "chinesefood.png" },
  { name: "eggs", img: "eggs.png" },
  { name: "hotdog", img: "hotdog.png" },
  { name: "latte", img: "latte.png" },
  { name: "lemon", img: "lemon.png" },
  { name: "lettuce", img: "lettuce.png" },
  { name: "nachos", img: "nachos.png" },
  { name: "orange", img: "orange.png" },
  { name: "rice", img: "rice.png" },
  { name: "strawberry", img: "strawberry.png" },
  { name: "strawcake", img: "strawcake.png" },
  { name: "tacos", img: "tacos.png" },
  { name: "watermelon", img: "watermelon.png" },
];
// pickedArray is the array of random 6 objects image chosen by clicking New Game
let pickedArray = [];

// solutionArray is the random array of 6 objects image
let solutionArray = [];
let nameSolutionArray = [];
let gamerArray = [];

//OR THE NAV BAR

//Background Music
const audio0 = new Audio("./3-music/rockmusicsoundverylow.mp3");
audio0.loop = true;
//Clic Sound Effect
const audio1 = new Audio("./3-music/CLICKloud.mp3");
//Win Sound Effect
const audio2 = new Audio("./3-music/welldonesound.mp3");
//Loose Sound Effect
const audio3 = new Audio("./3-music/tryagainsound.mp3");

//2 - ALL THE FUNCTIONS - the logic

//a RANDOM function to get a random NUMBER
function getRandomNumber(number) {
  return Math.floor(Math.random() * number);
}
//CHOOSESHAPE function to choose randomly N shapes in an ARRAY and store them in the DESTINATION ARRAY
//TRIGGERED BY New GAME
function chooseShape(array, destinationArray, n) {
  for (let i = 0; i < n; i++) {
    destinationArray.push(array[getRandomNumber(array.length)]);
  }
}
//****RENDER SHAPE : will put the buttons with the corresponding images
function renderShape(buttonsArray, solutionArray) {
  // RENDER the center Zone with the buttons for the solution
  for (let i = 0; i < solutionArray.length; i++) {
    // console.log(solutionArray[i].img);
    document.getElementById(
      "centerZone"
    ).innerHTML += `<img id="${solutionArray[i].name}" class="center icon rotate" src="/1-img/PNG/${solutionArray[i].img}"></img>`;
  }
  // RENDER THE SIDES Zone left and right for the answer options
  for (let i = 0; i < buttonsArray.length; i++) {
    if (i < 3) {
      document.getElementById(
        "leftZone"
      ).innerHTML += `<img id="${buttonsArray[i].name}" class="left side icon slidein" src="/1-img/PNG/${buttonsArray[i].img}" alt="${buttonsArray[i].name}"></img>`;
    } else {
      document.getElementById(
        "rightZone"
      ).innerHTML += `<img id="${buttonsArray[i].name}" class="right side icon slidein" src="/1-img/PNG/${buttonsArray[i].img}" alt="${buttonsArray[i].name}"></img>`;
    }
  }
  document.querySelectorAll(".side").forEach((icon) =>
    icon.addEventListener("click", function () {
      gamerArray.push(`${icon.getAttribute("alt")}`);
      icon.classList.add("clicked");
      audio1.play();

      if (gamerArray.length === 3) {
        checkAnswer();
      }
    })
  );
  console.log("random 6 pick", buttonsArray);
  console.log("solution Array", solutionArray);
}
// renderShape(pickedArray, solutionArray);

//****CLEAR THE ZONES FUNCTION clears the zones with the buttons
function clearTheZones() {
  document.querySelectorAll(".zone").forEach((zone) => (zone.innerHTML = ""));
  pickedArray = [];
  solutionArray = [];
  nameSolutionArray = [];
  gamerArray = [];
  document.querySelector(".wrapper").classList.add("is-active");
}
//****RESET THE SHAPES FUNCTION prepares all the elements for a new game (pickedArray, solutionArray)
function resetShapes() {
  chooseShape(food, pickedArray, 6);
  chooseShape(pickedArray, solutionArray, 3);
  renderShape(pickedArray, solutionArray);

  solutionArray.forEach((el) => {
    nameSolutionArray.push(el.name);
  });
  console.log("namesolutionarray", nameSolutionArray);
}
function checkAnswer() {
  let a = gamerArray.sort().join("");
  let b = nameSolutionArray.sort().join("");
  console.log(a, b);
  if (a === b) {
    audio2.play();
    alert("Well Done You!");
    clearTheZones();
    resetShapes();
  } else {
    audio3.play();
    alert("Try Again!");
    gamerArray = [];
    //unclick the 3 buttons (classList.remove('clicked'))
    document
      .querySelectorAll(".clicked")
      .forEach((el) => el.classList.remove("clicked"));
  }
}

//3 - EVENTS

//NEW GAME BUTTON : clears the previous arrays and zones THEN Chooses the picked Array the solution Array renders the shape
document.getElementById("myBtn").addEventListener("click", function () {
  clearTheZones();
  resetShapes();
});

// HINT button for the solutions : White border for image
document.getElementById("myBtn6").addEventListener("click", function () {
  if (myBtn6.textContent === "Hint?") {
    myBtn6.textContent = "Hide Hint";
    document
      .querySelectorAll(".center")
      .forEach((el) => (el.className = "centerHint icon rotate"));
  } else if (myBtn6.textContent === "Hide Hint") {
    myBtn6.textContent = "Hint?";
    document
      .querySelectorAll(".centerHint")
      .forEach((el) => (el.className = "center icon rotate"));
  }
});

//Create an on/OFF event for button audio
document.getElementById("myBtn4").addEventListener("click", function () {
  if (myBtn4.textContent === "Music On") {
    myBtn4.textContent = "Music Off";
    audio0.play();
  } else {
    myBtn4.textContent = "Music On";
    audio0.pause();
  }
});
//Create an ABOUT button that will send to a descriptive page about the project
const aboutBtn = document.getElementById("myBtn8");
function goToAbout() {
  document.location.href = "/about.html";
}
aboutBtn.addEventListener("click", goToAbout);

//Create an HOME button that will send back to the Home page
const refreshPage = document.getElementById("myBtn10");
function goToHome() {
  document.location.href = "/home.html";
}
refreshPage.addEventListener("click", goToHome);
