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

// Write this first.
function askIfGreaterThan(el1, el2, callback) {
  // Prompt user to tell us whether el1 > el2; pass true back to the
  // callback if true; else false.
  reader.question(`Is this true or false, ${el1} > ${el2}`, function(answer) {
    if (answer === "true"){
      callback(true)
    }
    else {
      callback(false)
    }
  })
}

// Once you're done testing askIfGreaterThan with dummy arguments, write this.
function innerBubbleSortLoop(arr, i, madeAnySwaps) {
  console.log(arr)
  console.log(i)
  console.log(madeAnySwaps)
  if (i === arr.length - 1) {
    // outerBubbleSortLoop(madeAnySwaps)
    console.log("reached end")
  }
  else {
    askIfGreaterThan(arr[i], arr[i + 1])
   if (askIfGreaterThan(arr[i], arr[i + 1], ) === true) {
    madeAnySwaps = true 
    [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
   }  
   innerBubbleSortLoop(arr, i + 1, madeAnySwaps)  
  }
}
  // Do an "async loop":
  // 1. If (i == arr.length - 1), call outerBubbleSortLoop, letting it
  //    know whether any swap was made.
  // 2. Else, use `askIfGreaterThan` to compare `arr[i]` and `arr[i +
  //    1]`. Swap if necessary. Call `innerBubbleSortLoop` again to
  //    continue the inner loop. You'll want to increment i for the
  //    next call, and possibly switch madeAnySwaps if you did swap.

// Once you're done testing innerBubbleSortLoop, write outerBubbleSortLoop.
// Once you're done testing outerBubbleSortLoop, write absurdBubbleSort.

function absurdBubbleSort(arr, sortCompletionCallback) {
  function outerBubbleSortLoop(madeAnySwaps) {
    // Begin an inner loop if you made any swaps. Otherwise, call
    // `sortCompletionCallback`.
  }
  
  // Kick the first outer loop off, starting `madeAnySwaps` as true.
}

absurdBubbleSort([3, 2, 1], function(arr) {
  console.log("Sorted array: " + JSON.stringify(arr));
  reader.close();
});

// askIfGreaterThan(2, 3, function(boolean) {
//   console.log(boolean)
// })

innerBubbleSortLoop([3, 2, 1], 0, madeAnySwaps)