'use strict';

// Checkers Angular module
var app = angular.module('checkers', []);

// Checkers component and controller
app.component('checkers', {
  templateUrl: 'checkers/checkers.template.html',
  controller: ['$scope', 'Board', 'CheckWins', function CheckersController($scope, Board, CheckWins) {
    var self = this;
    self.board = Board;
    self.wins = CheckWins.wins(Board.checkers);
  }]
});

// CheckWins factory - Checks for 4 checkers in a row on the board.
app.factory('CheckWins', ['Board', function(Board) {
  var CheckWins = {};
  
  CheckWins.wins = function(the_array) {
    var win_h = 1;
    var win_v = 1;
    var win_bslash = 1;
    var win_fslash = 1;
    var wins = [];
    
    for(var x = 0; x < the_array.length; x++) {      
      for(var y = 0; y < the_array[x].length; y++) {
        if(the_array[x][y] === the_array[x][y-1]) {
          win_h++;
        } else {
          win_h = 1;
        }
        
        if(win_h === 4) {
          wins.push("Horizontal four in a row from "+ (y-2) +","+ (x+1) +" to "+ (y+1) +","+ (x+1));
        }
        
        if(x >= 3) {
          if(
            the_array[x][y] === the_array[x-1][y] && 
            the_array[x][y] === the_array[x-2][y] && 
            the_array[x][y] === the_array[x-3][y]
          ) {
            win_v = 4;
          } else {
            win_v = 1;
          }
        
          if(win_v === 4) {
            wins.push("Vertical four in a row from "+ (y+1) +","+ (x-2) +" to "+ (y+1) +","+ (x+1));
          }
          
          if(y >= 3) {
            if(
              the_array[x][y] === the_array[x-1][y-1] && 
              the_array[x][y] === the_array[x-2][y-2] && 
              the_array[x][y] === the_array[x-3][y-3]
            ) {
              win_bslash = 4;
            } else {
              win_bslash = 1;
            }
        
            if(win_bslash === 4) {
              wins.push("Back slash four in a row from "+ (y-2) +","+ (x-2) +" to "+ (y+1) +","+ (x+1));
            }
          }
          
          if(y <= 4) {
            if(
              the_array[x][y] === the_array[x-1][y+1] && 
              the_array[x][y] === the_array[x-2][y+2] && 
              the_array[x][y] === the_array[x-3][y+3]
            ) {
              win_fslash = 4;
            } else {
              win_fslash = 1;
            }
        
            if(win_fslash === 4) {
              wins.push("Forward slash four in a row from "+ (y+1) +","+ (x+1) +" to "+ (y+4) +","+ (x-2));
            }
          }
        }
      }
    }
    
    return wins;
  }
  return CheckWins
}]);

// Board factory - Builds the board and fills it with checkers
app.factory('Board', ['Checkers', function(Checkers) {
  var Board = {
    "rows": [1,2,3,4,5,6,7,8],
    "cols": [1,2,3,4,5,6,7,8],
    "checkers": Checkers
  };
  
  return Board;
}]);

// Checkers factory - Selects the checkers
app.factory('Checkers', ['Checker', function(Checker) {
  var Checkers = {};
  var rows = 8;
  var cols = 8;
  
  var board_array = [];  
  for(var x = 0; x < rows; x++) {
    var cells_array = [];
    for(var y = 0; y < cols; y++) {
      cells_array.push(Checker.colors[Math.floor(Math.random() * Checker.colors.length)]);
    }
    board_array.push(cells_array);
  }
  Checkers = board_array;
  
  return Checkers;
}]);

// Checker factory - Makes a checker
app.factory('Checker', function() {
  var Checker = {}; 
  Checker.colors = ["red", "black", "empty"];
  
  return Checker;
});