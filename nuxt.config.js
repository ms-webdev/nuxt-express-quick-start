const PurgecssPlugin = require('purgecss-webpack-plugin');
const glob = require('glob-all');
const path = require('path');

module.exports = {
    /*
    ** Modules
     */
    modules: [
        ['bootstrap-vue/nuxt', {css: false}],
    ],
    /*
    ** Headers of the page
    */
    head: {
        title: 'starter',
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'description', name: 'description', content: 'Nuxt.js project'}
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
        ]
    },
    /*
    ** Global CSS
    */
    css: [
        {src: '~/assets/css/main.scss', lang: 'scss'},
        { src: 'font-awesome/scss/font-awesome.scss', lang: 'scss' },
    ],
    /*
    ** Add axios globally
    */
    build: {
        extractCSS: true,
        vendor: ['axios'],

        extend(config, ctx) {

            config.plugins.push(
                new PurgecssPlugin({
                    paths: glob.sync([
                        path.join(__dirname, './pages/**/*.vue'),
                        path.join(__dirname, './layouts/**/*.vue'),
                        path.join(__dirname, './components/**/*.vue')
                    ]),
                    whitelist: ['html', 'body']
                })
            );

            if (ctx.isClient) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/
                });
            }
        }
    }
}
