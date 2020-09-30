<!--HTML-->
<template>
<Layout>
    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <h1>Welcome to Proken216!!</h1>

    <p>
      私たちはプロ研216です。「プログラミングを学びたい学生のためのコミュニティ」として活動しています。ハッカソンへの出場や、LT会の開催などを主にやっています。
    </p>

    <div>
      <h1>News</h1>
        <NewsCard
            v-for="news in $page.allNewsPost.edges"
            :key="news.node.id"
            :data="news.node" />
    </div>

    <div>
      <h1>Products</h1>
      <g-link 
        v-for="product in $page.allProductPost.edges"
        :key="product.node.id" 
        :to="product.node.path">
          <h2>{{ product.node.title }}</h2>
      </g-link>
    </div>

</Layout>
</template>

<page-query>
    query{
        allNewsPost{
            edges{
                node{
                    id
                    title
                    path
                }
            }
        },
        allProductPost{
            edges{
                node{
                    id
                    title
                    path
                }
            }
        }
    }
</page-query>

<!--JavaScript-->

<script>
import NewsCard from '@/components/NewsCard.vue'

export default {
    components: {
        NewsCard,
    },
    metaInfo: {
        title: 'Hello, world!'
    }
}
</script>

<!--CSS-->

<style>
</style>
