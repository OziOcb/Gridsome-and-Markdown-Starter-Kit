<template>
  <Layout>
    <main role="main" class="post container">
      <header class="post__header header">
        <div class="header__wrapper">
          <h1 class="header__title">{{ $page.post.title }}</h1>
          <hr class="header__dicider" />
          <div class="header__summary">{{ $page.post.excerpt }}</div>
        </div>
      </header>

      <article class="post__article">
        <p class="post__details">
          {{ $page.post.category }} / {{ $page.post.author }} /
          {{ formatDate($page.post.created_at) }}
        </p>

        <VueRemarkContent />
      </article>

      <BaseLinkLikeButton to="/blog">Go Back</BaseLinkLikeButton>
    </main>

    <div style="height:1200px"></div>
  </Layout>
</template>

<!-- Front-matter fields can be queried from GraphQL layer -->
<page-query>
query Post ($id: ID!) {
  post(id: $id) {
    title,
    excerpt,
    author,
    created_at,
    category,
    image,
    image_caption
  }
}
</page-query>

<script>
import { formatDateToDayMonthYear } from "@/utils/date"
import { basicPageTransitionEnter, basicPageTransitionLeave } from "@/mixins/pageTransitions"

export default {
  metaInfo: {
    title: "POST_NAME",
    meta: [{ key: "robots", name: "robots", content: "noindex, nofollow, disallow" }] // remove this line when the post is ready
  },
  mixins: [basicPageTransitionEnter, basicPageTransitionLeave],
  methods: {
    formatDate(payload) {
      return formatDateToDayMonthYear(payload)
    }
  }
}
</script>
