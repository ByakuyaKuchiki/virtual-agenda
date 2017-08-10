let instance = null;
let $this = null;

class DashItemClass {
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
    //jQuery time

    //add '.ready' to form when user focuses on it
    $(".single-input-form__input").focus((evt) => {
      $(evt.currentTarget)
        .closest('.single-input-form__form')
        .addClass("ready");
    }).blur((evt) => {
      if ($(evt.currentTarget).val() == "")
        $(evt.currentTarget)
        .closest('.single-input-form__form')
        .removeClass("ready");
    }).keyup((evt) => {
      //this adds .active class only if the input has some text
      $(evt.currentTarget)
        .closest('.single-input-form__form')
        .find(".submit-icon")
        .toggleClass("active", $(evt.currentTarget).val().length > 0);
    });


    //on form submit remove .ready and add .loading to the form
    $('.single-input-form__form').submit((evt) => {
      $(evt.currentTarget)
        .removeClass("ready")
        .addClass("loading");
      let $_elt = $(evt.currentTarget);
      //finish loading in 3s
      setTimeout(() => {
        $_elt
          .removeClass("loading")
          .addClass("complete");
      }, 3000);
      //prevent default form submisson
      return false;
    });

    //reset/refresh functionality
    $(".reset-icon").click((evt) => {
      $(evt.currentTarget)
        .closest(".single-input-form__form")
        .removeClass("complete")
        .find('.single-input-form__input')
        .val('');
    });
  }
}

export const dashItemInstance = new DashItemClass();
