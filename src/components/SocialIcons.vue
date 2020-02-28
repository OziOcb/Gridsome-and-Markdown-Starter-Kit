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
      <component :is="website.svg"></component>
    </a>
  </div>
</template>

<script>
import SvgLinkedIn from "~/assets/img/svg/linkedIn.svg"
import SvgGitHub from "~/assets/img/svg/gitHub.svg"

export default {
  components: {
    SvgLinkedIn,
    SvgGitHub
  },
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
          link: "https://github.com/OziOcb",
          svg: "SvgGitHub"
        },
        {
          link: "https://www.linkedin.com/in/paul-ozyzniewski/",
          svg: "SvgLinkedIn"
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
    line-height: 0;
    border-radius: 5px;
  }
}
</style>
