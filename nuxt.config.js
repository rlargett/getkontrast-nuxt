export default {
    mode: 'universal',
    /*
     ** Headers of the page
     */
    head: {
        title: process.env.npm_package_name || '',
        meta: [
            {
                charset: 'utf-8',
            },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
            },
            {
                name: 'google-site-verification',
                content: '0S-5aekwT9PTv7yzEuGvIvHcgGRUNkqHcaZDE5sZbxY',
            }
        ],
        link: [
            { rel: 'apple-touch-icon-precomposed', size: '144x144', href: '/apple-touch-icon-144x144.png' },
            { rel: 'apple-touch-icon-precomposed', size: '114x114', href: '/apple-touch-icon-114x114.png' },
            { rel: 'apple-touch-icon-precomposed', size: '72x72', href: '/apple-touch-icon-72x72.png' },
            { rel: 'apple-touch-icon-precomposed', href: '/apple-touch-icon-57x57.png' },
            { rel: 'icon', type: 'image/x-icon', href: '/favicon-32x32.png' },
            { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/hack-font@3/build/web/hack-subset.css' },
        ],
    },
    /*
     ** Customize the progress-bar color
     */
    loading: { color: '#fff' },
    /*
     ** Global CSS
     */
    css: [],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: [],
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [
        // Doc: https://github.com/nuxt-community/eslint-module
        '@nuxtjs/eslint-module',
        // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
        '@nuxtjs/tailwindcss',
    ],
    /*
     ** Nuxt.js modules
     */
    modules: [
        // Doc: https://axios.nuxtjs.org/usage
        '@nuxtjs/axios',
    ],
    /*
     ** Axios module configuration
     ** See https://axios.nuxtjs.org/options
     */
    axios: {},
    /*
     ** Build configuration
     */
    build: {
        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {},
    },
}
