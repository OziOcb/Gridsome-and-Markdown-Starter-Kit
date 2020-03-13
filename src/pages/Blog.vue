<template>
  <layout>
    <main role="main" class="container">
      <h1 class="title">Blog (comming soon)</h1>
      <hr class="divisior" />

      <div v-for="edge in $page.post.edges" :key="edge.node.id" class="blogCard">
        <div class="blogCard__imageContainer">
          <g-image class="blogCard__image" :alt="edge.node.image_caption" :src="edge.node.image" />
          <g-link class="blogCard__arrow" :to="edge.node.path">
            <font-awesome :icon="['fas', 'arrow-right']" />
          </g-link>
        </div>

        <div class="blogCard__textContainer">
          <g-link class="blogCard__title" :to="edge.node.path">{{ edge.node.title }}</g-link>
          <p class="blogCard__excerpt">{{ edge.node.excerpt }}</p>
          <p class="blogCard__date">{{ edge.node.category }} / {{ edge.node.created_at }}</p>
          <g-link class="blogCard__link" :to="edge.node.path">Read the article</g-link>
        </div>
      </div>

      <Pager :info="$page.post.pageInfo" />

      <div style="height:500px"></div>
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
