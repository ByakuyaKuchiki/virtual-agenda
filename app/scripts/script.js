import { dashboardInstance } from './pages/dashboard.js';
import { introInstance } from './pages/intro.js';
import { cardInstance } from '../views/_components/cards/card.js';


export class Main {

  constructor() {
    // dashboardInstance._call();
    // cardInstance._call();

    if ($('body').hasClass('intro')) {
      introInstance._call();
    }

    if ($('body').hasClass('dashboard')) {
      dashboardInstance._call();
      cardInstance._call();
    }

  }
}


$(document).ready(() => new Main());



