
import { heroSliderInstance } from '../views/_components/slider/_hero-slider';

import { homeInstance } from './pages/_home';

export class Main {

  constructor() {
    if ($('body').hasClass('home-page')) {
      homeInstance._call();
    }
  }
}


$(document).ready(() => new Main());


  
