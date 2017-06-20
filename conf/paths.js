export default{
    origin: './app',
    dest: './build/assets',
    server:{
        LOCAL: 'http://localhost:3000' 
    },
    images: {
        src: '/images/*',
        dest: '/images/'
    },
    icons: {
        name: 'myFont',
        src: '/svg/',
        template: '/svg/_icon.scss',
        dest: '/css/fonts'
    },
    fonts: {
        src: '/fonts/',
        dest: '/styles/fonts/'
    },
    css: {
        src: '/styles/'
    },
    pug: {
        src: '/pug/'
    }
}