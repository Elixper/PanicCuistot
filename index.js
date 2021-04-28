//1 - TOOLS NEEDED

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
let gamerArray = [];

//****FOR THE NAV BAR

//Background Music
document.audio = new Audio("./3-music/rockmusicsoundverylow.mp3");
document.audio.loop = true;
//Clic Sound Effect
document.audio1 = new Audio("./3-music/CLICK.mp3");

//2 - ALL THE FUNCTIONS - the logic

//****a RANDOM function to get a random NUMBER
function getRandomNumber(number) {
  return Math.floor(Math.random() * number);
}
//**** CHOOSESHAPE function to choose randomly N shapes in an ARRAY and store them in the DESTINATION ARRAY
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
    ).innerHTML += `<img id="${solutionArray[i].name}" class="center icon" src="/1-img/PNG/${solutionArray[i].img}"></img>`;
  }
  // RENDER THE SIDES Zone left and right for the answer options
  for (let i = 0; i < buttonsArray.length; i++) {
    if (i < 3) {
      document.getElementById(
        "leftZone"
      ).innerHTML += `<img id="${buttonsArray[i].name}" class="left side icon" src="/1-img/PNG/${buttonsArray[i].img}" alt="${buttonsArray[i].name}"></img>`;
    } else {
      document.getElementById(
        "rightZone"
      ).innerHTML += `<img id="${buttonsArray[i].name}" class="right side icon" src="/1-img/PNG/${buttonsArray[i].img}" alt="${buttonsArray[i].name}"></img>`;
    }
  }
  document.querySelectorAll(".side").forEach((icon) =>
    icon.addEventListener("click", function () {
      document.getElementById("demo").innerHTML += "Hello World";
      //under 3 clicks we want the gamerArray to fill with the alt names of the clicked icons
      if (gamerArray.length === 2) {
        gamerArray.push(`${icon.getAttribute("alt")}`);
        console.log(`show me the last${gamerArray.length}`, gamerArray);
        //each time an icon is clicked the clicked class is added to the icon button- this class is removed in the checkanswer function
        icon.classList.add("clicked");
        checkAnswer(gamerArray, solutionArray);
      } else if (gamerArray.length < 3) {
        gamerArray.push(`${icon.getAttribute("alt")}`);
        console.log(
          `show me gamerArray at trial number${gamerArray.length}`,
          gamerArray
        );
        //each time an icon is clicked the clicked class is added to the icon button- this class is removed in the checkanswer function
        icon.classList.add("clicked");
        let a = gamerArray.sort().join("");
      } else {
      }
      //when the gamerArray.length is 3 we check that the ids of the button pushed are the same
      document.audio1.play();
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
  gamerArray = [];
}
//****RESET THE SHAPES FUNCTION prepares all the elements for a new game (pickedArray, solutionArray)
function resetShapes() {
  chooseShape(food, pickedArray, 6);
  chooseShape(pickedArray, solutionArray, 3);
  renderShape(pickedArray, solutionArray);
}
//FUNCTION GAMERCLICKS pushes the clicked attribute into the gamer array.
// function gamerClicks() {
//   // {
//   document.getElementById("demo").innerHTML += "Hello World";
//   //under 3 clicks we want the gamerArray to fill with the alt names of the clicked icons
//   if (gamerArray.length === 2) {
//     gamerArray.push(`${icon.getAttribute("alt")}`);
//     console.log(`show me the last${gamerArray.length}`, gamerArray);
//   } else if (gamerArray.length < 3) {
//     gamerArray.push(`${icon.getAttribute("alt")}`);
//     console.log(
//       `show me gamerArray at trial number${gamerArray.length}`,
//       gamerArray
//     );
//     //each time an icon is clicked the clicked class is added to the icon button- this class is removed in the checkanswer function
//     icon.classList.add("clicked");
//   } else {
//   }
//   //when the gamerArray.length is 3 we check that the ids of the button pushed are the same
//   document.audio1.play();
//   // }
// }
function checkAnswer(gamerArray, solutionArray) {
  let a = gamerArray.sort().join("");
  let b = solutionArray.sort().join("");
  if (a.localeCompare(b) === "0" && solutionArray.length === 3) {
    alert("Well Done You!");
    clearTheZones();
    resetShapes();
  } else {
    alert("Try Again!");
    gamerArray = [];
    //unclick the 3 buttons (classList.remove('clicked'))
    getqueryselectorAll(".clicked").forEach((el) =>
      el.classList.remove("clicked")
    );
  }
}

//3 - EVENTS

//NEW GAME BUTTON : clears the previous arrays and zones THEN Chooses the picked Array the solution Array renders the shape
document.getElementById("myBtn").addEventListener("click", function () {
  clearTheZones();
  resetShapes();
});

// //HIDE BUTTON
// document.getElementById("myBtn3").addEventListener("click", function () {
//   if (document.getElementById("demo").style.display === "none") {
//     document.getElementById("demo").style.display = "inherit";
//   } else {
//     document.getElementById("demo").style.display = "none";
//   }
// });

// HINT button for the solutions : White border for image
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

// function chooseUniqueShape(array, destinationArray,n) {
//   let arrayCopy=[...array];
//   for (let i = 0; i < n; i++) {
//     destinationArray.push(arrayCopy[getRandomNumber(arrayCopy.length)]);
//     arrayCopy.pop(arrayCopy[getRandomNumber(arrayCopy.length)]);
//     }
// }

// console.log(
//   `src file in solutionArray",${JSON.stringify(solutionArray[0].img)}`
// );

// console.dir(`the picked 6 are ${JSON.stringify(pickedArray)}`);
// console.dir(`the solution 3 are ${JSON.stringify(solutionArray)}`);
