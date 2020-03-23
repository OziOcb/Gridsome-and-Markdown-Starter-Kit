import { gsap } from "gsap"

export const enterPageWithBasicTransition = () => {
  gsap.set(".pageTransitionOverlay", { autoAlpha: 1 })
  gsap.set(".pageTransitionWrapper", { autoAlpha: 0 })

  const tl = gsap.timeline()
  // prettier-ignore
  tl.to(".pageTransitionOverlay", 1, { autoAlpha: 0 }, 0)
    .to(".pageTransitionWrapper", 0.6, { autoAlpha: 1 }, 0.3)
}

export const leavePageWithBasicTransition = next => {
  const tl = gsap.timeline({ onComplete: next })
  // prettier-ignore
  tl.to(".pageTransitionWrapper", 0.6, { autoAlpha: 0 }, 0)
    .to(".pageTransitionOverlay", 1, { autoAlpha: 1 }, 0.3)
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
