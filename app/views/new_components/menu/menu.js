let instance = null;
let $this = null;

class MenuClass {
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

    _switchingMenu() {
        $('.menu__title').on('click', '.menu__title--element', (evt) => {
            evt.preventDefault();
            const $_this = $(evt.currentTarget);
            const index = $_this.closest('.menu__title').find('.menu__title--element').index($_this);
            const sizeW = ($_this.closest('.menu__title').find('.menu__title--element').length + 1) * $_this.width();

            $_this.closest('.menu').find('.menu__content.active').removeClass('active');

            if($_this.hasClass('js-close-menu')){
                $_this.closest('.menu').removeClass('open');
                $_this.closest('.menu__title').css('width', '');
            }else{
                $_this.closest('.menu').addClass('open');
            $_this.closest('.menu').find('.menu__content').eq(index).addClass('active');
            $_this.closest('.menu__title').css('width', sizeW);
            }
        });
    }
}

export const menuInstance = new MenuClass();
