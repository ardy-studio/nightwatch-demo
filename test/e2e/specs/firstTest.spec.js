/**
 * Created by Ardy Chen on 9/30/2017.
 */
'use strict'

module.exports = {
  'My first test': function (browser) {
    // browser
    //   .url('http://localhost:3000/')
    //   .waitForElementPresent('body', 2000)
    //   .pause(1000)
    //   .assert.title('FE Test')
    //   .pause(2000)
    //   .assert.count('input', 2)
    //   .assert.count('button', 1)
    //   .setValue('@identifier', 'tester001@selfcare.com')
    //   .setValue('#password', 'usera')
    //   .click('#submitBtn')
    //   .pause(5000)
    //   .assert.containsText('#clickOutput', 'tester001@selfcare.com')
    //   .end();


    // PO Element test
    // var loginForm = browser.page.LoginForm();
    // loginForm.navigate()
    //
    //   .waitForElementPresent('body', 2000)
    //     .assert.title('FE Test')
    //     .assert.count('input', 2)
    //     .assert.count('button', 1)
    //     .setValue('@identifier', 'tester001@selfcare.com')
    //     .setValue('#password', 'usera')
    //     .click('#submitBtn')
    // .assert.containsText('#clickOutput', 'tester001@selfcare.com')
    //
    // browser.end();



    // PO Section test
    var loginForm = browser.page.LoginForm();
    loginForm
      .navigate()
      .expect.section('@loginForm').to.be.visible;

    var loginFormSection = loginForm.section.loginForm;

    loginFormSection.expect.element('@identifier').to.be.visible;
    loginFormSection
      .setValue('@identifier', 'tester001@selfcare.com')
      .setValue('#password', 'usera')
      .click('#submitBtn')
      .assert.containsText('#clickOutput', 'tester001@selfcare.com');

    browser.end();

  },
}
