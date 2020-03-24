<template>
  <Layout>
    <main role="main" class="post" :style="cssProps">
      <header class="post__header header">
        <div class="header__wrapper">
          <h1 class="header__title display-xl">{{ $page.post.title }}</h1>
          <hr class="header__divider" />
          <div class="header__summary">{{ $page.post.excerpt }}</div>
        </div>
      </header>

      <article class="post__article container container--sm">
        <p class="post__details">
          {{ $page.post.category }} / {{ $page.post.author }} /
          {{ formatDate($page.post.created_at) }}
        </p>

        <VueRemarkContent class="post__content" />

        <BaseLinkLikeButton to="/blog">Go Back</BaseLinkLikeButton>
      </article>
    </main>
  </Layout>
</template>

<!-- Front-matter fields can be queried from GraphQL layer -->
<page-query>
query Post ($id: ID!) {
  post(id: $id) {
    title,
    title_color,
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
  computed: {
    cssProps() {
      return {
        "--background-image-url": `url('${this.$page.post.image.src}')`,
        "--color-title": this.$page.post.title_color
      }
    }
  },
  methods: {
    formatDate(payload) {
      return formatDateToDayMonthYear(payload)
    }
  }
}
</script>

<style lang="scss" scoped>
.post {
  padding-top: $size-section-paddingTop;
  padding-bottom: $size-section-paddingBottom;

  &__details {
    margin-top: 0;
  }

  &__content {
    margin-bottom: 4rem;
  }
}

.header {
  padding: 0 $size-gutter-width;
  display: flex;
  width: 100%;
  min-height: 85vh;
  justify-content: center;
  align-items: center;
  background-image: var(--background-image-url);
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;

  &__wrapper {
    max-width: 800px;
    text-align: center;
  }

  &__title,
  &__summary {
    color: var(--color-title);
  }

  &__divider {
    margin: 30px auto 40px;
    display: block;
    max-width: 150px;
    height: 3px;
    background-color: var(--color-title);
    border: none;
  }
}
</style>
