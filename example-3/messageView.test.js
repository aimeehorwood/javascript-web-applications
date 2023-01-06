/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const MessageView = require('./messageView');

describe('MessageView', () => {
  it('clicks the button and displays the message', () => {
    //Arrange
    document.body.innerHTML = fs.readFileSync('./index.html');

    const view = new MessageView();

    //Act
    const buttonEl = document.querySelector('#show-message-button');
    const inputEl = document.querySelector('#message-input');

    inputEl.value = 'This is a test message';
    
    buttonEl.click();

    //Assert
    expect(document.querySelector('#message')).not.toBeNull();
    expect(document.querySelector('#message').innerText).toEqual('This is a test message');
    
  });

  it('hides the message', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    const view = new MessageView();

    //Add then hide message

    const buttonEl = document.querySelector('#show-message-button');
    buttonEl.click();
    const RemoveButtonEl = document.querySelector('#hide-message-button');
    RemoveButtonEl.click();

    expect(document.querySelector('#message')).toBeNull();
  });
});