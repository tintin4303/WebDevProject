let gamePattern = []
let userClickedPattern = []
let buttonColors = ["red", "blue", "green", "yellow"]
let started = false;
let level = 0;

function nextSequence() {
    userClickedPattern = []
    level+=1;
    $("#level-title").html("Level "+ level)

    var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColor = buttonColors[randomNumber]
    gamePattern.push(randomChosenColor)

    $("#"+randomChosenColor).fadeOut(50).fadeIn(50);
    playSound(randomChosenColor);
}

function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

$(document).keypress(function() {
    if (!started) {
        started = true;
        $("#level-title").html("Level "+level)
        nextSequence();

    }
});

$(".btn").on("click",(function(){
    var userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    console.log(userClickedPattern);
    playSound(userChosenColor);
    animatePress($(this));
    checkAnswer(userClickedPattern.length-1);
 }));

function animatePress(thisButton){
    thisButton.addClass("pressed");
    setTimeout(function(){
        thisButton.removeClass("pressed");
    },100);
}

function checkAnswer(currentLevel){
    if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
        console.log("success")
        if (userClickedPattern.length === gamePattern.length) {
        setTimeout(function(){
            nextSequence();
        },1000);}
    } else {
        $("body").addClass("game-over");
        playSound("wrong")
        setTimeout(function(){
            $("body").removeClass("game-over");
        },200);
        $("#level-title").html("Game Over. Press any key to restart!")
        startOver();
    }
}

function startOver() {
    gamePattern = [];
    level = 0;
    started = false;
}