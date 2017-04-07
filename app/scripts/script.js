import { dashboardInstance } from './pages/dashboard.js';
import { cardInstance } from '../views/_components/cards/card.js';


export class Main {

  constructor() {
    dashboardInstance._call();
    cardInstance._call();
  }
}


$(document).ready(() => new Main());



