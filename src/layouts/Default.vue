<template>
  <div class="layout">
    <TheHeader />

    <div class="pageTransitionOverlay">
      <LogoComponent class="pageTransitionOverlay__logo" version="simple" desc="Overlay Logo" />
    </div>
    <div class="pageTransitionWrapper">
      <slot />
      <TheFooter />
    </div>
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue"
import TheFooter from "@/components/TheFooter.vue"
import LogoComponent from "@/components/LogoComponent.vue"

export default {
  components: {
    TheHeader,
    TheFooter,
    LogoComponent
  }
}
</script>

<style lang="scss" scoped>
.layout {
  overflow-x: hidden;
}
.pageTransitionOverlay {
  position: fixed;
  z-index: $layer-negative-z-index;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  background: $color-menu-gradient;

  &__logo {
    width: 250px;
  }
}
</style>
