$(document).ready(function(){

var wins=0;
var losses=0;
var userTotal=0;

//creates a random goal number
var randoNum = Math.floor(Math.random()*105+9);
$(".goal").text(randoNum);

//wins and losses text
 $(".wins").text(wins);
 $(".losses").text(losses);

 //crystal value
var value1= Math.floor(Math.random()*10+5);
var value2= Math.floor(Math.random()*10+5);
var value3= Math.floor(Math.random()*10+5);
var value4= Math.floor(Math.random()*10+5);

//resets everything
 function reset(){
     //resets goal
     randoNum=[Math.floor(Math.random()*105+9)];
    $(".goal").text(randoNum);

    // resets total score
    userTotal=0;
    $(".total-score").text(userTotal);
   
    //resets crystal values
      value1= Math.floor(Math.random()*10+5);
      value2= Math.floor(Math.random()*10+5);
      value3= Math.floor(Math.random()*10+5);
      value4= Math.floor(Math.random()*10+5);
      redCrystal.attr("data-crystalvalue", value1);
      greenCrystal.attr("data-crystalvalue", value2);
      purpleCrystal.attr("data-crystalvalue", value3);
      blueCrystal.attr("data-crystalvalue", value4);
 };



var redCrystal = $("<img>");
redCrystal.addClass("red");
redCrystal.attr("src", "assets/images/red stone.jpg");
redCrystal.attr("data-crystalvalue", value1);
$(".crystals").append(redCrystal);

var greenCrystal = $("<img>");
greenCrystal.addClass("green");
greenCrystal.attr("src", "assets/images/green stone.jpeg");
greenCrystal.attr("data-crystalvalue", value2);
$(".crystals").append(greenCrystal);

var purpleCrystal = $("<img>");
purpleCrystal.addClass("purple");
purpleCrystal.attr("src", "assets/images/purple stone.jpeg");
purpleCrystal.attr("data-crystalvalue", value3);
$(".crystals").append(purpleCrystal);

var blueCrystal = $("<img>");
blueCrystal.addClass("blue");
blueCrystal.attr("src", "assets/images/infinity-war-infinity-stone-infinity-gem-marvel-space-stone.jpg");
blueCrystal.attr("data-crystalvalue", value4);
$(".crystals").append(blueCrystal);
;

$(".red").on("click", function(){
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    userTotal += crystalValue;
    $(".total-score").text(userTotal);
    console.log("red " + crystalValue);
    if (userTotal > randoNum) {
        losses++;
        $(".losses").text(losses);
        console.log("you lost");
        reset();
    }
    if (userTotal == randoNum) {
        wins++;
        $(".wins").text(wins);
        reset();
    }
});

$(".green").on("click", function(){
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    userTotal += crystalValue;
    $(".total-score").text(userTotal);
    console.log("green " + crystalValue);
    if (userTotal > randoNum) {
        losses++;
        $(".losses").text(losses);
        console.log("you lost");
        reset();
    }
    if (userTotal == randoNum) {
        wins++;
        $(".wins").text(wins);
        reset();
    }
});

$(".purple").on("click", function(){
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    userTotal += crystalValue;
    $(".total-score").text(userTotal);
    console.log("purple " + crystalValue);
    if (userTotal > randoNum) {
        losses++;
        $(".losses").text(losses);
        console.log("you lost");
        reset();
    }
    if (userTotal == randoNum) {
        wins++;
        $(".wins").text(wins);
        reset();
    }
});

$(".blue").on("click", function(){
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    userTotal += crystalValue;
    $(".total-score").text(userTotal);
    console.log("blue " + crystalValue);
    if (userTotal > randoNum) {
        losses++;
        $(".losses").text(losses);
        console.log("you lost");
        reset();
    }
    if (userTotal == randoNum) {
        wins++;
        $(".wins").text(wins);
        reset();
    }
});

});