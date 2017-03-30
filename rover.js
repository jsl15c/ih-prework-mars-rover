// The rover will have initial starting point (x,y) coordinates (i.e. 0,0)
// The rover will have an initial direction (N,E,S,W) to where it is facing
// The rover is on a 10 x 10 grid
// Implement commands that go forward and backward (f,b)
// Implement commands to turn the rover left or right (l,r).
// The rover just change the direction it is facing when the user sets this command.
// It won't move right or left automatically.
// To make it change its position, the user needs to specify the change of direction and then the actual movement.


var myRover = {
  position: [0,0],
  direction: 'N'
};

var myRover2 = {
  position: [0,10],
  direction:'S'
};

var obstacle = {
  position: [4,5]
};



var latitude = myRover.position[0];
var longitude = myRover.position[1];
var gridArray = [
  [0,1,2,3,4,5,6,7,8,9,10],
  [0,1,2,3,4,5,6,7,8,9,10]
];

var maxLat = gridArray[0][10];
var maxLong = gridArray[1][10];
var minLat = gridArray[0][0];
var minLong = gridArray[1][0];

// prints position and direction to console and html page
function printData(rover, rover2) {
  // console.log("\nNew Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]");
  // console.log("Current direction: " + rover.direction);
  var output = document.getElementById("output");
  output.innerHTML = ("Rover1 Position: [" + rover.position[0] + ", " + rover.position[1] + "]" +
                      "<br>Rover1 current direction: " + rover.direction + "<br><br>Rover2 Position: [" + rover2.position[0] + ", " + rover2.position[1] + "]"
                    + "<br>Rover2 current direction: " + rover2.direction);
// console.log(myRover.position);
// console.log(myRover2.position);
// console.log(obstacle.position);
}

//turn function
function move(rover, rover2) {
  var myCommands = document.getElementById('command').value.toUpperCase();
    for (var i = 0; i < myCommands.length; i++) {
      switch(myCommands[i]) {
        case 'L':
          if (rover.direction === 'N') {
            rover.direction = 'W';
            console.log("Turning: " + rover.direction);
          }
          else if (rover.direction === 'E') {
            rover.direction = 'N';
            console.log("Turning: " + rover.direction);
          }
          else if (rover.direction === 'S') {
            rover.direction = 'E';
            console.log("Turning: " + rover.direction);
          }
          else if (rover.direction === 'W') {
            rover.direction = 'S';
            console.log("Turning: " + rover.direction);
          }
          if (rover2.direction === 'N') {
            rover2.direction = 'W';
            console.log("Turning: " + rover2.direction);
          }
          else if (rover2.direction === 'E') {
            rover2.direction = 'N';
            console.log("Turning: " + rover2.direction);
          }
          else if (rover2.direction === 'S') {
            rover2.direction = 'E';
            console.log("Turning: " + rover2.direction);
          }
          else if (rover2.direction === 'W') {
            rover2.direction = 'S';
            console.log("Turning: " + rover2.direction);
          }
        break;

        case 'R':
          if (rover.direction === 'N') {
            rover.direction = 'E';
            console.log("Turning: " + rover.direction);
          }
          else if (rover.direction === 'E') {
            rover.direction = 'S';
            console.log("Turning: " + rover.direction);
          }
          else if (rover.direction === 'S') {
            rover.direction = 'W';
            console.log("Turning: " + rover.direction);
          }
          else if (rover.direction === 'W') {
            rover.direction = 'N';
            console.log("Turning: " + rover.direction);
          }
          if (rover2.direction === 'N') {
            rover2.direction = 'E';
            console.log("Turning: " + rover2.direction);
          }
          else if (rover2.direction === 'E') {
            rover2.direction = 'S';
            console.log("Turning: " + rover2.direction);
          }
          else if (rover2.direction === 'S') {
            rover2.direction = 'W';
            console.log("Turning: " + rover2.direction);
          }
          else if (rover2.direction === 'W') {
            rover2.direction = 'N';
            console.log("Turning: " + rover2.direction);
          }
        break;

        case 'F':
          moveForward(myRover,myRover2);
        break;

        case 'B':
          moveBackward(myRover,myRover2);
        break;
      }
    }
   obstacleCheck(myRover, myRover2);
   printData(myRover, myRover2);
}

