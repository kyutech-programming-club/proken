<template>
<Layout>
<div>
    <NewsCard
        v-for="news in $page.allNewsPost.edges"
        :key="news.node.id"
        :data="news.node" />
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
        allNewsPost{
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
