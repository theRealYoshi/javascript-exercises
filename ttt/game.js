var board = require('../ttt/board.js');

function Game (interfacer) {
  this.interfacer = interfacer;
  this.board = new board();
  this.marker = 'x';
}

Game.prototype = {
  getPlayerMove: function () {
    this.interacer.question("Select a location(x,y) to play:", function (inputString) {
      var location = inputString.split(",");
    });
  },

  playPiece: function(locArray) {
    this.board.setPieceAt(locArray[0], locArray[1]);
  },

  switchMarker: function() {
    if (this.marker === 'x') {
      this.marker = 'o';
    } else {
      this.marker = 'x';
    }
  },

  isWon: function() {
    var lines = board.getColumns();
    lines.concat(board.getDiagonals());
    lines.concat(this.board);
    for (var line in lines) {
      if (line.every(function(el){
        return el === "x";
      })){
        return true;
      } else if(line.every(function(el){
        return el === "o";
      })){
        return true;
      }
    }
    return false;
  },

  run: function(completionCallback) {

    var that = this;

    var f = function (locArray) {
      if (that.isWon()) {
        console.log("look at me");
        completionCallback();
      } else {
        that.run(completionCallback);
      }
    };

    this.promptMove(f);

  },

};



if (!this.board.setPieceAt()) {
  console.log("Invalid move, try again.");
}
