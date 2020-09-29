<template>
<div>
    <NewsCard v-for="news in $page.allNewsPost.edges" :key="news.node.id" :path="news.node.path" :title="news.node.title" />
</div>
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
                }
            }
        }
    }
</page-query>
