class Chronometer {
  
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval( () => {
       this.currentTime = this.currentTime + 1;
       if ( printTimeCallback ) printTimeCallback();
    },10);
  }

  getMinutes() {
      return Math.floor(this.currentTime / 6000);
  }

  getSeconds() {
    if ( (this.currentTime - (this.getMinutes() * 6000)) < 100 ) return 0;
    if (this.currentTime < 100) { return 0 };
    return Math.floor(
      (this.currentTime - (this.getMinutes() * 6000)) / 100
      );
  }

  getCentiseconds() {
    if (this.currentTime < 1) { return 0 };
    return this.currentTime - ((this.getMinutes() * 6000) + (this.getSeconds() * 100));
  }  

  computeTwoDigitNumber(value) {
    if ( value.toString().length == 1 ) {
      return "0" + value.toString();
    } else {
      return value.toString();
    }
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    return   this.computeTwoDigitNumber(this.getMinutes()) + 
       ":" + this.computeTwoDigitNumber(this.getSeconds()) + 
       "." + this.computeTwoDigitNumber(this.getCentiseconds());
  }
}
