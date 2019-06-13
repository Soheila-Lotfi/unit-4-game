
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
   
    // the click event applies to every single crystal on the page.

  $(".crystal-image").on("click", function() {

    // Determining the crystal's value requires us to extract the value from the data attribute.
    // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
    // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
    
    var crystalValue = ($(this).attr("data-crystalvalue"));

    // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter

    crystalValue = parseInt(crystalValue);

    // We then add the crystalValue to the user's "counter" which is a global variable.
    // Every click, from every crystal adds to the global counter.
    counter += crystalValue;
    $("#totalscore").text(counter);

    // if total score (counter) is equal with targetnumber, the user wins, if goes above the target number, the user loses.

  });

});
         