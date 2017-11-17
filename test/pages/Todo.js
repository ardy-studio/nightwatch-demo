/**
 * Created by Ardy Chen on 11/14/2017.
 */
var commands = {
  addTodoByList: function(todoInputList) {
    var todoPage = this.api.page.Todo();
    var todoToolsSection = todoPage.section.todoTools;
    todoInputList.map((todoInput) => {
      return todoToolsSection.clearValue('@todoInput')
        .setValue('@todoInput', todoInput)
        .click('@addButton')
    });
  },
  validateTodoList: function(todoInputList) {
    var browser = this.api;

    todoInputList.map((todoInput, index) => {
      let i = index + 1;
      browser.assert.containsText('#todoList>li:nth-child('+ i +')', todoInput);
    });
  }
}

module.exports = {
  url: 'http://localhost:3000/',
  commands: [commands],
  sections: {
    todoTools: {
      selector: '#todoCreator',
      elements: {
        todoInput: {
          selector: 'input#todoInput'
        },
        addButton: {
          selector: 'button#addTodoBtn'
        },
        reverseButton: {
          selector: 'button#reverseTodoBtn'
        }
      }
    }
  }

};