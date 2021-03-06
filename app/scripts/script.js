import { dashboardInstance } from './pages/dashboard.js';
import { introInstance } from './pages/intro.js';
import { cardInstance } from '../views/_components/cards/card.js';
import { registerInstance } from '../views/_components/authentification/register.js';
import { uiControlInstance } from './utilities/ui-control.js';

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

  }
}


$(document).ready(() => new Main());


  
