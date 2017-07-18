let instance = null;
let $this = null;

class ShowCaseClass {
    constructor() {
        this.value = '';
        //- needed values

        if (!instance) {
            instance = this;
            $this = this;
        }

        return instance;
    }


    _autoScroll(object, speed) {
        let $_object = object;
        let height = object.height();
        speed = height * parseInt(speed) * 10;
        $_object.animate({
            scrollTop: 0
        }, 100, () => {
            $_object.animate({
                scrollTop: height
            }, speed);
        });
    }
    //-- card
    _cardCall() {
        console.log('card');
        //-- switchState
        $('.sub-command').on('click', '.sub-command__item', (evt) => {
            evt.preventDefault();
            let $_current = $(evt.currentTarget);
            let commands = $_current.closest('.sub-command').find('.sub-command__item');
            let index = commands.index($_current);

            commands.removeClass('active');

            //-- change command
            if ((index + 1) < commands.length) {
                commands.eq(index + 1).addClass('active');
            } else {
                commands.eq(0).addClass('active');
            }
        });


        $('.card-show-case').on('click', '.card-show-case__content__title', (evt) => {
            evt.preventDefault();
            $(evt.currentTarget).removeClass('active');
            $(evt.currentTarget).closest('.card-show-case__content').find('.card-show-case__content__detail').addClass('active');
        });

        $('.card-show-case').on('click', '.card-show-case__content__detail', (evt) => {
            evt.preventDefault();
            $(evt.currentTarget).removeClass('active');
            $(evt.currentTarget).closest('.card-show-case__content').find('.card-show-case__content__title').addClass('active');
        });
    }
}

export const showCaseInstance = new ShowCaseClass();
