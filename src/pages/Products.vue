<template>
<Layout>
<div>
    <NewsCard
        v-for="products in $page.allProductPost.edges"
        :key="products.node.id"
        :data="products.node" />
</div>
</Layout>
</template>

<script>
import NewsCard from '@/components/NewsCard.vue'
export default {
    components: {
        NewsCard
    }
}
</script>

<page-query>
    query{
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
