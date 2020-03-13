let button = null;
let paragraph = null;
let missionAbort = null;
let landing = null;
let spaceShuttleHeight= null;
let down = null;
let up = null;
let left = null;
let right = null;

function init () {
  // Put your code for the exercises here.

    missionAbort = document.getElementById("missionAbort");
    takeOff = document.getElementById("takeoff");
    paragraph = document.querySelector("p");
    shuttleBackground = document.getElementById("shuttleBackground")
    spaceShuttleHeight = document.getElementById("spaceShuttleHeight")
    landing = document.getElementById("landing");
    goDown = document.getElementById("down");
    goUp = document.getElementById("up");
    goLeft = document.getElementById ("left");
    goRight = document.getElementById("right");
    rocket = document.getElementById("rocket");
    let theHeight = 0;
    let topMargin = 0;
    let bottomMargin = 0;
    

    //create function shuttleTakeOff
    function shuttleTakeOff() {
        confirm("Confirm that the shuttle is ready for takeoff.");
        if (confirm = true) {
        paragraph.innerHTML =("Shuttle in flight."); 
        shuttleBackground.style.backgroundColor = "blue";
        
        theHeight += Number(10000);
        spaceShuttleHeight.innerHTML = theHeight
        }
                     
      }
    // Set named function shuttleTakeOff as the click event handler
      takeOff.addEventListener("click", shuttleTakeOff);

    // create function shuttleLand
    function shuttleLand() {
        alert("The shuttle is landing. Landing gear engaged.");
        paragraph.innerHTML =("Landing gear engaged."); 
        shuttleBackground.style.backgroundColor = "green";
        spaceShuttleHeight.innerHTML = 0;
        
                     
      }
    // Set named function shuttleLand as the click event handler
      landing.addEventListener("click", shuttleLand);
    
    function youAbort() {
      let confrim = window.confirm('Confirm that you want to abort the mission.'); 
        if (confirm = true) {

          paragraph.innerHTML =("Mission aborted."); 
          shuttleBackground.style.backgroundColor = "green";
          spaceShuttleHeight.innerHTML = 0;
        }
                     
      }
    // Set named function youAbort as the click event handler
      missionAbort.addEventListener("click", youAbort);

      function moveDown() {
          bottomMargin = "-10px"
          rocket.style.marginBottom = bottomMargin;

          theHeight -= 10000;
        spaceShuttleHeight.innerHTML = theHeight;
        }
      // Set named function moveDown as the click event handler
        goDown.addEventListener("click", moveDown);

        function moveUp() {
          topMargin += "10px"
          rocket.style.marginTop = topMargin;

          theHeight += Number(10000);
        spaceShuttleHeight.innerHTML = theHeight;
            }
    // Set named function moveUp as the click event handler
        goUp.addEventListener("click", moveUp);

        function moveLeft() {
          rocket.style.marginLeft = "10px";
                    };
                
    // Set named function moveLeft as the click event handler
        goLeft.addEventListener("click", moveLeft);

            
        function moveRight() {
          rocket.style.marginRight = "10px";
                    }
                  // Set named function moveLeft as the click event handler
            goRight.addEventListener("click", moveRight);
}

window.onload = init;