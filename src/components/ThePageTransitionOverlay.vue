<template>
  <div class="pageTransitionOverlay">
    <LogoComponent
      class="pageTransitionOverlay__logo"
      version="simple"
      desc="Page transition overlay's logo"
    />
  </div>
</template>

<script>
import LogoComponent from "@/components/LogoComponent.vue"

export default {
  components: {
    LogoComponent
  }
}
</script>

<style lang="scss" scoped>
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
    pointer-events: none;
  }
}
</style>
