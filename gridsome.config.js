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
    // {
    //   use: '@gridsome/source-filesystem',
    //   options: {
    //     typeName: 'BlogPost',
    //     path: './posts',
    //   }
    // },
    {
      use: '@gridsome/vue-remark',
      options: {
        typeName: 'NewsPost', // 必須。GraphQL上で扱う型定義
        baseDir: './posts/news', // 記事となるmarkdownファイルを置くディレクトリ
        pathPrefix: '/news', // URLになるパス。必須ではない。
        template: './src/templates/NewsPost.vue' // 記事ページのVueコンポーネントファイルの指定
      }
    },
    {
      use: '@gridsome/vue-remark',
      options: {
        typeName: 'ProductPost', // 必須。GraphQL上で扱う型定義
        baseDir: './posts/products', // 記事となるmarkdownファイルを置くディレクトリ
        pathPrefix: '/products', // URLになるパス。必須ではない。
        template: './src/templates/ProductPost.vue' // 記事ページのVueコンポーネントファイルの指定
      }
    }  
    //{
    //  use: 'gridsome-plugin-tailwindcss',
    //  options: {
    //    config: './src/tailwind.js'
    //  }
    //},
    //{
    //  use: 'gridsome-plugin-purgecss',
    //  options: {
    //    content: [
    //      './src/**/*.vue',
    //      './src/**/*.js',
    //      './src/**/*.jsx',
    //      './src/**/*.md'
    //    ],
    //    extractor: TailwindExtractor,
    //    extensions: ['vue', 'js', 'jsx', 'md']
    //  }
    //}
  ]
}
