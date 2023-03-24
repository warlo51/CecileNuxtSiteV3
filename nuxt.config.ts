// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss','@nuxtjs/sanity', 'nuxt-icon'],
    sanity: {
        projectId: `${process.env.VUE_APP_PROJECTID}`,
        apiVersion: '2023-03-22',
        dataset:`${process.env.VUE_APP_DATASET}`,
        useCdn:false
    },
})
