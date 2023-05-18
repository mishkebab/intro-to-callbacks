class Clock {
    constructor() {
      // 1. Create a Date object.

      // 2. Store the hours, minutes, and seconds.
    this.today = new Date();

    this.hours = this.today.getHours();
    this.minutes = this.today.getMinutes();
    this.seconds = this.today.getSeconds();

    this.printTime();
    setInterval(() => {
    this._tick();
    }, 1000)
      // 4. Schedule the tick at 1 second intervals.
    }

    printTime() {

      // Format the time in HH:MM:SS
        
        console.log(this.hours, this.minutes, this.seconds);
      // Use console.log to print it.
    }

    _tick() {
      // 1. Increment the time by one second.
        this.seconds += 1;

        if (this.seconds === 60) {
            this.seconds = 0;
            this.minutes += 1;
            if (this.minutes === 60) {
                this.minutes = 0;
                this.hours += 1;
            };
        };

        this.printTime();
    }
}

// const clock = new Clock();

// const readline = require('readline');
// const reader = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
  
// });

function addNumber(sum, numsLeft, callback){
  if (numsLeft > 0) {
    reader.question("Write a number", function(num){
      let number = parseInt(num);
      sum += number;
      console.log(sum)
      addNumber(sum, numsLeft - 1, callback)
    }) 
  }
  else  {
      reader.close();
      callback(sum)
    };
};

// addNumber(0, 3, sum => console.log(`Total Sum: ${sum}`));


Function.prototype.myBind = function(context) {
    const func = this;

    function binding() {
        // console.log(this);
        func.apply(context);
    }

    // const binding = () => {
    //     this.apply(context);
    // };
    return binding;
};


class Lamp {
    constructor() {
      this.name = "a lamp";
    }
  }
  
const turnOn = function() {
console.log("Turning on " + this.name);
};
  
  const lamp = new Lamp(); // this == Lamp.new(self.name)
  
//   turnOn(); // should not work the way we want it to
  
//   const boundTurnOn = turnOn.bind(lamp);
  const myBoundTurnOn = turnOn.myBind(lamp);
  
//   boundTurnOn(); // should say "Turning on a lamp"
  // myBoundTurnOn(); // should say "Turning on a lamp"




const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function askIfGreaterThan(el1, el2, callback) {

  reader.question(`Is this true or false, ${el1} > ${el2}`, function(answer) {
    if (answer === "true"){
      callback(true)
    }
    else {
      callback(false)
    }
  })
}

function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {

    
  if (i === arr.length - 1) {
    outerBubbleSortLoop(madeAnySwaps)
  } else {
    askIfGreaterThan(arr[i], arr[i + 1], function(boolean) {
        if (boolean === true) {
            console.log(boolean);
            madeAnySwaps = true 
            // [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
            let temp = arr[i]
            let temp2 = arr[i + 1]
            arr[i + 1] = temp
            arr[i] = temp2
            console.log(arr);
        }  
        console.log(arr);
        innerBubbleSortLoop(arr, i + 1, madeAnySwaps, outerBubbleSortLoop)  
    })
  };
}


function absurdBubbleSort(arr, sortCompletionCallback) {
  function outerBubbleSortLoop(madeAnySwaps) {
    if (madeAnySwaps) {
        innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop)
    } else {
        sortCompletionCallback(arr);
    }
  }

  outerBubbleSortLoop(madeAnySwaps=true);
}

// absurdBubbleSort([3, 2, 1], function(arr) {
//   console.log("Sorted array: " + JSON.stringify(arr));
//   reader.close();
// });

// askIfGreaterThan(2, 3, function(boolean) {
//   return boolean; 
// })

// innerBubbleSortLoop([10, 20, 5, 3, 2, 1], 0, madeAnySwaps=false)


Function.prototype.myThrottle = function (interval) {
    let tooSoon;
    function name() {
      console.log("infunc")
      if (tooSoon === false) {
        tooSoon = true; 
        setTimeout((tooSoon) => { 
          tooSoon = false 
        }, interval)
        this.myThrottle(interval)
      }
    }
}  

class Neuron {
  constructor() {
    this.fire = this.fire.myThrottle(500);
  }

  fire() {
    console.log("Firing!");
  }
}

neuron = new Neuron

neuron.fire()

