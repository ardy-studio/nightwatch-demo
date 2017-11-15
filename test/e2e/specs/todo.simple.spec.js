/**
 * Created by Ardy Chen on 11/13/2017.
 */
'use strict'

let todoInputList = [
  '123',
  '456',
  '789'
];

const addTodoByList = (browser, todoInputList) => {
  todoInputList.map((todoInput) => {
    browser
      .clearValue('#todoInput')
      .setValue('#todoInput', todoInput)
      .click('#addTodoBtn')
      .pause(1000)
  });
}

const validateTodoList = (browser, todoInputList) => {
  todoInputList.map((todoInput, index) => {
    let i = index + 1;
    browser
      .assert.containsText('#todoList>li:nth-child('+ i +')', todoInput);
  });
}

module.exports = {
  'Simple way to test Todo': function (browser) {
    browser
      .url('http://localhost:3000/')
      .waitForElementPresent('body', 2000)
      .assert.title('Nightwatch Demo')
      .waitForElementPresent('#todoInput', 1000)
      .waitForElementPresent('#addTodoBtn', 1000);

    addTodoByList(browser, todoInputList);
    validateTodoList(browser, todoInputList);

    browser
      .click("#reverseTodoBtn")
      .pause(1000);

    validateTodoList(browser, todoInputList.reverse());

    browser.end();
  },

}
