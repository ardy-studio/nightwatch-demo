/**
 * Created by Ardy Chen on 11/14/2017.
 */
module.exports = {
  url: 'http://localhost:3000/',
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