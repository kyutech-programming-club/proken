<template>
  <Layout>
  <article>
    <h1>{{ $page.newsPost.title }}</h1>
    <VueRemarkContent/>
  </article>
  </Layout>
</template>

<page-query>
query NewsPost ($id: ID!) {
  newsPost(id: $id) {
    title
    content
  }
}
</page-query>
