module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                beige: '#f8c291',
                primary: {
                    dark: '#0a3d62',
                    hover: '#6a89cc',
                    light: '#82ccdd',
                },
                icon: {
                    html: '#e34c26',
                    css: '#264de4',
                    js: '#f0db4f',
                    vue: '#42b883',
                    node: '#3c873a',
                    linkedIn: '#0e76a8',
                    gitHub: '#211F1F',
                },
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [require('@tailwindcss/typography')],
}
