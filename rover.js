<<<<<<< HEAD
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

// function turn(rovDir) {
//   rover.direction = document.getElementById('command').value.toUpperCase();
//   switch(rovDir.direction) {
//     case 'F':
//
//   }
// }

//turn function
// get string size, use for loops for each command
function turn(rover) {
  var myCommands = document.getElementById('command').value.toUpperCase();
    switch(myCommands) {
      case 'L':
        if (rover.direction === 'N') {
          rover.direction = 'W';
          console.log(rover.direction);
        }
        else if (rover.direction === 'E') {
          rover.direction = 'N';
          console.log(rover.direction);
        }
        else if (rover.direction === 'S') {
          rover.direction = 'E';
          console.log(rover.direction);
        }
        else if (rover.direction === 'W') {
          rover.direction = 'S';
          console.log(rover.direction);
        }
        else {
          moveRover(myRover);
        }
      break;

      case 'R':
        if (rover.direction === 'N') {
          rover.direction = 'E';
          console.log(rover.direction);
        }
        else if (rover.direction === 'E') {
          rover.direction = 'S';
          console.log(rover.direction);
        }
        else if (rover.direction === 'S') {
          rover.direction = 'W';
          console.log(rover.direction);
        }
        else if (rover.direction === 'W') {
          rover.direction = 'N';
          console.log(rover.direction);
        }
      break;

      case 'F':
        moveRover(myRover);
      break;

      case 'B':
        moveRover(myRover);
      break;
   }
}

function moveRover(rover) {
  // rover.direction = document.getElementById('command').value.toUpperCase();
  switch(rover.direction) {
    case 'N':
      rover.position[1]++;
      break;
    case 'E':
      rover.position[0]++;
      break;
    case 'S':
      rover.position[1]--;
      break;
    case 'W':
      rover.position[0]--;
      break;
  }
  console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]");
  console.log(rover.direction);
  // console.log(myCommands);
}
=======
var myRover = {
  position: [0,0], 
  direction: 'N'
};

function goForward(rover) {
  switch(rover.direction) {
    case 'N':
      rover.position[0]++
      break;
    case 'E':
      rover.position[1]++
      break;
    case 'S':
      rover.position[0]--
      break;
    case 'W':
      rover.position[1]--
      break;
  };

  console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]")
}

goForward(myRover);
>>>>>>> 0134ac851d3ef10f100235a1283291386dd0e356
