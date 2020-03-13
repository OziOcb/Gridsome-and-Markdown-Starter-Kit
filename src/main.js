// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

/* Nomralize.css */
import "normalize.css"

/* Sass */
import "~/assets/sass/main.scss"

/* Gridsome Layouts */
import DefaultLayout from "~/layouts/Default.vue"

// // TODO: Find the solution (see here https://github.com/gridsome/gridsome/issues/882)
// /* GSAP & ScrollMagic */
// // import { TweenMax } from "gsap/TweenMax" // This seems to be unnecessary
// import ScrollMagic from "scrollmagic"
// import "imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap"

// // Load ScrollMagic's Indicators only on development environment
// if (process.env.NODE_ENV === "development") {
//   require("imports-loader?define=>true!scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators")
// }
// // Load any extra plugins from GreenSock like this:
// // import SplitText from "../static/SplitText"

// const GSAPScrollMagic = {
//   install(Vue, options) {
//     // GSAP
//     Vue.prototype.$GSAP = {
//       // TweenMax,
//       TimelineMax,
//       Linear,
//       Power1,
//       Power2,
//       Power3,
//       Back
//     }
//     // ScrollMagic
//     Vue.prototype.$ScrollMagic = {
//       Controller: new ScrollMagic.Controller(),
//       Scene: ScrollMagic.Scene
//     }
//   }
// }

/* FontAwesome 5 */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import { config, library } from "@fortawesome/fontawesome-svg-core"
import { faArrowDown, faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import "@fortawesome/fontawesome-svg-core/styles.css"

config.autoAddCss = false
library.add(faGithub, faLinkedin, faArrowDown, faArrowRight)

/* Vuelidate */
import Vuelidate from "vuelidate"

/**
 * Export
 */
export default function(Vue, { router, head, isClient }) {
  // Global Head Metadata
  head.meta.push(
    {
      key: "author",
      name: "author",
      content: "Paul Ozyzniewski"
    },
    {
      key: "description",
      name: "description",
      content: "YOUR DESCRIPTION IN HERE"
    },
    {
      key: "keywords",
      name: "keywords",
      content: "YOUR, KEYWORDS, IN, HERE"
    },
    { key: "robots", name: "robots", content: "index, follow, noodp, noydir" }
  )

  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout)

  // // TODO: Find the solution (see here https://github.com/gridsome/gridsome/issues/882)
  // // Add GSAP & ScrollMagic to the project
  // Vue.use(GSAPScrollMagic)

  // Add FontAwesome 5 to the project
  Vue.component("font-awesome", FontAwesomeIcon)

  // Vuelidate
  Vue.use(Vuelidate)
}
