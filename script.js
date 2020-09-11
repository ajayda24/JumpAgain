// var screenSize = $(window).height();
// $('#game').css({height: screenSize});
// $('#character').css({top: screenSize-100});
// $('#block-one').css({top: screenSize-25});
// $('#block-two').css({top: screenSize-25});
// $('#block-three').css({top: screenSize-25});


// setInterval(() => {
    if(window.innerHeight < window.innerWidth){
        // location.reload();
var character = document.getElementById("character");
    
var blockOne = document.getElementById("block-one");

var blockTwo = document.getElementById("block-two");

var blockThree = document.getElementById("block-three")

function jumb(){
    if(character.classList != "character-animation"){
    character.classList.add("character-animation");

    setTimeout(function(){
        character.classList.remove("character-animation")
    },500);
}
}

var checkDead = setInterval(function() {
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("Top"));

    var blockOneLeft = parseInt(window.getComputedStyle(blockOne).getPropertyValue("Left"));

    var blockThreeLeft = parseInt(window.getComputedStyle(blockThree).getPropertyValue("Left"));

    if(blockOneLeft<= 20 && blockOneLeft >= -80 && characterTop >45){

        // alert("hi");
        document.getElementById("block-one").style.animationPlayState = "paused";
        // document.getElementById("block-two").style.animationPlayState = "paused";
        document.getElementById("block-three").style.animationPlayState = "paused";
        document.getElementById("#line").style.animationPlayState = "paused";
        document.getElementById("#line1").style.animationPlayState = "paused";
        document.getElementById("#line2").style.animationPlayState = "paused";
        document.getElementById("#line3").style.animationPlayState = "paused";
        
    }

    if(blockThreeLeft<= -30 && blockThreeLeft >= -120 && characterTop > 45){

        // alert("hi");
        document.getElementById("block-one").style.animationPlayState = "paused";
        // document.getElementById("block-two").style.animationPlayState = "paused";
        document.getElementById("block-three").style.animationPlayState = "paused";
        document.getElementById("#line").style.animationPlayState = "paused";
        document.getElementById("#line1").style.animationPlayState = "paused";
        document.getElementById("#line2").style.animationPlayState = "paused";
        document.getElementById("#line3").style.animationPlayState = "paused";
        
    }
}, 10);

    }
    else{
        location.reload();
        // alert("Please use Landscape!");
        document.getElementById("game").style.display = "none";
        document.getElementById("down").style.display = "none";
        document.getElementById("landscape").style.display = "block";

         document.getElementById("block-one").style.animationPlayState = "paused";
         // document.getElementById("block-two").style.animationPlayState = "paused";
         document.getElementById("block-three").style.animationPlayState = "paused";
         document.getElementById("#line").style.animationPlayState = "paused";
         document.getElementById("#line1").style.animationPlayState = "paused";
         document.getElementById("#line2").style.animationPlayState = "paused";
         document.getElementById("#line3").style.animationPlayState = "paused";
    }
    
// }, 100);
setInterval(() => {
    if(window.innerHeight > window.innerWidth){
        location.reload();
        // alert("Please use Landscape!");
        document.getElementById("game").style.display = "none";
        document.getElementById("down").style.display = "none";
        document.getElementById("landscape").style.display = "block";
    
         document.getElementById("block-one").style.animationPlayState = "paused";
         // document.getElementById("block-two").style.animationPlayState = "paused";
         document.getElementById("block-three").style.animationPlayState = "paused";
         document.getElementById("#line").style.animationPlayState = "paused";
         document.getElementById("#line1").style.animationPlayState = "paused";
         document.getElementById("#line2").style.animationPlayState = "paused";
         document.getElementById("#line3").style.animationPlayState = "paused";
    }
}, 100);


