import { dashboardInstance } from './pages/dashboard.js';


export class Main {

  constructor() {
    dashboardInstance._call();
  }
}


$(document).ready(() => new Main());



