let instance = null;
let $this = null;

class MasonryClass {
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

  //- start masonry grid
  _startMasonry(pageOption) {
    $(pageOption.itemSelector).masonry(pageOption.options);
    $(pageOption.itemSelector).find('img').each((i, elt) => {
      if (!$(elt).prop('complete')) {
        $(elt).on('load', (evt) => {
          $(pageOption.itemSelector).masonry(pageOption.options);
        });
      }
    });
  }

  //- refresh masonry and add new Items
  _addNewItems(masonryGrid, newItems) {
    $(masonryGrid).append(newItems).masonry('reloadItems');
  }
}

export const masonryInstance = new MasonryClass();
