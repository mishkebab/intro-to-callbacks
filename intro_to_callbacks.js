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

const clock = new Clock();