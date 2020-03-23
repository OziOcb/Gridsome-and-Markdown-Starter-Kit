import { gsap } from "gsap"

export const enterPageWithBasicTransition = () => {
  gsap.set(".pageTransitionWrapper", { autoAlpha: 0 })
  const tl = gsap.timeline()
  tl.to(".pageTransitionWrapper", 0.6, { autoAlpha: 1 })
}

export const leavePageWithBasicTransition = next => {
  const tl = gsap.timeline({ onComplete: next })
  tl.to(".pageTransitionWrapper", 0.6, { autoAlpha: 0 })
}

export const basicPageTransitionEnter = {
  mounted() {
    enterPageWithBasicTransition()
  }
}

export const basicPageTransitionLeave = {
  beforeRouteLeave(to, from, next) {
    leavePageWithBasicTransition(next)
  }
}
