# Gridsome-and-Markdown-Starter-Kit

## INSTALL

### 1. Install Gridsome CLI tool if you don't have

`yarn global add @gridsome/cli`
or
`npm install --global @gridsome/cli`

### 2. Run the Project

1. Clone the Repository `git clone https://github.com/OziOcb/Gridsome-and-Markdown-Starter-Kit.git`.
2. `cd Gridsome-and-Markdown-Starter-Kit` to open the folder.
3. `gridsome develop` to start a local dev server at `http://localhost:8080` 🎉🙌

## BASE COMPONENTS

Many components will be relatively generic, possibly only wrapping an element like an input or a button. We sometimes refer to these as [base components](https://vuejs.org/v2/style-guide/#Base-component-names-strongly-recommended) and they tend to be used very frequently across your components.

Thanks to `gridsome-plugin-base-components` plugin, all Components with names that start with `Base...` (`BaseButton.vue` etc.) will be globally available.

No need for doing below in every component that uses these `base-components`:

```javascript
<script>
import BaseButton from "@/components/BaseButton.vue"

export default {
	components: {
		BaseButton,
	},
}
</script>
```

## GLOBAL HEAD METADATA ( [Grdisome docs](https://gridsome.org/docs/head/#add-global-head-metadata) )

Global head metadata is added in `src/main.js` by using `head.{property}.push()`

```javascript
head.meta.push(
  {
    key: "author", // Ad.1
    name: "author",
    content: "Paul Ozyzniewski"
  },
  {
    key: "description", // Ad.1
    name: "description",
    content: "YOUR DESCRIPTION IN HERE"
  }
)
```

1. Always use `key` property ! (that makes [overwriting form child component](https://gridsome.org/docs/head/#how-to-overwrite-from-child-component) easier)

## FLUID TYPOGRAPHY

What is the [Fluid Typography](https://scotch.io/tutorials/aesthetic-sass-3-typography-and-vertical-rhythm)?

### Setting fluid font-sizes for h1-h6, links and body

- You can find the function responsible for setting **min** and **max** font sizes inside `/src/assets/sass/globals/_typography.scss`

- To set the min font-size find and edit the `$typography-type-scale` array

```javascript
$typography-type-scale: (
  -2: 0.79rem,
  -1: 0.889rem, // h5, h6, body, a
  0: 1rem,      // h4, buttons
  1: 1.125rem,  // h3
  2: 1.266rem,  // h2
  3: 1.424rem,  // h1
  4: 1.602rem,  // .display-md
  5: 1.802rem,  // .display-lg
  6: 2.027rem   // .display-xl
);
```

- To set the max font-size find and edit the `$typography-type-scale-contrast` array

```javascript
$typography-type-scale-contrast: (
  -2: 0.75rem,
  -1: 1rem,       // h5, h6, body, a
  0: 1.3333rem,   // h4, buttons
  1: 1.777rem,    // h3
  2: 2.369rem,    // h2
  3: 3.157rem,    // h1
  4: 4.209rem,    // .display-md
  5: 5.61rem,     // .display-lg
  6: 7.478rem     // .display-xl
);
```

## USING SVGs AS COMPONENTS

Thanks to the [vue-svg-loader](https://gridsome.org/docs/assets-svg/#using-svgs-as-components) you can import SVGs as you do with any other Vue component.

```html
<template>
  <layout>
    <SvgBrand />
  </layout>
</template>

<script>
  import SvgBrand from "~/assets/img/svg/Brand.svg"

  export default {
    components: {
      SvgBrand
    }
  }
</script>
```

## FONT-AWESOME 5 ICONS ( [Gridsome docs](https://gridsome.org/docs/assets-svg/#fontawesome-svg-icons) )

### Example:

```javascript
<font-awesome  :icon="['fab',  'github']"  /> // Ad.1
<font-awesome  :icon="['fab',  'linkedin']"  /> // Ad.1
```

1. Thanks to doing it this way, the SVG for Github/LinkedIn icons will be the only ones added to our final build!

## ADDING BACKGROUND IMAGES IN STYLES

To do that you must use `~@/` as a prefix in the url

```css
.imageBox {
  background: url("~@/assets/img/image-name.jpg") center/cover no-repeat;
}
```

## LODASH \_

Lodash is a great library, well crafted, battle tested and with a strong team.

- Lodash official [docs](https://lodash.com/docs/4.17.15)
- [Usefull source](https://youmightnotneed.com/lodash/)

### Usage:

```javascript
// YourComponent.vue
<script>
import { _debounce } from 'lodash-es';	// Ad.1

export default {
	data: function () {
	  return {
	    searchInput: '',
	    filterKey: ''
	  }
	},

	methods: {
	  debounceInput: _debounce(function () {
	    this.filterKey = this.searchInput;
	  }, 500)
	}
</script>
```

1. `_debaunce`
   - Add `_` prefix to indicate that this function comes from Lodash

## PAGE TRANSITIONS

### The Page Transiton Overlay Component

This is the component that is shown for few seconds while going between two pages
To edit this component go to : `src/components/ThePageTransitionOverlay.vue`

### Basic Transitions

#### Edit:

To edit basic page transitions go to `src/utils/transitions.js` and edit the `gsapTransition()` function.

#### Use:

```javascript
// YourPageComponent.vue

<script>
import {
  basicPageTransitionEnter,
  basicPageTransitionLeave
} from "@/mixins/pageTransitions"

export default {
  ...
  mixins: [
    basicPageTransitionEnter,
    basicPageTransitionLeave
  ],
  ...
}
</script>
```

### Custom Transitions

#### Edit

You edit these transitions inside the component's `methods` like this:

```javascript
// YourPageComponent.vue

<script>
import { checkWindowWidth } from "@/utils/window"
import breakpoint from "@/utils/breakpoints"
import {
  durationTransitionForWrapper,
  durationTransitionForOverlay,
  enterPageWithBasicTransition,		// Ad.1
  leavePageWithBasicTransition		// Ad.1
} from "@/utils/transitions"
import { gsap } from "gsap"

export default {
  ...
  mounted() {
    if (checkWindowWidth() < breakpoint.lg) {	// Ad.1
      enterPageWithBasicTransition()
    } else {
      this.gsapPageTransition({ pageEnter: true })
    }
  },
  methods: {
    gsapPageTransition({ onComplete, pageEnter }) {
      const tl = gsap.timeline({ onComplete })

      tl.to(".YOUR_ELEMENT", 0.3, { autoAlpha: 0, scale: 4 }, 0)
        .to( // Ad.2
          ".pageTransitionWrapper",
          durationTransitionForWrapper,
          { autoAlpha: 0 },
          0
        )
        .to( // Ad.2
          ".pageTransitionOverlay",
          durationTransitionForOverlay,
          { autoAlpha: 1 },
          0.3
        )

      return pageEnter ? tl.reverse(0) : tl.play()
    }
  },
  beforeRouteLeave(to, from, next) {
    if (checkWindowWidth() < breakpoint.lg) {	// Ad.1
      leavePageWithBasicTransition(next)
    } else {
      this.gsapPageTransition({ onComplete: next })
    }
  }
}
</script>
```

1. Use basic page transition for mobile ( Optional )
2. Hide the content and show the Overlay
