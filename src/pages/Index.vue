<!--HTML-->
<template>
<Layout>

    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <g-image alt="Example image" src="~/favicon.png" width="135" />

    <h1>Hello, world!</h1>

    <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur excepturi labore tempore expedita, et iste tenetur suscipit explicabo! Dolores, aperiam non officia eos quod asperiores
    </p>

    <p class="home-links">
        <a href="https://gridsome.org/docs/" target="_blank" rel="noopener">Gridsome Docs</a>
        <a href="https://github.com/kyutech-programming-club" target="_blank" rel="noopener">GitHub</a>
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
        NewsCard
    },
    metaInfo: {
        title: 'Hello, world!'
    }
}
</script>

<!--CSS-->

<style>
.home-links a {
    margin-right: 1rem;
}
</style>
