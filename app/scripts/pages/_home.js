let instance = null;
let $this = null;

class HomeClass {
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
    /* 
-------------------------------------
Click in the circle to see effect
-------------------------------------
 */
    var c = 0;

    const changeState = () => {
      if (c % 2 == 0 && c != 0) {
        night();
      } else {
        day();
      }
      c++;
    };

    const night = () => {
      document.querySelector('.cont_circle').className = "cont_circle cont_circle_noche";
      document.getElementsByTagName('body')[0].style.backgroundColor = "#000";
      document.querySelector('.cont_text').className = "cont_text  cont_text_noche";
    };

    const day = () => {
      document.querySelector('.cont_circle').className = "cont_circle cont_circle_dia";
      document.getElementsByTagName('body')[0].style.backgroundColor = "#f7f7f7";
      document.querySelector('.cont_text').className = "cont_text  cont_text_dia";
    };

    setInterval(changeState, 20000);
  }
}

export const homeInstance = new HomeClass();
