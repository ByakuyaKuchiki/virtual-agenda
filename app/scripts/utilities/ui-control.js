let instance = null;
let $this = null;

class UiControlClass {
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

  _loadDynamicFiles(filePath, type){
    switch (type) {
      case 'JS':
        $('body').append('<script type="text/javascript" src="' + filePath + '">');
        break;
      case 'CSS':
        $('head').append('link rel="stylesheet" type="text/css" href="' + filePath + '">');
        break;
      default:
        console.log('file type: ' + type + ' is unknown');
        break;
    }
  }

  _printing() {
    
    $this._loadDynamicFiles('//cdnjs.cloudflare.com/ajax/libs/html2canvas/0.4.1/html2canvas.min.js', 'JS');

    //-- create or overwrite print functions
    $.fn.beforeprint = function (callback) {
      return $(this).each(function () {
        if (!jQuery.isWindow(this))
          return;
        if (this.onbeforeprint !== undefined)
          $(this).on('beforeprint', callback);
        else if (this.matchMedia)
          this.matchMedia('print').addListener(callback);
      });
    };
    $.fn.afterprint = function (callback) {
      return $(this).each(function () {
        if (!jQuery.isWindow(this))
          return;
        if (this.onafterprint !== undefined)
          $(this).on('afterprint', callback);
        else if (this.matchMedia)
          $(this).one('mouseover', callback);
      });
    };

    //-- generating printscreen
    const generateCanvas = () => {
      html2canvas(document.body, {
        onrendered: function (canvas) {
          $('body').append('<img class="print-img" style="max-width:800px;" src="' + canvas.toDataURL() + '" style="max-width: 800px"/>');
        }
      });
    };

    //--callback
    const beforeprint = () => {
      generateCanvas();
      $('body>:not(img.print-img)').hide();
    };

    const afterprint = () => {
      $('body>:not(img.print-img)').show();
      $('img.print-img').remove();
    };
    

    //-- Printing detect
    if ('matchMedia' in window) {
      window.matchMedia('print').addListener(function (media) {
        if (media.matches) {
          beforeprint();
        } else {          // Fires immediately, so wait for the first mouse movement
          $(document).one('mouseover', afterprint);
        }
      });
    } else {
      // IE and Firefox fire before/after events
      $(window).on('beforeprint', beforeprint);
      $(window).on('afterprint', afterprint);
    }

  }
}

export const uiControlInstance = new UiControlClass();
