<template>
  <div class="layout">
    <TheHeader />

    <div class="pageTransitionWrapper">
      <slot />
      <TheFooter />
    </div>
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue"
import TheFooter from "@/components/TheFooter.vue"

export default {
  components: {
    TheHeader,
    TheFooter
  }
}
</script>
