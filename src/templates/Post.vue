<template>
  <Layout>
    <h1>{{ $page.post.title }}</h1>
    <section class="meta">
      <div>
        <strong>Author: {{ $page.post.author }}</strong>
      </div>
      <div>Date: {{ $page.post.created_at }}</div>
      <!-- <p class="intro">{{ $page.post.excerpt }}</p> -->
    </section>

    <main>
      <VueRemarkContent />
    </main>

    <g-link to="/blog">Go back</g-link>
  </Layout>
</template>

<!-- Front-matter fields can be queried from GraphQL layer -->
<page-query>
query Post ($id: ID!) {
  post(id: $id) {
    title,
    author,
    excerpt,
    created_at
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: "POST_NAME",
    meta: [{ key: "robots", name: "robots", content: "noindex, nofollow, disallow" }] // remove this line when the post is ready
  }
}
</script>

<style lang="scss" scoped>
.meta {
  padding: 1rem 0.3rem;
  background-color: #bbb;
}
</style>
