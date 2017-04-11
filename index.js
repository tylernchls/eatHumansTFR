var bear = "Aaron the bear";
var humans = ["Tyler", "Bob", "Steve"];
var result = eatHumans(bear, humans);

function eatHumans(bear, human) {
  var result = "";

  for (var i = 0; i <humans.length; i++) {
    if(humans[i] === "Tyler") {
      result += humans[i] + " was eaten by " + bear + "\n";
    } else if(humans[i] === "Bob") {
      result += humans[i] + " was not eaten by " + bear + "\n";
    } else  {
      result += humans[i] + " ran away from " + bear + "\n";
    }
  }
  return result;
}

