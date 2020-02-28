<template>
  <div class="portfolioProject" :style="cssProps">
    <div class="portfolioProject__inner container">
      <div class="portfolioProject__date">{{ projectInfo.year }}</div>

      <div class="portfolioProject__descWrapper">
        <h3 class="portfolioProject__title">{{ projectInfo.title }}</h3>
        <p class="portfolioProject__desc">{{ projectInfo.desc }}</p>
      </div>

      <div class="portfolioProject__btns">
        <BaseLinkLikeButton v-if="projectInfo.repoUrl" :to="projectInfo.repoUrl" blank>
          <font-awesome :icon="['fab', 'github']" />
          GitHub
        </BaseLinkLikeButton>

        <BaseLinkLikeButton
          v-if="projectInfo.designUrl"
          class="designBtn"
          :to="projectInfo.designUrl"
          blank
        >
          Design
        </BaseLinkLikeButton>

        <BaseLinkLikeButton v-if="projectInfo.projectUrl" :to="projectInfo.projectUrl" blank>
          View Project
        </BaseLinkLikeButton>
      </div>
    </div>
  </div>
</template>

<script>
import BaseLinkLikeButton from "@/components/BaseLinkLikeButton.vue"

export default {
  components: {
    BaseLinkLikeButton
  },
  props: {
    projectInfo: {
      type: Object,
      default: () => {
        return {
          year: new Date().getFullYear(),
          title: "Project Title",
          desc: "Poroject Description",
          repoUrl: "https://example.com/",
          projectUrl: "https://example.com/",
          colorGradientPrimary: "",
          colorGradientSecondary: "",
          bgImage: "default",
          designUrl: ""
        }
      }
    }
  },
  computed: {
    bgImagePath() {
      return "/assets/img/jpg/projects-bgs/" + this.projectInfo.bgImage
    },
    bgImageSize() {
      const imgPath = this.bgImagePath
      return {
        sm: `${imgPath}.jpg`,
        md: `${imgPath}--md.jpg`,
        lg: `${imgPath}--lg.jpg`,
        xl: `${imgPath}--xl.jpg`
      }
    },
    // cssProps() explanation:
    // https://www.telerik.com/blogs/passing-variables-to-css-on-a-vue-component
    cssProps() {
      const { sm, md, lg, xl } = this.bgImageSize
      const { colorGradientPrimary, colorGradientSecondary } = this.projectInfo

      return {
        "--color-gradient-primary": colorGradientPrimary,
        "--color-gradient-secondary": colorGradientSecondary,
        "--bg-image-src": `url(${JSON.stringify(sm)})`,
        "--bg-image-src--md": `url(${JSON.stringify(md)})`,
        "--bg-image-src--lg": `url(${JSON.stringify(lg)})`,
        "--bg-image-src--xl": `url(${JSON.stringify(xl)})`
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.portfolioProject {
  position: relative;
  overflow: hidden;
  //prettier-ignore
  background-image: linear-gradient(
                      45deg, var(--color-gradient-primary, rgba(255, 255, 255, 0.6))
                      0%, var(--color-gradient-secondary, rgba($color-secondary, 0.95)) 100%
                    ),
                    var(--bg-image-src);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  @media (min-width: $breakpoint-sm) {
    // prettier-ignore
    background-image: linear-gradient(
                        45deg, var(--color-gradient-primary, rgba(255, 255, 255, 0.6))
                        0%, var(--color-gradient-secondary, rgba($color-secondary, 0.95)) 100%
                      ),
                      var(--bg-image-src--md);
  }
  @media (min-width: $breakpoint-xl) {
    // prettier-ignore
    background-image: linear-gradient(
                        45deg, var(--color-gradient-primary, rgba(255, 255, 255, 0.6))
                        0%, var(--color-gradient-secondary, rgba($color-secondary, 0.95)) 100%
                      ),
                      var(--bg-image-src--lg);
  }
  @media (min-width: $breakpoint-xxl) {
    // prettier-ignore
    background-image: linear-gradient(
                        45deg, var(--color-gradient-primary, rgba(255, 255, 255, 0.6))
                        0%, var(--color-gradient-secondary, rgba($color-secondary, 0.95)) 100%
                      ),
                      var(--bg-image-src--xl);
  }

  &__inner {
    padding-top: 5.125rem;
    padding-bottom: 5.125rem;
    @media (min-width: $breakpoint-xl) {
      display: flex;
      align-items: center;
    }

    &:before {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      content: "";
      background-color: $color-body-bg-light;
      transition: transform ($duration-animation-portfolio-project-base * 2)
        cubic-bezier(0.4, 0, 0.2, 1);
    }
  }

  &__date {
    @extend %typography-large;
    position: relative;
    margin-left: 5.125rem;
    color: $color-text-light;
    transition: color $duration-animation-portfolio-project-base ease-in-out;

    &:before {
      position: absolute;
      top: 50%;
      right: calc(100% + 0.4375rem);
      width: 50vw;
      height: 2px;
      content: "";
      background-color: $color-text-light;
      transition: background-color $duration-animation-portfolio-project-base ease-in-out;
      transform: translateY(-2px);
    }
  }

  &__descWrapper {
    padding-right: 25px;
    @media (min-width: $breakpoint-xl) {
      margin-left: 50px;
      padding-right: 0;
    }
  }

  &__title,
  &__desc,
  &__btns {
    position: relative;
    transition: transform $duration-animation-portfolio-project-base
      $duration-animation-portfolio-project-delay ease;
    transform-origin: left;
    @media (min-width: $breakpoint-xl) {
      transform-origin: center;
    }
  }
  &__title {
    @extend %typography-xlarge;
    margin-top: 0.4375em;
    margin-bottom: 0;
  }
  &__desc {
    margin-top: -0.3rem;
    transition-delay: ($duration-animation-portfolio-project-delay * 1.5);
  }
  &__btns {
    margin-left: auto;
    min-width: 280px;
    transition-delay: ($duration-animation-portfolio-project-delay * 2);
    @media (min-width: $breakpoint-xl) {
      text-align: right;
      transition-delay: ($duration-animation-portfolio-project-delay * 1.5);
    }

    a {
      margin-right: 1em;
      &:last-child {
        margin-right: 0;
      }

      &.designBtn {
        margin-bottom: 1.2em;
        @media (min-width: $breakpoint-sm) {
          margin-bottom: 0;
        }
      }
    }
  }

  .portfolioProject__inner {
    &:hover,
    &:focus-within {
      &:before {
        transform: translateX(100%);
      }
      .portfolioProject {
        &__date {
          color: $color-text-primary;
          &:before {
            background-color: $color-text-primary;
          }
        }
        &__title,
        &__desc {
          transform: scale(1.12);
        }
        &__btns {
          transform: scale(1.05);
        }
      }
    }
  }
}
</style>
