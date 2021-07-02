setInterval(displayTime, 1000);

function displayTime() {
    let todayDate = new Date();
    const day = ['Sun', 'mon', 'tue', 'wed', 'thru', 'fri', 'sat'];
    let currentTime = todayDate.getHours() + ":" + todayDate.getMinutes() + ":" + todayDate.getSeconds();
    // return currentTime;
    document.getElementById("clock").innerHTML = currentTime;
}

displayTime();

function blackColor() {
    document.getElementById("watch-img").src = "https://i.imgur.com/iOeUBV7.png"
}

function blueColor() {
    document.getElementById("watch-img").src = " https://i.imgur.com/Mplj1YR.png"
}

function pinkColor() {
    document.getElementById("watch-img").src = "https://i.imgur.com/iOeUBV7.png"
}
function purpleColor() {
    document.getElementById("watch-img").src = "https://i.imgur.com/xSIK4M8.png"
}
function redColor() {
    document.getElementById("watch-img").src = "https://i.imgur.com/PTgQlim.png"
}

// function updateTitle() {
//     document.title = "JavaScript Practise";
// }
