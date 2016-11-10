'use strict';

describe('checkers', function() {
  
  // Load the module that contains the `checkers` component before each test
  beforeEach(module('checkers'));
  
  // Test factories
  describe('Checker', function() {
    it('can get an instance of `Checker` factory', inject(function(Checker) {
      expect(Checker).toBeDefined();
      expect(Checker.colors).not.toBe(null);
      expect(Checker.colors.length).toBe(3);
      expect(Checker.colors).toContain("red");
      expect(Checker.colors).toContain("black");
      expect(Checker.colors).toContain("empty");
    }));
  });
  
  describe('Checkers', function() {
    it('can get an instance of `Checkers` factory', inject(function(Checkers) {
      expect(Checkers).toBeDefined();
    }));
  });
  
  describe('Board', function() {
    it('can get an instance of `Board` factory', inject(function(Board) {
      expect(Board).toBeDefined();
      expect(Board.rows).not.toBe(null);
      expect(Board.cols).not.toBe(null);
      expect(Board.checkers).not.toBe(null);
      expect(Board.rows.length).toBe(8);
      expect(Board.cols.length).toBe(8);
    }));
  });
  
  describe('CheckWins', function() {
    it('can get an instance of `CheckWins` factory', inject(function(CheckWins) {
      expect(CheckWins).toBeDefined();
      expect(CheckWins.wins).toBeDefined();
    }));
  });
  
  // Test the controller 
  describe('CheckersController', function(){
    var ctrl;
    
    beforeEach(inject(function($componentController) {
      ctrl = $componentController('checkers');
    }));
    
    it('should have a `CheckersController`', function() {
      expect(ctrl).not.toBe(null);
    });

    it('should create a `board` object', function() {
      expect(ctrl.board).not.toBe(null);
      expect(ctrl.board.rows).not.toBe(null);
      expect(ctrl.board.rows.length).toBe(8);
      expect(ctrl.board.checkers).not.toBe(null);
      expect(ctrl.board.checkers.length).toBe(8);
      expect(ctrl.board.checkers[0].length).toBe(8);
      expect(ctrl.board.checkers[0][0]).toMatch("red|black|empty");
    });
    
    it('should create a `wins` object', function() {
      expect(ctrl.board.wins).not.toBe(null);
    });
  });
});