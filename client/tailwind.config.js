/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  darkMode: ['class', '[data-mode="dark"]'],
  theme: {
    extend: {
      fontFamily: {
        sans: ["ui-sans-serif", "system-ui"],
        serif: ["ui-serif", "Georgia"],
        mono: ["ui-monospace", "SFMono-Regular"],
        display: ["Oswald"],
        body: ['"Open Sans"'],
        nunito: ["nunito", "sans-serif"],
      },
    },

    extend: {
      backgroundImage: {
        // "hero-pattern": "url('/images/login wallpaper.webp')",
        // "footer-texture": "url('/img/footer-texture.png')",
      },
      // screens: {
      //   'dark': {'raw': '(prefers-color-scheme: dark)'}
      // },
    },
  },
  plugins: [],
};
