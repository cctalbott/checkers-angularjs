'use strict';

describe('checkers', function() {
  
  // Load the module that contains the `checkers` component before each test
  beforeEach(module('checkers'));
  
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
});