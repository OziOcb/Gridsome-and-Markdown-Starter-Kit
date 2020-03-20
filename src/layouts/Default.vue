<template>
  <div class="layout">
    <TheHeader />

    <transition :css="false" appear @enter="enter">
      <div>
        <slot />
        <TheFooter />
      </div>
    </transition>
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue"
import TheFooter from "@/components/TheFooter.vue"

import { gsap, Power4 } from "gsap"

export default {
  components: {
    TheHeader,
    TheFooter
  },
  methods: {
    enter(el, done) {
      gsap.fromTo(
        el,
        0.6,
        {
          autoAlpha: 0,
          y: 20
        },
        {
          autoAlpha: 1,
          y: 0,
          ease: Power4.ease,
          onComplete: done
        }
      )
    }
  }
}
</script>
