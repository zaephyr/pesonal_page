import Mode from 'frontmatter-markdown-loader/mode'
export default {
    // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
    ssr: false,

    // Target (https://go.nuxtjs.dev/config-target)
    target: 'static',

    // Global page headers (https://go.nuxtjs.dev/config-head)
    head: {
        title: 'personal_page',
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
            },
            { hid: 'description', name: 'description', content: '' },
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },

    // Global CSS (https://go.nuxtjs.dev/config-css)
    css: ['~/assets/main.scss'],

    pageTransition: {
        name: 'page',
    },

    layoutTransition: {
        name: 'slide_right',
        mode: 'out-in',
    },

    // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
    plugins: [],

    // Auto import components (https://go.nuxtjs.dev/config-components)
    components: true,

    // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
    buildModules: [
        // https://go.nuxtjs.dev/tailwindcss
        '@nuxtjs/tailwindcss',
        [
            '@nuxtjs/fontawesome',
            {
                component: 'fa',
                icons: {
                    solid: true,
                    brands: true,
                },

                suffix: true,
            },
        ],
    ],

    // Modules (https://go.nuxtjs.dev/config-modules)
    modules: [
        // https://go.nuxtjs.dev/pwa
        '@nuxtjs/pwa',
        // https://go.nuxtjs.dev/content
        '@nuxt/content',
        ['@nuxtjs/axios', { baseURL: '/' }],
        ['vue-scrollto/nuxt', { duration: 600, easing: 'ease-out' }],
        '@nuxtjs/cloudinary',
    ],

    // Content module configuration (https://go.nuxtjs.dev/config-content)

    env: {
        mailGun_api: process.env.MAILGUN_API,
        mailGun_url: process.env.MAILGUN_BASE_URL,
        mailGun_domain: process.env.MAILGUN_DOMAIN,
        myEmail: process.env.MY_EMAIL,
    },

    cloudinary: {
        cloudName: process.env.CLOUDNAME,
        apiKey: process.env.API_KEY,
        apiSecret: process.env.API_SECRET,
        useComponent: true,
    },

    content: {
        markdown: {
            prism: {
                theme: 'prism-themes/themes/prism-material-oceanic.css',
            },
        },

        // Build Configuration (https://go.nuxtjs.dev/config-build)
        build: {
            extend(config, ctx) {
                config.module.rules.push({
                    test: /\.md$/,
                    loader: 'frontmatter-markdown-loader',
                    options: {
                        mode: [Mode.VUE_COMPONENT],
                    },
                })
            },
        },
    },
}
