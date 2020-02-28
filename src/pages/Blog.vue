<template>
  <layout>
    <main role="main" class="container">
      <h1>Blog (comming soon)</h1>

      <div v-for="edge in $page.post.edges" :key="edge.node.id">
        <g-link :to="edge.node.path">{{ edge.node.title }}</g-link>
      </div>

      <Pager :info="$page.post.pageInfo" />

      <div style="height:500px"></div>
    </main>
  </layout>
</template>

<page-query>
query Post($page:Int) {
  post: allPost(perPage: 9, page: $page) @paginate  {
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
        image(width:400),
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
    title: "Blog",
    meta: [{ name: "robots", content: "noindex,nofollow,disallow" }]
  },
  components: {
    Pager
  }
}
</script>
