let instance = null;
let $this = null;

class TemplateClass {
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
    //- run general functions
  }
}

export const templateInstance = new TemplateClass();
