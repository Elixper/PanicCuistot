document.getElementById("myBtn").addEventListener("click", function() {
document.getElementById("demo").innerHTML += " Hello World";
  });

document.getElementById("myBtn2").addEventListener("click", function() {
document.getElementById("demo").innerHTML = " ";
});

document.getElementById("myBtn3").addEventListener("click", function() {
  document.getElementById('circle').classList.toggle("display");
  document.getElementById('circle').classList.toggle("visibility");

    });