// spec.js
describe('Protractor Demo App', function() {
    it('should have a title', function() {
      browser.get('http://juliemr.github.io/protractor-demo/');
      
      expect(browser.getTitle()).toEqual('Super Calculator');
      
      browser.get('https://www.angularjs.org');
      
      element(by.model('yourName')).sendKeys('Here');

      element(by.binding("yourName")).getText().then(function(el) {
        console.log(el);   
      })


    });
  });