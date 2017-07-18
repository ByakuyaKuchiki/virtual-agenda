import { dashboardInstance } from './pages/dashboard.js';
import { introInstance } from './pages/intro.js';
import { cardInstance } from '../views/_components/cards/card.js';
import { registerInstance } from '../views/_components/authentification/register.js';
import { uiControlInstance } from './utilities/ui-control.js';


import {menuInstance} from '../views/new_components/menu/menu.js';
import {showCaseInstance} from '../views/new_components/cards/show-case.js';
export class Main {

  constructor() {
    // dashboardInstance._call();
    // cardInstance._call();
    uiControlInstance._printing();

    if ($('body').hasClass('intro')) {
      introInstance._call();
    }

    if ($('body').hasClass('dashboard')) {
      dashboardInstance._call();
      cardInstance._call();
      registerInstance._call();
    }

    if($('body').hasClass('dashboard--2')){
      console.log('test');
      showCaseInstance._cardCall();
    }

    menuInstance._switchingMenu();
  }
}


$(document).ready(() => new Main());


  
