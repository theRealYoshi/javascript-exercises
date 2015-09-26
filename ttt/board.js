function Board(){
  this.board = [[null, null, null],[null, null, null],[null, null, null]];
}

Board.prototype = {
  getPieceAt: function(row, col){
    return this.board[row][col];
  },

  setPieceAt: function(row, col, marker){
    if (this.board[row][col] === null){
      this.board[row][col] = marker;
    } else {
      return false;
    }
    return true;
  },

  printBoard: function(){
    console.log("|" + this.board[0] + "|\n|" + this.board[1] + "|\n|" + this.board[2] + "|");
  },

  getColumns: function(){
    var transposed = [];
    for(var cols = 0; cols < this.board.length ; cols++){
      var colArray = [];
      for(var rows = 0; rows < this.board.length ; rows++){
        colArray.push(this.board[rows][cols]);
      }
      transposed.push(colArray);
    }
    return transposed;
  },

  getDiagonals: function() {
    var topLeft = [this.getPieceAt(0,0) , this.getPieceAt(1,1), this.getPieceAt(2,2)];
    var topRight = [this.getPieceAt(0,2) , this.getPieceAt(1,1), this.getPieceAt(2,0)];
    return [topLeft, topRight];
  }
};