function moveForward(rover, rover2) {
  switch(rover.direction) {
    case 'N':
      if (rover.position[1] < maxLong) {
        // longitude++;
        rover.position[1]++;
      }
      else {
        rover.position[1] = minLong;
      }
      break;

    case 'E':
      if (rover.position[0] < maxLat) {
        rover.position[0]++;
      }
      else {
        rover.position[0] = minLat;
      }
    break;

    case 'S':
      if (rover.position[1] > minLong) {
        rover.position[1]--;
      }
      else {
        rover.position[1] = maxLong;
      }
    break;

    case 'W':
      if (rover.position[0] > minLat) {
        rover.position[0]--;
      }
      else {
        rover.position[0] = maxLat;
      }
    break;
  }
  switch(rover2.direction) {
    case 'N':
      if (rover2.position[1] < maxLong) {
        // longitude++;
        rover2.position[1]++;
      }
      else {
        rover2.position[1] = minLong;
      }
      break;

    case 'E':
      if (rover2.position[0] < maxLat) {
        rover2.position[0]++;
      }
      else {
        rover2.position[0] = minLat;
      }
    break;

    case 'S':
      if (rover2.position[1] > minLong) {
        rover2.position[1]--;
      }
      else {
        rover2.position[1] = maxLong;
      }
    break;

    case 'W':
      if (rover2.position[0] > minLat) {
        rover2.position[0]--;
      }
      else {
        rover2.position[0] = maxLat;
      }
    break;
  }
}

function moveBackward(rover, rover2) {
  switch(rover.direction) {
    case 'N':
      if (rover.position[1] > minLong) {
        rover.position[1]--;
      }
      else {
        rover.position[1] = maxLong;
      }
    break;
    case 'E':
      if (rover.position[0] > minLat) {
        rover.position[0]--;
      }
      else {
        rover.position[0] = maxLat;
      }
    break;
    case 'S':
      if (rover.position[1] < maxLong) {
        rover.position[1]++;
      }
      else {
        rover.position[1] = minLong;
      }
    break;
    case 'W':
      if (rover.position[0] < maxLat) {
        rover.position[0]++;
      }
      else {
        rover.position[0] = minLat;
      }
    break;
  }
  switch(rover2.direction) {
    case 'N':
      if (rover2.position[1] > minLong) {
        rover2.position[1]--;
      }
      else {
        rover2.position[1] = maxLong;
      }
    break;
    case 'E':
      if (rover2.position[0] > minLat) {
        rover2.position[0]--;
      }
      else {
        rover2.position[0] = maxLat;
      }
    break;
    case 'S':
      if (rover2.position[1] < maxLong) {
        rover2.position[1]++;
      }
      else {
        rover2.position[1] = minLong;
      }
    break;
    case 'W':
      if (rover2.position[0] < maxLat) {
        rover2.position[0]++;
      }
      else {
        rover2.position[0] = minLat;
      }
    break;
  }
}

function reset(rover,rover2) {
  rover.position[0] = 0;
  rover.position[1] = 0;
  rover.direction = 'N';
  rover2.position[0] = 0;
  rover2.position[1] = 10;
  rover2.direction = 'S';
  document.getElementById("command").value = "";
  printData(myRover, myRover2);
}

function obstacleCheck(rover, rover2) {
  var rov = rover.position.toString();
  var rov2 = rover2.position.toString();
  var obs = obstacle.position.toString();
  if (rov === obs || rov2 === obs) {
    alert("Obstacle detected. \n Resetting rover...");
    reset(myRover, myRover2);
  }
  if (rov === rov2) {
    alert("Rover collision.\nResetting rovers...");
    reset(myRover,myRover2);
  }
}
