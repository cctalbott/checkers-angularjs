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
    });
    
    it('`board` object should have `rows` array with 8 items', function() {
      expect(ctrl.board.rows).not.toBe(null);
      expect(ctrl.board.rows.length).toBe(8);
    });
    
    it('should create a `checker_colors` array with 3 colors, red, black and empty', function() {
      expect(ctrl.board.checker_colors).not.toBe(null);
      expect(ctrl.board.checker_colors.length).toBe(3);
      expect(ctrl.board.checker_colors).toContain("red");
      expect(ctrl.board.checker_colors).toContain("black");
      expect(ctrl.board.checker_colors).toContain("empty");
    });
    
    it('should create a `the_checkers` array with 8 sub arrays with 8 items each populated from `checker_colors`', function() {
      expect(ctrl.board.the_checkers).not.toBe(null);
      expect(ctrl.board.the_checkers.length).toBe(8);
      expect(ctrl.board.the_checkers[0].length).toBe(8);
      expect(ctrl.board.the_checkers[0][0]).toMatch("red|black|empty");
    });
    
    it('should create a `wins` array to be populated depending on `the_checkers` array if 4 in a row exists', function() {
      expect(ctrl.board.wins).not.toBe(null);
    });
  });
});