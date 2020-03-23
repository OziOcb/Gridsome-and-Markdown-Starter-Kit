import { enterPageWithBasicTransition, leavePageWithBasicTransition } from "@/utils/transitions.js"

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
