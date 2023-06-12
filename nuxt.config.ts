// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss','@nuxtjs/sanity', 'nuxt-icon', '@pinia/nuxt'],
    sanity: {
        projectId: `${process.env.VUE_APP_PROJECTID}`,
        apiVersion: '2023-03-22',
        dataset:`${process.env.VUE_APP_DATASET}`,
        useCdn:false
    },
    pinia: {
        autoImports: [
            // automatically imports `defineStore`
            'defineStore', // import { defineStore } from 'pinia'
            ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
        ],
    },
})
