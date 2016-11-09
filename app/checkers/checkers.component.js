'use strict';

angular.module('checkers', []).component('checkers', {
  templateUrl: 'checkers/checkers.template.html',
  controller: ['$scope', function CheckersController($scope) {
    var self = this;
    self.board = {
      "rows": [1,2,3,4,5,6,7,8],
      "cells": [1,2,3,4,5,6,7,8],
      "checker_colors": ["red", "black", "empty"],
      "the_checkers": [],
      "wins": []
    };
    
    for(var x = 0; x < self.board.rows.length; x++) {
      var cells_array = [];
      for(var y = 0; y < self.board.cells.length; y++) {
        cells_array.push(pickRandom(self.board.checker_colors));
      }
      self.board.the_checkers.push(cells_array);
    }
    
    self.board.wins = checkForFour(self.board.the_checkers);
        
    function pickRandom(the_array) {
      var the_choice = the_array[Math.floor(Math.random() * the_array.length)];
      return the_choice;
    }
    
    function checkForFour(the_array) {
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
  }]
});