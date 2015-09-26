var readline = require("readline");

var reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function HanoiGame (numStacks) {
  this.numStacks = numStacks;
  this.stacks = [[],[],[]];
}


HanoiGame.prototype = {
  isWon: function() {
    var stacks = this.stacks.slice(1);
    for (var i = 0; i < stacks.length; i++){
      if (stacks[i].length === this.numStacks){
        return true;
      }
    }
    return false;
  },

  isValidMove: function(startTowerIdx, endTowerIdx) {
    if (this.stacks[startTowerIdx].length === 0){
      return false;
    }
    if (this.stacks[endTowerIdx].length === 0){
      return true;
    }
    return this.stacks[startTowerIdx].slice(-1) <
           this.stacks[endTowerIdx].slice(-1);
  },

  move: function(startTowerIdx, endTowerIdx) {
    if (this.isValidMove(startTowerIdx, endTowerIdx)) {

      var temp = this.stacks[startTowerIdx].pop();
      this.stacks[endTowerIdx].push(temp);
      console.log(this.stacks);
    } else {
      console.log("Invalid Move!");
    }
  },

  printStack: function() {
    console.log(this.stacks);
  },

  promptMove: function(callback) {
    this.printStack();
    reader.question( "Choose a stack to move from:", function (startTowerIdx) {
      reader.question( "Choose a stack to move to:", function (endTowerIdx) {
        var startStack = parseInt(startTowerIdx);
        var endStack = parseInt(endTowerIdx);
        callback(startStack, endStack);
      });
    });
  },

  run: function(completionCallback) {

    var that = this;

    var f = function (startStack, endStack) {
      that.move(startStack, endStack);
      if (that.isWon()) {
        console.log("look at me");
        completionCallback();
      } else {
        that.run(completionCallback);
      }
    };

    this.promptMove(f);


    // var checkWin = that.isWon();
    // if (checkWin){
    //   completionCallback();
    // }
    // var that = this;
    // this.promptMove( function(startStack, endStack){
    //   that.move(startStack, endStack);
    // });
  },

  populateBoard: function(){
    for(var i = this.numStacks; i >= 1; i--){
      this.stacks[0].push(i);
    }
  }
};

var game = new HanoiGame(3);
game.populateBoard();
game.run( function () {
  console.log("Game Won!");
  reader.close();
});
