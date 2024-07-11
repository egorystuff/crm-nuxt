// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: false },
  modules: [
    "@nuxt/image",
    "@nuxtjs/tailwindcss",
    "shadcn-nuxt",
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          Lato: {
            wght: [300, 400, 700],
            ital: [300],
          },
        },
      },
    ],
    "@nuxtjs/google-fonts",
    "@nuxt/icon",
  ],
  shadcn: {
    prefix: "Ui",
    componentDir: "./components/ui",
  },
  icon: {
    customCollections: [
      {
        prefix: "my-icon",
        dir: "./assets/my-icons",
      },
    ],
  },
});
