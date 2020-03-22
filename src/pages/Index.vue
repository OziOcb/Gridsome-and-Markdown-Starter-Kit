<template>
  <layout>
    <main role="main">
      <SectionHero />
    </main>
  </layout>
</template>

<script>
import SectionHero from "@/components/SectionHero.vue"
import { pageTransitionEnter, pageTransitionLeave } from "@/mixins/pageTransitions"

export default {
  metaInfo: {
    title: "Home Page"
  },
  components: {
    SectionHero
  },
  mixins: [pageTransitionEnter, pageTransitionLeave]
}
</script>
