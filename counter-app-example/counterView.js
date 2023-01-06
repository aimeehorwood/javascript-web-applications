class CounterView {
  constructor(model) {
    this.model = model;

    const incrementButtonEl = document.querySelector('#increment-btn');
    const decreaseButtonEl = document.querySelector('#decrease-btn');
    
    incrementButtonEl.addEventListener('click', () => {
      // Increment on the model, then refresh the view
      this.model.increment();
       this.display();
    });

    
   decreaseButtonEl.addEventListener('click', () => {
      // decrease on the model, then refresh the view
      this.model.decrease();
       this.display();
    });
  }

  display() {
    document.querySelector('#counter').textContent = this.model.getCounter();
  }
}

module.exports = CounterView;