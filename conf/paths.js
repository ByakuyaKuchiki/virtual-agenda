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
        src: '/svg/',
    },
    fonts: {
        src: '/fonts/',
        dest: '/styles/fonts/'
    }
}