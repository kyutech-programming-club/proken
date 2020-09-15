<!--HTML-->
<template>
<Layout>

    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <g-image alt="Example image" src="~/favicon.png" width="135" />

    <h1>ようこそ、プロ研へ!</h1>

    <p>
        プログラミングを学びたい学生のためのコミュニティです！
    </p>

    <p class="home-links">
        <a href="https://gridsome.org/docs/" target="_blank" rel="noopener">Gridsome Docs</a>
        <a href="https://github.com/kyutech-programming-club" target="_blank" rel="noopener">GitHub</a>
    </p>

</Layout>
</template>

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
