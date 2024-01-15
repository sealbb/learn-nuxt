// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
 
  devtools: { enabled: true },
  plugins: [
    '~/plugins/d3.js',
  ],
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  }, 
  app: {
    head: {
      title: 'ออกแบบอย่างไร',
      meta:[
        { name: 'description',content:'ออกแบบอย่างไร' },
      ],
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  },
})
