import { masonryInstance } from '../vendors/masonry.js';

let instance = null;
let $this = null;

class DashboardClass {
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




    const homeMasonryOptions = {
      itemSelector: '.card-container',
      options: {
        itemSelector: '.card',
        gutter: 30,
        columnWidth: 350,
        // fitWidth: true,
        transitionDuration: 0
      }
    };

    masonryInstance._startMasonry(homeMasonryOptions);


    var html = '';
    [
      {
        label: 'Data',
        items: [
          { label: 'Dashboard', desktop: 'desktop-dashboard', icon: 'fa fa-desktop', color: '#6EC580', badge: 5 },
          { label: 'Live Stream', desktop: 'desktop-testui', icon: 'fa fa-commenting', color: '#63A9DD', badge: 21 },
          { label: 'Alarms', desktop: 'desktop-testui', icon: 'fa fa-bell', color: '#DE6262', badge: 3 },
          { label: 'Charts', desktop: 'desktop-testui', icon: 'fa fa-area-chart', color: '#9C62DB' },
          { label: 'Logs', desktop: 'desktop-testui', icon: 'fa fa-archive', color: '#DCA761' }
        ]
      },
      {
        label: 'Tools',
        items: [
          { label: 'Planner', desktop: 'desktop-testui', icon: 'fa fa-calendar-check-o', color: '#71A69E' },
          { label: 'Cloud', desktop: 'desktop-testui', icon: 'fa fa-cloud', color: '#636FDF' },
          { label: 'Maintenance', desktop: 'desktop-testui', icon: 'fa fa-heartbeat', color: '#A76F72' },
          { label: 'Terminal', desktop: 'desktop-testui', icon: 'fa fa-terminal', color: '#737270' }
        ]
      },
      {
        label: 'Settings',
        items: [
          { label: 'System', desktop: 'desktop-testui', icon: 'fa fa-cog', color: 'white' },
          { label: 'Devices', desktop: 'desktop-testui', icon: 'fa fa-database', color: 'white' },
          { label: 'Users', desktop: 'desktop-testui', icon: 'fa fa-users', color: 'white' },
          { label: 'Backup', desktop: 'desktop-testui', icon: 'fa fa-history', color: 'white' },
          { label: 'Info', desktop: 'desktop-testui', icon: 'fa fa-question', color: 'white' }
        ]
      }
    ].forEach(function (section) {
      html += '<div class="aside-section"><h2>' + section.label + '</h2><ul class="aside-menu">';
      section.items.forEach(function (item) {
        html += '<li class="aside-menu-item" data-desktop="' + item.desktop + '"><i class="aside-menu-icon ' + item.icon + '" style="color: ' + item.color + '"></i><span class="aside-menu-label">' + item.label + '</span>' + (item.badge ? '<span class="aside-menu-badge" style="background: ' + item.color + '">' + item.badge + '</span>' : '') + '</li>';
      });
      html += '</ul></div>';
    });
    $('#aside-menu-container').append(html);
    $('.aside-menu-item').on('click', function () {
      $('.aside-menu-item-active').removeClass('aside-menu-item-active');
      $(this).addClass('aside-menu-item-active');
      $('.desktop').addClass('hide');
      $('#' + $(this).data('desktop')).removeClass('hide');
      $('#' + $(this).data('desktop')).show();
    });
    $('.aside-menu-item[data-desktop="desktop-dashboard"]').trigger('click');

    var updateTime = function () {
      var date = new Date();
      var time = date.toLocaleString(navigator.language, { year: 'numeric', month: '2-digit', day: '2-digit' }) + '<br>' + date.toLocaleString(navigator.language, { hour: '2-digit', minute: '2-digit' });
      var element = document.getElementById('system-time');
      element.dateTime = date.toISOString();
      element.innerHTML = time;
    };
    updateTime();
    setInterval(updateTime, 1000);

    $('.gridster').gridster({
      widget_selector: '.gridster-item',
      widget_margins: [8, 8],
      widget_base_dimensions: [140, 140],
      resize: {
        enabled: true
      }
    });
  }
}

export const dashboardInstance = new DashboardClass();
