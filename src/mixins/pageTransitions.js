import { gsap } from "gsap"

export const pageTransitionEnter = {
  mounted() {
    gsap.set(".pageTransitionWrapper", { autoAlpha: 0 })
    const tl = gsap.timeline()
    tl.to(".pageTransitionWrapper", 0.6, { autoAlpha: 1 })
  }
}

export const pageTransitionLeave = {
  beforeRouteLeave(to, from, next) {
    const tl = gsap.timeline({ onComplete: next })
    tl.to(".pageTransitionWrapper", 0.6, { autoAlpha: 0 })
  }
}
