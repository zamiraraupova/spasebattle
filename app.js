
//creating the templete class of all ships

class Ship {
    constructor(name,hull, firepower, accuracy) {
        this.name = name;
        this.hull = hull || Math.floor(Math.random() * 4) + 3; 
        this.firepower = firepower || Math.floor(Math.random() * 3) + 2;
        this.accuracy = accuracy || (Math.floor(Math.random() * 3) + 6) / 10;
    }
    hit (opponent){
        opponent.hull -=this.firepower 
    }
}
// creating the alien ships, my ship and an array of alien ships
var ship1 = new Ship("Alien Ship 1"); 
var ship2 = new Ship("Alien Ship 2");
var ship3 = new Ship("Alien Ship 3");
var ship4 = new Ship("Alien Ship 4");
var ship5 = new Ship("Alien Ship 5");
var ship6 = new Ship("Alien Ship 6");

var myShip = new Ship("USS Schwarzenegger",20, 5, 0.7);

var alienShips = [ship1, ship2, ship3, ship4, ship5, ship6];

// console.log(alienShips)
// console.log(myShip)

// start attacks
let startGame = () => {
    alert("Earth has been attacked by a horde of aliens! You are the captain of the USS Schwarzenegger, on a mission to destroy every last alien ship.")
    alert("You have a privelege. You attack first")
    
    while (alienShips.length !== 0) {      // if alient ship is not zero (alive)
        if (myShip.hull > 0) {                        // if myship is alive
            if (myShip.accuracy >= Math.random()) {
                myShip.hit(alienShips[0])
                console.log("You have been hit!");
                alert("Current number of enemies: " + alienShips.length +  "; Your health: " 
                + myShip.hull + "");
            } else {
                // You're hit missed
            }                      // should I attack the first ship???
        } else {
            // Your hull is gone and you have died.
            alert("You have lost! Refresh the browser to play again");
            break;
        }
        console.log(alienShips[0])
        if (alienShips[0].hull > 0) {     //if ship1 still alive
            alienShips[0].hit(myShip)    // ship1 attacks myship
        } else {
            // The current enemy ship has died at this point.
            alienShips.shift()
            if(alienShips.length == 0) {
                alert("You have defeated the enemy. Refresh the browser to play again");
                break;
            }
            // Because the ship has died, you will check to see if the player
            // want to continue or to retreat
            let response = prompt("Would you like to attack or retreat?", "attack/retreat")
            if(response === "attack") {
                // This will cause the loop to continue running and now
                // it will start from the beginning again
                continue;
            } else {
                alert("You retreated. Refresh the browser to play again");
                // This will end the while loop
                break;
            }
        }
    }
}

startGame();



///// my scratch ... 

// first attack of myship on alien ship1


//var didHit = Math.random ()
//console.log(didHit)

// if (myShip.accuracy > didHit ){
//        myShip.hit(ship1)
//        console.log('You have been hit!'); //alert
//      }
// else {
//      console.log("missed")
//     }
//         console.log(ship1) //alert
    

//second attack depends on if the first attack was successful or not

// while (alienShips.length !==0 ) {      // if alient ship is not zero (alive)
//     if (myShip.hull > 0){                        // if myship is alive 
//         myShip.accuracy > didHit                       // should I attack the first ship???
//             myShip.hit(ship1)
//             console.log('You have been hit!'); 
//           }
//      else {
//           console.log("Missed")
//          }
//              console.log(ship1)
//              if (ship1.hull > 0) {     //if ship1 still alive
//                  ship1.hit(myShip)    // ship1 attacks myship
//              }
//              else {
//                  alienShips.shift()       // in case if ship1 is killed it will be removed from alienship
//              }
//  }                                   
//let response = prompt("[Enemies left: " + alienShips.length+"][Your health: " 
                        //+ myShip.hull +"]", "attack/retreat");                                    


