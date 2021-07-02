setInterval(funcPractise, 1000);

function funcPractise() {
    let todayDate = new Date();
    const day = ['Sun', 'mon', 'tue', 'wed', 'thru', 'fri', 'sat'];
    let currentTime = todayDate.getHours() + ":" + todayDate.getMinutes() + ":" + todayDate.getSeconds();
    // return currentTime;
    document.getElementById("clock").innerHTML = currentTime;
}

funcPractise();


function updateTitle() {
    document.title = "JavaScript Practise";
}
