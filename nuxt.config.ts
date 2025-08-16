export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE || "http://127.0.0.1:8000/api",
    },
  },
  css: ["../assets/styles.css"],
  compatibilityDate: "2025-08-16",
});
