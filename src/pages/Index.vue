<template>
  <layout>
    <main role="main">
      <SectionHero />
    </main>
  </layout>
</template>

<script>
import SectionHero from "@/components/SectionHero.vue"
import { basicPageTransitionEnter, basicPageTransitionLeave } from "@/mixins/pageTransitions"

export default {
  metaInfo: {
    title: "Home Page"
  },
  components: {
    SectionHero
  },
  mixins: [basicPageTransitionEnter, basicPageTransitionLeave]
}
</script>
