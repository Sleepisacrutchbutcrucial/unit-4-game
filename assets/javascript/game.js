//a game with four crystals and random result
var random_result;
var lost =0;
var win = 0;
var previous = 0;

var resetAndStart = function () {

$(".crystals").empty();

var images = [
          "http://www.qui.uc.pt/~rfausto/homepage/crystal.jpg",
           "http://thespiritscience.net/wp-content/uploads/2014/06/lasercrystal.jpg",
           "https://cdn.shopify.com/s/files/1/1409/2086/products/2078_205_FO_10_FV_MI_760x.jpg?v=1527179821%27",
           "https://dumielauxepices.net/sites/default/files/drawn-crystals-natural-gem-526481-3783424.jpg"
        ];


random_result = Math.floor(Math.random() * 49) + 1;

$("#result").html('Random Result: ' + random_result);

//Every crystal needs to have a random number between a set of #'s
for(var i = 0; i < 4; i++) {
    var random = Math.floor(Math.random() * 11) + 1;
    
    var crystal = $("<div>");
    
    crystal.attr({"class": 'crystal', 
    'data-random': random
    });

    crystal.css({
        "background-image":"url('" + images[i] + "')",
        "background-size":"cover"
        
    });
    
    //  crystal.html(random);
    
    $(".crystals").append(crystal);
}

$("#previous").html("Total Score: ",previous);

}
// that number should be generated every single time we win or lose.
//when clicking any crystal it should show the previous result until it equals the total score
//return random result

resetAndStart();



// create a loss counter if it is greater than random result.
// create a win counter that increases by one for each win.
$(document).on('click', ".crystal", function() {

   var num = parseInt($(this).attr('data-random'));
 previous += num;

 $("#previous").html("Total Score: " + previous);

 console.log(previous);

 if(previous > random_result){
     lost++;
     
     $("#lost").html("You Lost! " + lost);

     alert("Sorry my friend, try again!");

     previous = 0;

    

     resetAndStart();
 }

 else if (previous === random_result) {
win++;

$("#win").html("You Won! " + win);

alert("Dang! Nice job! Are you on the spectrum or something?");

previous = 0;



resetAndStart();
 
}

});














