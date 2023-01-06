class MessageView {
  constructor() {
    this.buttonEl = document.querySelector('#show-message-button');
    this.RemoveButtonEl = document.querySelector('#hide-message-button');

    this.buttonEl.addEventListener('click', () => {
       this.displayMessage();
    });

    this.RemoveButtonEl.addEventListener('click', () => {
      this.removeMessage();
   });


  }

  displayMessage() {
    //console.log('Thanks for clicking me!');
    
    const message = document.querySelector('#message-input').value;

    const messageElement = document.createElement('div');
    messageElement.id = 'message';
    messageElement.innerText = message;

    document.querySelector('#message-input').value = '';
    
    document.querySelector('#main-container').append(messageElement);
  }

  removeMessage(){
    document.querySelector('#message').remove();
  }
    
}


module.exports = MessageView;

