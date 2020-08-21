module.exports = {
  purge: {
    content: [
      './**/*.js',
      './**/*.eleventy.js',
      './**/*.html',
      './**/*.njk',
    ],
  },
  theme: {
    extend: {
      fontFamily: {
        display: ['Staatliches'],
        body: ['Righteous']
      },
      colors: {
        primary: '#3aafa9',
        secondary: '#1f2226',
        prime_text: '#feffff',
        secondary_text: '#bacfc1'
      }
    }
  },
  variants: {},
  plugins: [],
}