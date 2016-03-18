// https://www.reddit.com/r/dailyprogrammer/comments/46zm8m/20160222_challenge_255_easy_playing_with_light/

// Imagine a panel of lightswitches. Each input for the function hitTheLights represents a lightswitch. When the function runs, every lightswitch between the two inputs
// will be toggled. If the light was off, it will turn on. If the light was on, it will turn off. The function will remember the state of the lights from the previous time the function was called

// This challenge called for a simple integer output representing the number of lights on after each time the function runs. I decided to take it one step further and output
// a graphic representation of the lights, with "X" meaning the light is on and "." meaning the light is off.

var lightSwches = new Array;

var hitTheLights = function(range1, range2) {
  

  if (range1 - range2 > 0) {
   
   if (range1 > lightSwches.length) {

   // when an input calls for a large array of light switches, only add the difference between the array's current size and the size of the input	
   var difference = range1 - lightSwches.length;

    for (var i = 0; i <= difference; i++) {
    		var swtch = false;
    		lightSwches.push(swtch);
    	};
	};  

	//toggle lights that are ON to OFF and lights that are OFF to ON
      while(range2 <= range1) {
        if (lightSwches[range2] === false){
          lightSwches[range2] = true;
        } else {lightSwches[range2] = false;};

        range2 = range2 + 1;
      };
    
   }

   else if (range2 - range1 > 0) {
    	
    if (range2 > lightSwches.length) {
    var difference = range2 - lightSwches.length;
      
    	for (var i = 0; i <= difference; i++) {
    		var swtch = false;
    		lightSwches.push(swtch);
    	};
    };    

	      while(range1 <= range2) {
	        if (lightSwches[range1] === false){
	          lightSwches[range1] = true;
	        } else {lightSwches[range1] = false;};

	        range1 = range1 + 1;
	      };
    }

   // if the inputs are the same, only toggle the light at that index in the array
   else if (range2 - range1 == 0) {
     
    if (range1 > lightSwches.length) {
     
     	for (var i = 0; i <= range1; i++) {
    		var swtch = false;
    		lightSwches.push(swtch);
    	};
		};
    
      if (lightSwches[range1] === false){
      		lightSwches[range1] = true;
   	 	} else {lightSwches[range1] = false;};
    };
    
 	//arrays for graphic representation of the light switches		
    var visualizerRow1 = new Array;
    var visualizerRow2 = new Array;   


    for (var i = 0; i < lightSwches.length; i++) {
    
		visualizerRow2.push("|");
        
        if (lightSwches[i] == false) {   	
          visualizerRow1.push(".");
        }

        else { 
          visualizerRow1.push("X");
        };   
    };

    console.log(visualizerRow1.join(""));
    console.log(visualizerRow2.join(""));
    
};

hitTheLights(10,2);
hitTheLights(13,20);
hitTheLights(14,20);
hitTheLights(0,20);









