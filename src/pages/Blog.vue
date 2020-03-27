<template>
  <layout>
    <main role="main" class="blog container">
      <header>
        <h1 class="blog__title display-lg">Our Stories</h1>
        <hr class="blog__divider" />
      </header>

      <article v-for="edge in $page.post.edges" :key="edge.node.id" class="blogCard">
        <div class="blogCard__imageContainer">
          <figure class="blogCard__figure">
            <g-image
              class="blogCard__image"
              :alt="edge.node.image_caption"
              :src="edge.node.image"
            />
            <g-link class="blogCard__arrow" :to="edge.node.path">
              <font-awesome :icon="['fas', 'arrow-right']" />
            </g-link>
          </figure>
        </div>

        <div class="blogCard__textContainer">
          <h2 class="blogCard__title">
            <g-link :to="edge.node.path">{{ edge.node.title }}</g-link>
          </h2>
          <p class="blogCard__excerpt">{{ edge.node.excerpt }}</p>
          <p class="blogCard__details">
            {{ edge.node.category }} / {{ formatDate(edge.node.created_at) }}
          </p>

          <BaseLinkLikeButton class="blogCard__btn" :to="edge.node.path">
            Read the article
          </BaseLinkLikeButton>
        </div>
      </article>

      <footer>
        <Pager class="pagination" :info="$page.post.pageInfo" />
      </footer>
    </main>
  </layout>
</template>

<page-query>
query Post($page:Int) {
  post: allPost(perPage: 6, page: $page, order: DESC, sortBy: "created_at") @paginate  {
    totalCount
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        title,
        excerpt,
        path,
        created_at,
        category,
        image(width:800),
        image_caption,
      }
    }
  }
}
</page-query>

<script>
import { Pager } from "gridsome"
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
  metaInfo: {
    title: "Blog"
  },
  components: {
    Pager
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

      tl.to(".blogCard__arrow", 0.3, { autoAlpha: 0, scale: 4 }, 0)
        .to(".blogCard__btn", 0.3, { autoAlpha: 0, scale: 0.8 }, 0)
        .to(".blogCard__title", 1, { x: "-120%" }, 0)
        .to(".blogCard__excerpt", 1, { x: "-120%" }, 0.15)
        .to(".blogCard__details", 1, { x: "-120%" }, 0.3)
        .to(".blogCard__figure", 0.6, { autoAlpha: 0, y: 50 }, 0.3)
        .to(".blogCard__imageContainer", 1.2, { autoAlpha: 0, y: 50 }, 0.3)
        .to(".pageTransitionWrapper", durationTransitionForWrapper, { autoAlpha: 0 }, 0.6)
        .to(".pageTransitionOverlay", durationTransitionForOverlay, { autoAlpha: 1 }, 0.9)

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
.blog {
  padding-top: $size-section-paddingTop;
  padding-bottom: $size-section-paddingBottom;
  text-align: center;
  @media (min-width: $breakpoint-lg) {
    padding-right: 0;
    padding-left: 0;
  }

  &__title {
    margin: 0;
  }

  &__divider {
    margin: 30px auto 40px;
    display: block;
    max-width: 150px;
    height: 3px;
    background-color: $color-text-default;
    border: none;
  }
}

.blogCard {
  padding-bottom: $size-blogCard-paddingBottom;

  @media (min-width: $breakpoint-lg) {
    display: flex;
    &:nth-child(odd) {
      .blogCard__imageContainer {
        order: 1;
        &:before {
          right: -10%;
          left: inherit;
        }
      }
      .blogCard__arrow {
        left: -20px;
      }
    }
  }

  &__imageContainer {
    @media (min-width: $breakpoint-lg) {
      position: relative;
      display: flex;
      flex: 3;
      align-items: center;

      &:before {
        position: absolute;
        top: 0;
        bottom: 0;
        left: -10%;
        width: 60%;
        content: "";
        background-color: $color-blog-image-beforeElement;
      }
    }
  }

  &__textContainer {
    padding-bottom: 50px;
    overflow: hidden;

    @media (min-width: $breakpoint-lg) {
      margin: 20px;
      padding: 150px 80px 0 40px;
      flex: 2;
      text-align: left;
    }
  }

  &__figure {
    position: relative;
    margin: 0;
  }

  &__image {
    display: block;
    width: 100%;
    height: 400px;
    object-fit: cover;
    @media (min-width: $breakpoint-lg) {
      height: 320px;
    }
  }

  &__arrow {
    display: none;
    @media (min-width: $breakpoint-lg) {
      position: absolute;
      right: -20px;
      bottom: 20px;
      display: flex;
      width: $size-blogCard-arrow-size;
      height: $size-blogCard-arrow-size;
      justify-content: center;
      align-items: center;
      color: $color-body-bg;
      background-color: $color-primary;
      border-radius: 50%;
      box-shadow: 0px 0.6em 1.25em $color-button-shadow;
      transition: transform $duration-animation-base cubic-bezier(0.25, 0.1, 0.4, 2),
        box-shadow $duration-animation-base cubic-bezier(0.25, 0.1, 0.4, 2);
      &:hover,
      &:focus {
        box-shadow: 0px 1.25em 2.5em $color-button-shadow;
        transform: scale(1.2);
      }
    }
  }

  &__title a {
    display: block;
    text-decoration: none;
  }

  &__details {
    font-family: $heading-font-family;
    font-weight: bold;
    color: $color-text-alt2;
  }

  &__btn {
    @media (min-width: $breakpoint-lg) {
      display: none;
    }
  }
}

.pagination a {
  margin-right: 0.625rem;
  display: inline-flex;
  width: $size-blogCard-paginationItem-size;
  height: $size-blogCard-paginationItem-size;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  border: 1px solid $color-text-alt;
  border-radius: 3px;

  &.active--exact {
    color: $color-text-alt;
    background-color: $color-black;
    border-color: $color-black;
  }
}
</style>
