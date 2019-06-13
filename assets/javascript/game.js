
$(document).ready(function(){

    //variables
    var wins=0;
    var losses=0;
    var counter = 0;
    var numberOptions=[]; 

    //we create a target random number between 19 and 120- Math.floor(Math.random()*(max-min+1)+min) creats a random number between min and max
    // We begin by expanding our array to include four options.
    // Each imageCrystal will be given a data attribute called data-crystalValue.
    // This data attribute will be set equal to the array value.
    // we give each crystal a unique number value.
   
    function resetthegame(){
        
        for (i=0; i<4; i++){
        numberOptions[i]=Math.floor(Math.random()*(12-1+1)+1);
    }

    $("#bluecrystal").attr("data-crystalvalue", numberOptions[0]);
    $("#yellowcrystal").attr("data-crystalvalue", numberOptions[1]);
    $("#pinkcrystal").attr("data-crystalvalue", numberOptions[2]);
    $("#greencrystal").attr("data-crystalvalue", numberOptions[3]);
    counter=0;
    $("#totalscore").text(counter);
    targetNumber=Math.floor(Math.random()*(120-19+1)+19);
    $("#number-to-guess").text(targetNumber);
          
 }   

    resetthegame();

    $("#wins").html("wins:"+ wins);
    $("#losses").html("losses:"+ losses);
   
    
});
         