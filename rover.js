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

var latitude = myRover.position[0];
var longitude = myRover.position[1];
var gridArray = [
  [1,2,3,4,5,6,7,8,9,10],
  [1,2,3,4,5,6,7,8,9,10]
];

var maxLat = gridArray[0][9];
var maxLong = gridArray[1][9];
var minLat = gridArray[0][0];
var minLong = gridArray[1][0];

// prints position and direction to console and html page
function printData(rover) {
  console.log("\nNew Rover Position: [" + latitude + ", " + longitude + "]");
  console.log("Current direction: " + rover.direction);
  var output = document.getElementById("output");
  output.innerHTML = ("New Rover Position: [" + latitude + ", " + longitude + "]" +
                      "<br>Current direction: " + rover.direction);
}

//turn function
function move(rover) {
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
        break;

        case 'F':
          moveForward(myRover);
        break;

        case 'B':
          moveBackward(myRover);
        break;
      }
   }
   printData(myRover);
}

function moveForward(rover) {
  switch(rover.direction) {
    case 'N':
      if (longitude < maxLong) {
        longitude++;
      }
      else {
        longitude = minLong;
      }
      break;
    case 'E':
      latitude++;
      break;
    case 'S':
      longitude--;
      break;
    case 'W':
      latitude--;
      break;
  }
}

function moveBackward(rover) {
  switch(rover.direction) {
    case 'N':
      longitude--;
      break;
    case 'E':
      latitude--;
      break;
    case 'S':
      longitude++;
      break;
    case 'W':
      latitude++;
      break;
  }
}

function reset(rover) {
  latitude = 0;
  longitude = 0;
  rover.direction = 'N';
  document.getElementById("command").value = "";
  printData(myRover);
}
