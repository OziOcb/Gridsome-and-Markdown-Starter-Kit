<template>
  <div class="layout">
    <TheHeader />

    <ThePageTransitionOverlay />

    <div class="pageTransitionWrapper">
      <slot />
      <TheFooter />
    </div>
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue"
import TheFooter from "@/components/TheFooter.vue"
import ThePageTransitionOverlay from "@/components/ThePageTransitionOverlay.vue"

export default {
  components: {
    TheHeader,
    TheFooter,
    ThePageTransitionOverlay
  }
}
</script>

<style lang="scss" scoped>
.layout {
  overflow-x: hidden;
}
</style>
