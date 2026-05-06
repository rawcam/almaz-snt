module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],  // основной шрифт (бывший 'Onest')
      },
      colors: {
        almond: '#fafbf8',
        dark: '#1e1e1e',
        'green-deep': '#1b4d3e',
        gold: '#b89b5e',
        'gold-light': '#e9dbbd',
      },
    },
  },
  plugins: [],
}
