'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('checkers', function() {
  beforeEach(function() {
    browser.get('/#/');
  });
  
  it('should have a title', function() {
    expect(browser.getTitle()).toEqual('Checkers AngularJS App');
  });
  
  it('should have a h1', function() {
    expect(element(by.css('h1')).getText()).toEqual('Randomly Arranged Checkers on an 8x8 Board');
  });
  
  it('should have an 8x8 table with cell text either red, black or empty', function() {
    expect(element(by.css('table'))).not.toBe(null);
    var table_cells = element.all(by.css('td'));
    table_cells.filter(function(tc) {
      expect(tc.getText()).toMatch("red|black|empty");
    });
  });
});
