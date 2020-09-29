// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'プロ研216',
  plugins: [
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
  ]
}
