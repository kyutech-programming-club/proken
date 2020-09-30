<template>
  <Layout>
  <article>
    <h1>{{ $page.productPost.title }}</h1>
    <VueRemarkContent/>
  </article>
  </Layout>
</template>

<page-query>
query ProductPost ($id: ID!) {
  productPost(id: $id) {
    title
    content
  }
}
</page-query>
