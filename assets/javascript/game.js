


var targetNumber = [45,49,50,35];
var randoNum = targetNumber[Math.floor(Math.random()*targetNumber.length)];

$(".goal").text(randoNum);

var resetGoal = function (){

    $(".goal").append(randoNum);
};

var counter= 0;
var resetCounter = function(){
    counter = 0;
    $(".total-score").append(counter);
   
    
}

//values for each crystal when clicked

var numOptions= [5,9,10,1];

//create a loop for each each crystal so that when one is clicked all available to be clicked

for (let i = 0; i < numOptions.length; i++) {

    //Still need to figure how to randomize the score of each gem
    // var newNum = numOptions[Math.floor(Math.random()*numOptions.length)];
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    //create an <img> for each crystal
    var imgCrystal = $("<img>");
   //adds class for each <img>
    imgCrystal.addClass("Crystal-image");

    imgCrystal.attr("src", "https://img4.goodfon.com/wallpaper/nbig/c/61/infinity-war-infinity-stone-infinity-gem-marvel-space-stone.jpg");

    imgCrystal.attr("data-crystalvalue", numOptions[i]);

    $(".crystals").append(imgCrystal);
    

}
$(".Crystal-image").on("click" , function(){

    var crystalValue = ($(this).attr("data-crystalvalue"));

    crystalValue = parseInt(crystalValue);
       
    counter += crystalValue;

    alert("Your score: " + counter );
    $(".total-score").append(counter);

    if(counter === randoNum) {
        alert("You Win!");
        resetCounter();
        resetGoal();
        }
    else if (counter >= randoNum){
     alert("You Lose!");
     resetCounter()
     resetGoal();
        }
});