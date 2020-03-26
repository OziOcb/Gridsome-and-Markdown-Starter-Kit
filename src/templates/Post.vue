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

        <BaseLinkLikeButton class="post__backBtn" to="/blog">Back to Blog</BaseLinkLikeButton>
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
    title_meta,
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
import { checkWindowWidth } from "@/utils/window"
import breakpoint from "@/utils/breakpoints"
import {
  durationTransitionForWrapper,
  durationTransitionForOverlay,
  enterPageWithBasicTransition,
  leavePageWithBasicTransition
} from "@/utils/transitions"
import { gsap } from "gsap"

export default {
  // GraphQL data in the <script> - https://github.com/gridsome/gridsome/issues/306#issuecomment-475967333
  metaInfo() {
    return {
      title: this.$page.post.title_meta
    }
  },
  computed: {
    cssProps() {
      return {
        "--background-image-url": `url('${this.$page.post.image.src}')`,
        "--color-title": this.$page.post.title_color
      }
    }
  },
  mounted() {
    if (checkWindowWidth() < breakpoint.lg) {
      enterPageWithBasicTransition()
    } else {
      this.gsapPageTransition({ pageEnter: true })
    }
  },
  methods: {
    formatDate(payload) {
      return formatDateToDayMonthYear(payload)
    },
    gsapPageTransition({ onComplete, pageEnter }) {
      const tl = gsap.timeline({ onComplete })

      tl.to(".header__divider", 0.3, { autoAlpha: 0 }, 0)
        .to(".post__backBtn", 0.3, { autoAlpha: 0, scale: 2 }, 0)
        .to(".header__summary", 0.3, { autoAlpha: 0, y: "4em" }, 0.3)
        .to(".header__title", 0.3, { autoAlpha: 0, y: "-0.5em" }, 0.5)
        .to(".pageTransitionWrapper", durationTransitionForWrapper, { autoAlpha: 0 }, 0.4)
        .to(".pageTransitionOverlay", durationTransitionForOverlay, { autoAlpha: 1 }, 0.7)

      return pageEnter ? tl.reverse(0) : tl.play()
    }
  },
  beforeRouteLeave(to, from, next) {
    if (checkWindowWidth() < breakpoint.lg) {
      leavePageWithBasicTransition(next)
    } else {
      this.gsapPageTransition({ onComplete: next })
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
