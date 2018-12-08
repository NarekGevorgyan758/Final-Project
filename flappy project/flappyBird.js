let cvs = document.getElementById("canvas");
let ctx = cvs.getContext("2d");




let animal = new Image();
animal.src = "images/rsz_bird-300x194.png";

let background = new Image();
background.src = "images/golden_forest_tree_2d_game_background_dribbble.jpg";

let floor = new Image();
floor.src = "images/floor.png";


let pipeUp = new Image();
pipeUp.src = "images/pipeUp.png";


let pipeDown = new Image();
pipeDown.src = "images/pipeDown.png";


 

let gap = 110;
let constant;

// possesion of bird
let startX = 10;
let startY = 150;

let fallspeed = 1.6;

let score = 0;


const fly = new Audio();
fly.src = "sounds/fly.mp3";
1

const scoreSound = new Audio();
scoreSound.src = "sounds/score.mp3";



document.addEventListener("keydown",moveUp);

// up possesion of the birds
function moveUp(){
    // startY -= 37;
    fallspeed=-5;
    fly.play();
}


let pipe = [];

pipe[0] = {
    x : cvs.width,
    y : 0
};


const draw = function(){
    
    ctx.drawImage(background, -150,0);
    
    
    for(let i = 0; i < pipe.length; i++){
        
        constant = pipeUp.height+gap;
        ctx.drawImage(pipeUp,pipe[i].x,pipe[i].y);
        ctx.drawImage(pipeDown,pipe[i].x,pipe[i].y+constant);
             
        pipe[i].x--;
        
        if( pipe[i].x == 100 ){
            pipe.push({
                x : cvs.width,
                y : Math.floor(Math.random()*pipeUp.height)-pipeUp.height
            }); 
        }

        // GAME OVER 
        if( startX + animal.width >= pipe[i].x && startX <= pipe[i].x + pipeUp.width && (startY <= pipe[i].y + pipeUp.height || startY+animal.height >= pipe[i].y+constant) || startY + animal.height >=  cvs.height - floor.height){
           alert("Press Enter to Restart");
            location.reload(); 
        }
        
        if(pipe[i].x == 5){
            score++;
            scoreSound.play();
        }
        
        
    }

    ctx.drawImage(floor,0,cvs.height - floor.height);
    
    // direction starting of the bird
    ctx.drawImage(animal,startX,startY);
    
    startY += fallspeed;

    if (fallspeed < 1.6) {
        fallspeed = fallspeed + 0.3;
    }
    
    ctx.fillStyle = "blue";
    ctx.font = "20px Verdana";
    ctx.fillText("Score : "+score,10,cvs.height-20);
    
    requestAnimationFrame(draw);
    
}



 draw();
























