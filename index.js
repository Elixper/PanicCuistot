const playBtn= document.getElementById("playBtn");

function goToHome () {
    document.location.href="/home.html"
}

playBtn.addEventListener('click', goToHome)