window.addEventListener("load", function() {

let rocketPngOffset = parseInt(window.getComputedStyle(document.getElementById("rocket")).width);
let shuttleBGheight = parseInt(window.getComputedStyle(document.getElementById("shuttleBackground")).height);
let shuttleBGwidth = parseInt(window.getComputedStyle(document.getElementById("shuttleBackground")).width);

function confirmTakeOff() {
    if (window.confirm("Confirm that the shuttle is ready for takeoff.") === true) {
        document.getElementById("flightStatus").innerHTML = "Shuttle in flight.";
        document.getElementById("shuttleBackground").style.backgroundColor = "blue";
        document.getElementById("spaceShuttleHeight").innerHTML = "10000 miles";
        document.getElementById("rocket").style.top = "0px";
    }
}

function landShuttle() {
    window.alert("The shuttle is landing. Landing gear engaged.");
    document.getElementById("flightStatus").innerHTML = "The shuttle has landed.";
    document.getElementById("shuttleBackground").style.backgroundColor = "green";
    document.getElementById("spaceShuttleHeight").innerHTML = "0 miles";
    document.getElementById("rocket").style.top = (shuttleBGheight - rocketPngOffset) + "px";
    document.getElementById("rocket").style.left = ((shuttleBGwidth - rocketPngOffset) / 2) + "px";
}

function abortMission() {
    if (window.confirm("Confirm that you want to abort the mission.") === true) {
        document.getElementById("flightStatus").innerHTML = "Mission aborted.";
        document.getElementById("shuttleBackground").style.backgroundColor = "green";
        document.getElementById("spaceShuttleHeight").innerHTML = "0 miles";
        document.getElementById("rocket").style.top = (shuttleBGheight - rocketPngOffset) + "px";
        document.getElementById("rocket").style.left = ((shuttleBGwidth - rocketPngOffset) / 2) + "px";
    }
}

function moveRocket(direction) {
    switch (direction) {
        case "up":
            document.getElementById("rocket").style.top = Math.max((parseInt(window.getComputedStyle(document.getElementById("rocket")).top) - 10), 0) + "px";
            break;
        case "down":
            document.getElementById("rocket").style.top = Math.min((parseInt(window.getComputedStyle(document.getElementById("rocket")).top) + 10), shuttleBGheight - rocketPngOffset) + "px";
            break;
        case "right":
            document.getElementById("rocket").style.left = Math.min((parseInt(window.getComputedStyle(document.getElementById("rocket")).left) + 10), shuttleBGwidth - rocketPngOffset) + "px";
            break;
        case "left":
            document.getElementById("rocket").style.left = Math.max((parseInt(window.getComputedStyle(document.getElementById("rocket")).left) - 10), 0) + "px";
            break;
    }
    rocketAltitude = 1 - (parseInt(window.getComputedStyle(document.getElementById("rocket")).top) / (shuttleBGheight - rocketPngOffset));
    rocketAltitude = Math.floor(rocketAltitude * 100) * 100;
    document.getElementById("spaceShuttleHeight").innerHTML = rocketAltitude;
}

document.getElementById("rocket").style.position = "absolute";
document.getElementById("rocket").style.top = (shuttleBGheight - rocketPngOffset) + "px";
document.getElementById("rocket").style.left = ((shuttleBGwidth - rocketPngOffset) / 2) + "px";

document.getElementById("takeoff").addEventListener("click", confirmTakeOff);
document.getElementById("landing").addEventListener("click", landShuttle);
document.getElementById("missionAbort").addEventListener("click", abortMission);

document.getElementsByTagName("button")[0].addEventListener("click", function() { moveRocket("up"); });
document.getElementsByTagName("button")[1].addEventListener("click", function() { moveRocket("down"); });
document.getElementsByTagName("button")[2].addEventListener("click", function() { moveRocket("right"); });
document.getElementsByTagName("button")[3].addEventListener("click", function() { moveRocket("left"); });

});