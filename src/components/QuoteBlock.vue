// props: alignRight
<template>
  <blockquote
    class="blockquote "
    :class="{ right: alignRight }"
    cite="https://www.huxley.net/bnw/four.html"
  >
    <p class="blockquote__paragraph">
      <slot></slot>
    </p>
    <cite class="blockquote__cite">
      -
      <slot name="cite">Unknown</slot>
    </cite>
  </blockquote>
</template>

<script>
export default {
  props: {
    alignRight: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.blockquote {
  &__paragraph {
    @extend %typography-blockquote;
    margin-bottom: -0.2em;
    font-style: italic;
    text-align: center;

    &:before,
    &:after {
      content: '"';
    }
    &:before {
      margin-right: -0.2em;
    }
    &:after {
      margin-left: -0.3em;
    }
  }
  &__cite {
    @extend %typography-blockquote-cite;
    display: block;
    text-align: right;
  }
  &__paragraph,
  &__cite {
    @media (min-width: $breakpoint-lg) {
      text-align: left;

      .right & {
        text-align: right;
      }
    }
  }
}
</style>
