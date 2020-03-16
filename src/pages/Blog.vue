<template>
  <layout>
    <main role="main" class="blog container">
      <header class="blog__header">
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
          </figure>
          <g-link class="blogCard__arrow" :to="edge.node.path">
            <font-awesome :icon="['fas', 'arrow-right']" />
          </g-link>
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

      <footer class="blog__footer">
        <Pager :info="$page.post.pageInfo" />
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

export default {
  metaInfo: {
    title: "Blog"
  },
  components: {
    Pager
  },
  methods: {
    formatDate(payload) {
      return formatDateToDayMonthYear(payload)
    }
  }
}
</script>

<style lang="scss" scoped>
.blog {
  margin-top: 100px;
  text-align: center;

  &__title {
    margin: 0;
  }

  &__divider {
    margin: 30px auto 40px;
    display: block;
    max-width: 150px;
    height: 3px;
    background-color: $color-text-primary;
    border: none;
  }
}

.blogCard {
  padding-bottom: $size-blogCard-paddingBottom;

  &__figure {
    margin: 0;
  }

  &__image {
    display: block;
    width: 100%;
  }

  &__arrow {
    display: none;
  }

  &__title a {
    text-decoration: none;
  }

  &__details {
    font-family: $heading-font-family;
    font-weight: bold;
    color: $color-text-light;
  }
}
</style>
