// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

class TailwindExtractor {
  static extract(content) {
    return content.match(/[A-z0-9-:\/]+/g) || []
  }
}

module.exports = {
  siteName: 'Gridsome',
  plugins: [
    {
      use: 'gridsome-plugin-tailwindcss',
      options: {
        config: './src/tailwind.js'
      }
    },
    {
      use: 'gridsome-plugin-purgecss',
      options: {
        content: [
            './src/**/*.vue',
            './src/**/*.js',
            './src/**/*.jsx',
            './src/**/*.md'
          ],
          extractor: TailwindExtractor,
          extensions: ['vue', 'js', 'jsx', 'md']
      }
    }
  ]
}
