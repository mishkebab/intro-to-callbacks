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

const readline = require('readline');
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
  
});

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
  myBoundTurnOn(); // should say "Turning on a lamp"