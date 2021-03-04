let imgSources = [
    {
        id:"space",
        src:"https://content.codecademy.com/projects/chore-door/images/space.svg",
    },
    {
        id:"beach",
        src:"https://content.codecademy.com/projects/chore-door/images/beach.svg",

    },
    {
        id:"robot",
        src:"https://content.codecademy.com/projects/chore-door/images/robot.svg",
    }
];

let closedDoor = {
    id: "closed",
    src:"https://content.codecademy.com/projects/chore-door/images/closed_door.svg"
    }

let doors = [
    {
        name:"door1",
        closed: true
    },
    {
        name:"door2",
        closed: true
    },
    {
        name:"door3",
        closed: true
    }
]

let doorSourceLength = 3;
let gameOver = 0;

let currentSteak = 0;
let BestSteak = 0;

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

function openDoor(element){
    doorName = element.id;
    if (gameOver == 0 && isClosed(doorName))
    {
        let randomChoice = getRandomInt(doorSourceLength);
        let ImageName = imgSources[randomChoice].id;
        document.getElementById(doorName).src = imgSources[randomChoice].src;
        setDoorOpen(doorName)
        imgSources.splice(randomChoice,1);
        doorSourceLength--;

        if (ImageName === "robot")
        {
            gameOver = 1;
            if (doorSourceLength == 0)
                youWin();
            else
                youLoose();     
        }
    }
}

function setDoorOpen(doorName){
    doors.forEach(d => {
        if (d.name.endsWith(doorName.toString()))
            d.closed = false;
    })
}

function isClosed(doorName){
    const selectedoor = doors.filter(d => d.name.endsWith(doorName.toString()));
    return selectedoor[0].closed;
}

function youWin(){
    currentSteak++;
    if (currentSteak > BestSteak){
        BestSteak = currentSteak;
        
    }
        
    document.getElementById("score-number").innerHTML = currentSteak.toString();
    document.getElementById("high-score-number").innerHTML = currentSteak.toString();
    document.getElementById("start").innerHTML = "You win! Play again?"
}

function youLoose(){
    currentSteak = 0;
    document.getElementById("score-number").innerHTML = currentSteak.toString();
    document.getElementById("start").innerHTML = "Game over! Play again?"
    
}

function reset(){
    doorSourceLength = 3;
    gameOver = 0; 
    imgSources = [
        {
            id:"space",
            src:"https://content.codecademy.com/projects/chore-door/images/space.svg",
        },
        {
            id:"beach",
            src:"https://content.codecademy.com/projects/chore-door/images/beach.svg",
    
        },
        {
            id:"robot",
            src:"https://content.codecademy.com/projects/chore-door/images/robot.svg",
        }
    ];
    doors.forEach(d => d.closed = true)
    document.getElementById('door1').src = closedDoor.src;
    document.getElementById('door2').src = closedDoor.src;
    document.getElementById('door3').src = closedDoor.src;
    document.getElementById('start').innerHTML = 'Good luck!';
    
}

function incrementBestScore(){
    console.log('l');
   // $.post('/changeScore', {score:})
}
