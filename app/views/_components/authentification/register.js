let instance = null;
let $this = null;

class RegisterClass {
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
    $('.email').on("change keyup paste",
       (evt) => {
        if ($(evt.currentTarget).val()) {
          $('.icon-paper-plane').addClass("next");
        } else {
          $('.icon-paper-plane').removeClass("next");
        }
      }
    );

    $('.next-button').hover(
      (evt) => {
        $(evt.currentTarget).css('cursor', 'pointer');
      }
    );

    $('.next-button.email').click(
      (evt) => {
        console.log("Something");
        $('.email-section').addClass("fold-up");
        $('.password-section').removeClass("folded");
      }
    );

    $('.password').on("change keyup paste",
      (evt) => {
        if ($(evt.currentTarget).val()) {
          $('.icon-lock').addClass("next");
        } else {
          $('.icon-lock').removeClass("next");
        }
      }
    );

    $('.next-button').hover(
      (evt) => {
        $(evt.currentTarget).css('cursor', 'pointer');
      }
    );

    $('.next-button.password').click(
      (evt) => {
        $('.password-section').addClass("fold-up");
        $('.repeat-password-section').removeClass("folded");
      }
    );

    $('.repeat-password').on("change keyup paste",
      (evt) => {
        if ($(evt.currentTarget).val()) {
          $('.icon-repeat-lock').addClass("next");
        } else {
          $('.icon-repeat-lock').removeClass("next");
        }
      }
    );

    $('.next-button.repeat-password').click(
      (evt) => {
        $('.repeat-password-section').addClass("fold-up");
        $('.success').css("marginTop", 0);
        //-- register complete or not
        setTimeout(() => {
          $('.register-container').fadeOut(2000);
        }, 1000);
      }
    );
  }
}

export const registerInstance = new RegisterClass();
