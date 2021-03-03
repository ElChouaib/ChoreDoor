let doorSources = [
    {
        id:"space",
        src:"https://content.codecademy.com/projects/chore-door/images/space.svg"
    },
    {
        id:"beach",
        src:"https://content.codecademy.com/projects/chore-door/images/beach.svg"
    },
    {
        id:"robot",
        src:"https://content.codecademy.com/projects/chore-door/images/robot.svg"
    }
]

let currentStreak = 0;
let bestStreak = 0;
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

function open(){
    console.log(doorSources[getRandomInt(3)]);
    
}