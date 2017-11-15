/**
 * Created by Ardy Chen on 11/13/2017.
 */
'use strict'

let todoInputList = [
  '123',
  '456',
  '789'
];

const addTodoByList = (todoToolsSection, todoInputList) => {
  todoInputList.map((todoInput) => {
    todoToolsSection
      .clearValue('@todoInput')
      .setValue('@todoInput', todoInput)
      .click('@addButton')
  });
}

const validateTodoList = (browser, todoInputList) => {
  todoInputList.map((todoInput, index) => {
    let i = index + 1;
    browser.assert.containsText('#todoList>li:nth-child('+ i +')', todoInput);
  });
}

module.exports = {
  'Test Todo by Page Object': function (browser) {
    var todoPage = browser.page.Todo();
    var todoToolsSection = todoPage.section.todoTools;

    browser
      .url('http://localhost:3000/')
      .waitForElementPresent('body', 2000)
      .assert.title('Nightwatch Demo')

    // todoPage.navigate();
    todoPage.expect.section('@todoTools').to.be.visible;

    todoToolsSection.expect.element('@todoInput').to.be.visible;
    todoToolsSection.expect.element('@addButton').to.be.visible;
    todoToolsSection.expect.element('@reverseButton').to.be.visible;

    addTodoByList(todoToolsSection, todoInputList);
    validateTodoList(browser, todoInputList);

    todoToolsSection.click('@reverseButton');

    browser.pause(1000);

    validateTodoList(browser, todoInputList.reverse());

    browser.end();
  },

}
