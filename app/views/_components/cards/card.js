let instance = null;
let $this = null;

class CardClass {
  constructor() {
    this.value = '';
    //- needed values

    if (!instance) {
      instance = this;
      $this = this;
    }

    return instance;
  }

  _call() {
    $('.card').on('mouseenter', (evt) => {
      evt.preventDefault();
      $(evt.currentTarget).toggleClass('js-trigger');
    });
    $('.card').on('mouseleave', (evt) => {
      evt.preventDefault();
       $(evt.currentTarget).toggleClass('js-trigger');
    });
  }
}

export const cardInstance = new CardClass();
