Function.prototype.myBind = function(context){
  //context is the object that's calling the function
  var fn = this; //function
  var f = function(){
    fn.apply(context);
  };
  return f;
};

function Clock () {
}

Clock.TICK = 5000;

Clock.prototype.printTime = function () {
  // Format the time in HH:MM:SS
  var hour = this.currTime.getHours();
  var minutes = this.currTime.getMinutes();
  var seconds = this.currTime.getSeconds();


  console.log(hour + ":" + minutes + ":" + seconds);
};

Clock.prototype.run = function () {
  // 1. Set the currentTime.
  // 2. Call printTime.
  // 3. Schedule the tick interval.
  this.currTime = new Date();
  // this.printTime();
  var that = this;
  // setInterval(function() {
  //   that._tick();
  // }, Clock.TICK);
  setInterval(this._tick.myBind(this), Clock.TICK);


};

Clock.prototype._tick = function () {
  // 1. Increment the currentTime.
  // 2. Call printTime.
  // var that = this;
  this.currTime = new Date();
  this.printTime();

};

var clock = new Clock();
clock.run();
