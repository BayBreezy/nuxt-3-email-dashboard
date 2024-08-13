// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  typescript: { shim: false },
  modules: ["@davestewart/nuxt-scrollbar", "nuxt-icon", "@nuxtjs/device"],
  css: ["~/assets/css/main.css"],

  app: {
    head: {
      title: "Nuxt 3 - Email Dashboard",
      link: [
        { rel: "stylesheet", href: "https://rsms.me/inter/inter.css" },
        { rel: "preconnect", href: "https://rsms.me/" },
      ],
    },
  },

  compatibilityDate: "2024-08-12",
});