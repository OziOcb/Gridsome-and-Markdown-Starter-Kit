<template>
  <layout>
    <main role="main" class="blog container">
      <header class="blog__header">
        <h1 class="blog__title">Our Stories</h1>
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
          <p class="blogCard__date">{{ edge.node.category }} / {{ edge.node.created_at }}</p>
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
  post: allPost(perPage: 6, page: $page) @paginate  {
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

export default {
  metaInfo: {
    title: "Blog"
  },
  components: {
    Pager
  }
}
</script>
