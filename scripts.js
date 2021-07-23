window.addEventListener("load", function() {

function confirmTakeOff() {
    if (window.confirm("Confirm that the shuttle is ready for takeoff.") === true) {
        document.getElementById("flightStatus").innerHTML = "Shuttle in flight.";
        document.getElementById("shuttleBackground").style.backgroundColor = "blue";
        document.getElementById("spaceShuttleHeight").innerHTML = "10,000 miles";
    }
}

function landShuttle() {
    window.alert("The shuttle is landing. Landing gear engaged.");
    document.getElementById("flightStatus").innerHTML = "The shuttle has landed.";
    document.getElementById("shuttleBackground").style.backgroundColor = "green";
    document.getElementById("spaceShuttleHeight").innerHTML = "0 miles";
}

function abortMission() {
    if (window.confirm("Confirm that you want to abort the mission.") === true) {
        document.getElementById("flightStatus").innerHTML = "Mission aborted.";
        document.getElementById("shuttleBackground").style.backgroundColor = "green";
        document.getElementById("spaceShuttleHeight").innerHTML = "0 miles";
    }
}

function moveRocket(direction) {
    switch (direction) {
        case "up":
            document.getElementById("rocket").style.top = parseInt(document.getElementById("rocket").style.top) - 10 + "px";
            break;
        case "down":
            document.getElementById("rocket").style.top = parseInt(document.getElementById("rocket").style.top) + 10 + "px";
            break;
        case "right":
            document.getElementById("rocket").style.left = parseInt(document.getElementById("rocket").style.left) + 10 + "px";
            break;
        case "left":
            document.getElementById("rocket").style.left = parseInt(document.getElementById("rocket").style.left) - 10 + "px";
            break;
    }
}

document.getElementById("rocket").style.position = "absolute";
document.getElementById("rocket").style.top = "0px";
document.getElementById("rocket").style.left = "0px";

document.getElementById("takeoff").addEventListener("click", confirmTakeOff);
document.getElementById("landing").addEventListener("click", landShuttle);
document.getElementById("missionAbort").addEventListener("click", abortMission);

document.getElementsByTagName("button")[0].addEventListener("click", function() { moveRocket("up"); });
document.getElementsByTagName("button")[1].addEventListener("click", function() { moveRocket("down"); });
document.getElementsByTagName("button")[2].addEventListener("click", function() { moveRocket("right"); });
document.getElementsByTagName("button")[3].addEventListener("click", function() { moveRocket("left"); });

});