<template>
  <layout>
    <main role="main">
      <SectionHero />
    </main>
  </layout>
</template>

<script>
import SectionHero from "@/components/SectionHero.vue"
import { gsap } from "gsap"

export default {
  metaInfo: {
    title: "Home Page"
  },
  components: {
    SectionHero
  },
  mounted() {
    gsap.set(".pageTransitionWrapper", { autoAlpha: 0 })
    const tl = gsap.timeline()
    tl.to(".pageTransitionWrapper", 0.6, { autoAlpha: 1 })
  },
  beforeRouteLeave(to, from, next) {
    const tl = gsap.timeline({ onComplete: next })
    tl.to(".pageTransitionWrapper", 0.6, { autoAlpha: 0 })
  }
}
</script>
