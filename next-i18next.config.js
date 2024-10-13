/** @type {import('next-i18next').UserConfig} */
module.exports = {
    i18n: {
        defaultLocale: 'he',
        locales: ['he', 'en'],
        fallbackLng: {
            default: ['he'],
        },
    },
    /** To avoid issues when deploying to some paas (vercel...) */
    localePath:
        typeof window === 'undefined'
            ? require('path').resolve('./public/locales')
            : '/locales',
}