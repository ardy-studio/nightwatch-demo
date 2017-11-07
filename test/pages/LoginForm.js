/**
 * Created by Ardy Chen on 11/7/2017.
 */
module.exports = {
  url: 'http://localhost:3000/',
  sections: {
      loginForm: {
        selector: '#loginForm',
        elements: {
          identifier: {
            selector: 'input#identifier'
          },
          password: {
            selector: 'input#password'
          }
        }
    }
  }

};