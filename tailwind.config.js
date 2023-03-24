module.exports = {
    theme: {
        backgroundColor: theme => ({
            ...theme('colors'),
            'purple': '#a2415e',
        })
    },
    variants: {
        extend: {
            // ...
            textAlign: ['-webkit-center, -webkit-right'],
        }
    }
}
