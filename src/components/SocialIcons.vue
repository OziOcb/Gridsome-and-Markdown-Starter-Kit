<template>
  <div class="socialIcons">
    <a
      v-for="(website, index) in websites"
      :key="index"
      class="socialIcons__link"
      :href="website.link"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span class="sr-only">{{ website.svg }} in {{ parentComponent }}</span>
      <font-awesome :icon="['fab', website.svg]" />
    </a>
  </div>
</template>

<script>
export default {
  props: {
    parentComponent: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      websites: [
        {
          link: "https://github.com/OziOcb/Gridsome-and-Markdown-Starter-Kit",
          svg: "github"
        },
        {
          link: "https://github.com/OziOcb/Gridsome-and-Markdown-Starter-Kit",
          svg: "linkedin"
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.socialIcons {
  display: flex;
  justify-content: center;

  &__link {
    @extend %svg-color-change-hover;
    margin: 0.2rem;
    padding: 0.5rem;
    font-size: 28px;
    line-height: 0;
    border-radius: 5px;
  }
}
</style>
