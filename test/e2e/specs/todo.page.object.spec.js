/**
 * Created by Ardy Chen on 11/13/2017.
 */
'use strict'

let todoInputList = [
  '123',
  '456',
  '789'
];

module.exports = {
  'Test Todo by Page Object': function (browser) {
    var todoPage = browser.page.Todo();
    var todoToolsSection = todoPage.section.todoTools;

    browser
      .url('http://localhost:3000/')
      .waitForElementPresent('body', 2000)
      .assert.title('Nightwatch Demo')

    todoPage.expect.section('@todoTools').to.be.visible;

    todoToolsSection.expect.element('@todoInput').to.be.visible;
    todoToolsSection.expect.element('@addButton').to.be.visible;
    todoToolsSection.expect.element('@reverseButton').to.be.visible;

    todoPage.addTodoByList(todoInputList);
    todoPage.validateTodoList(todoInputList);

    todoToolsSection.click('@reverseButton');

    browser.pause(1000);

    todoPage.validateTodoList(todoInputList.reverse());

    browser.end();
  },

}
