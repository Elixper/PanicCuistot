//1 - TOOLS NEEDED

//FOR THE NAV BAR
//audio file
document.audio = new Audio("./3-music/rockmusic.mp3");
document.audio.loop = true;

//2 - ALL THE FUNCTIONS - the logic

//3 - EVENTS

document.getElementById("myBtn3").addEventListener("click", function() {
  if (document.getElementById("demo").style.display === "none") {
    document.getElementById("demo").style.display = "inherit";
  } else {
    document.getElementById("demo").style.display = "none";
  }
});
//1/2 Create a REVEAL button for the solutions
document.getElementById("myBtn6").addEventListener("click", function() {
  if (myBtn6.textContent=== "Hint?") {
    myBtn6.textContent = "Back to Game?";
    document.querySelectorAll('#sideLeftIcons > *').forEach(el => el.classList.remove('black'));
  } else if(myBtn6.textContent=== "Back to Game?" ) {
    myBtn6.textContent= "Hint?";
    document.querySelectorAll('#sideLeftIcons > *').forEach(el => el.classList.add('black'));
    }
  });

// 2/2 the REVEAL button will lead to no points and the next screen (shuffle button)


//Create an on/OFF event for button audio
document.getElementById("myBtn4").addEventListener("click", function() {
if (myBtn4.textContent === "Music On") {
  myBtn4.textContent = "Music Off";
  document.audio.play();
} else {
  myBtn4.textContent = "Music On";
  document.audio.pause();
  }
});

// document.getElementById("myBtn").addEventListener("click", function() {
// document.getElementById("demo").innerHTML += " Hello World";
//   

// document.getElementById("myBtn2").addEventListener("click", function() {
// document.getElementById("demo").innerHTML = " ";
// });

// document.getElementById("myBtn3").addEventListener("click", function() {
//   document.getElementById('circle').classList.toggle("display");
//   document.getElementById('circle').classList.toggle("visibility");

//     });

//pick a random element
// const food=[
// { name: 'cross', img: 'cross.png' },
// { name: 'salt', img: 'salt.png' },
// { name: 'cross', img: 'cross.png' },
// { name: 'salt', img: 'salt.png' },
// { name: 'cross', img: 'cross.png' },
// { name: 'salt', img: 'salt.png' },
//]

//in the loop think about substracting the food length each time
// (function chooseShape(){
// let pick= Math.floor(Math.random()*food.length);
// })();


// getElementById("demo").innerHTML=`${"test"}`;
// `${<img src="./1-img/cross.png"></img>}`