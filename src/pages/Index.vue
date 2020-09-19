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
    <ul>
      <li>
        <a href="#section1" v-smooth-scroll>セクション1</a>
      </li>
      <li>
        <a href="#section2" v-smooth-scroll>セクション2</a>
      </li>
      <li>
        <a href="#section3" v-smooth-scroll>セクション3</a>
      </li>
    </ul>
    <div id="section1">
      セクション1のコンテンツ
      <g-image alt="Example image" src="~/favicon.png" width="500" />
      <a href="#section2" v-smooth-scroll>セクション2</a>
    </div>
    <div id="section2">
      セクション2のコンテンツ
      <g-image alt="Example image" src="~/favicon.png" width="500" />
      <a href="#section3" v-smooth-scroll>セクション3</a>
    </div>
    <div id="section3">
      セクション3のコンテンツ
      <g-image alt="Example image" src="~/favicon.png" width="500" />
      <a href="#section1" v-smooth-scroll>セクション1</a>
    </div>

</Layout>
</template>

<!--JavaScript-->

<script>
import Vue2SmoothScrool from '@/plugins/vue2-smooth-scrool'

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
