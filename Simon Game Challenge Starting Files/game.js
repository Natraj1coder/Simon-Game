var arr=["red","blue","green","yellow"];
var user=[];
var game_sequencence=[];
var lv=0;
var strt=false;
$(document).keypress(function(){
    if(!strt){
        $("#level-title").text("Level "+lv);
        nextSequence();
        strt=true;
    }
});
$(".btn").click(function(event){
    var userchosen=$(this).attr("id");
    user.push(userchosen);
    playsound(userchosen);
    checkAnswer(user.length-1);
});
function nextSequence(){
    user=[];``
    lv++;
    $("#level-title").text("Level "+lv);
    var a=Math.floor(Math.random()*4);
    var randomcolor=arr[a];
    game_sequencence.push(arr[a]);
    $("#"+randomcolor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    playsound(randomcolor);
}
function playsound(name){
    var aud=new Audio('/sounds/'+name+'.mp3');
    aud.play();
    animatePress(name);
}
function animatePress(currenColor){
    $("#"+currenColor).addClass("pressed");
    setTimeout(()=>{$("#"+currenColor).removeClass("pressed");},100);
}
function checkAnswer(currentLevel){
if(game_sequencence[currentLevel]===user[currentLevel]){
    console.log("sucess");
    if(user.length===game_sequencence.length){
        setTimeout(function(){
            nextSequence();
        },1000);
    }
}
else{
    playsound("wrong");
    $("body").addClass("game-over");
    setTimeout(function(){
        $("body").removeClass("game-over");
    },200);
    $("#level-title").text("Game Over,Press Any Key to Restart");
    startOver();
}

}
function startOver(){
    strt=false;
    user=[];
    game_sequencence=[];
    lv=0;
}
