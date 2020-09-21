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

    <div class="index">
      <g-link v-for="post in $page.posts.edges" :key="post.node.id" :to="post.node.path">
          <h2>{{ post.node.title }}</h2>
      </g-link>
    </div>

</Layout>
</template>

<page-query>
    query{
        posts: allPost{
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
export default {
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
