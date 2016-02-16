//Challenge: https://www.reddit.com/r/dailyprogrammer/comments/45w6ad/20160216_challenge_254_easy_atbash_cipher/

var cipherKey = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var reverseKey = cipherKey.reverse();


var decode = function(a){
	var bucket = [];
	var splitPhrase = (a.split(""));
  
  for (var i = 0; i < splitPhrase.length; i++) {
		var iterator = splitPhrase[i];
    
	    function iterate(){

		    switch (iterator) {
		    case "a":
		        bucket.push(reverseKey[0]);
		        break;
		    case "b":
		        bucket.push(reverseKey[1]);
		        break;
		    case "c":
		        bucket.push(reverseKey[2]);
		        break;
		    case "d":
		        bucket.push(reverseKey[3]);
		        break;
		    case "e":
		        bucket.push(reverseKey[4]);
		        break;
		    case "f":
		        bucket.push(reverseKey[5]);
		        break;
		    case "g":
		        bucket.push(reverseKey[6]);
		        break;
		    case "h":
		        bucket.push(reverseKey[7]);
		        break;
		    case "i":
		        bucket.push(reverseKey[8]);
		        break;
		    case "j":
		        bucket.push(reverseKey[9]);
		        break;
		    case "k":
		        bucket.push(reverseKey[10]);
		        break;
		    case "l":
		        bucket.push(reverseKey[11]);
		        break;
		    case "m":
		        bucket.push(reverseKey[12]);
		        break;
		    case "n":
		        bucket.push(reverseKey[13]);
		        break;
		    case "o":
		        bucket.push(reverseKey[14]);
		        break;
		    case "p":
		        bucket.push(reverseKey[15]);
		        break;
		    case "q":
		        bucket.push(reverseKey[16]);
		        break;
		    case "r":
		        bucket.push(reverseKey[17]);
		        break;
		    case "s":
		        bucket.push(reverseKey[18]);
		        break;
		    case "t":
		        bucket.push(reverseKey[19]);
		        break;
		    case "u":
		        bucket.push(reverseKey[20]);
		        break;
		    case "v":
		        bucket.push(reverseKey[21]);
		        break;
		    case "w":
		        bucket.push(reverseKey[22]);
		        break;
		    case "x":
		        bucket.push(reverseKey[23]);
		        break;
		    case "y":
		        bucket.push(reverseKey[24]);
		        break;
		    case "z":
		        bucket.push(reverseKey[25]);
		        break;
		   case "":
		        bucket.push("");
		        break;
		   default: bucket.push(iterator)}		
		};
    iterate();
	};
  var output = bucket.join("");
  console.log(output);
}

decode("gsrh rh zm vcznkov lu gsv zgyzhs xrksvi");
decode("foobar");
decode("wizard");
decode("/r/dailyprogrammer");