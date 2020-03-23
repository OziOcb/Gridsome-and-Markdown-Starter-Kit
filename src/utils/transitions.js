import { gsap } from "gsap"

export const durationTransitionForOverlay = 0.6

export const enterPageWithBasicTransition = () => {
  gsap.set(".pageTransitionOverlay", { autoAlpha: 1 })
  gsap.set(".pageTransitionWrapper", { autoAlpha: 0 })

  const tl = gsap.timeline()
  // prettier-ignore
  tl.to(".pageTransitionOverlay", durationTransitionForOverlay, { autoAlpha: 0 }, 0)
    .to(".pageTransitionWrapper", 0.6, { autoAlpha: 1 }, 0.3)
}

export const leavePageWithBasicTransition = next => {
  const tl = gsap.timeline({ onComplete: next })
  // prettier-ignore
  tl.to(".pageTransitionWrapper", 0.6, { autoAlpha: 0 }, 0)
    .to(".pageTransitionOverlay", durationTransitionForOverlay, { autoAlpha: 1 }, 0.3)
}
