# Pozyzniewski Portfolio

## Install

### 1. Install Gridsome CLI tool if you don't have

`npm install --global @gridsome/cli`

### 2. Run the Project

1. Clone the Repository.
2. `cd pozyzniewski-portfolio` to open the folder.
3. `gridsome develop` to start a local dev server at `http://localhost:8080` 🎉🙌

## Base Components

Many components will be relatively generic, possibly only wrapping an element like an input or a button. We sometimes refer to these as [base components](https://vuejs.org/v2/style-guide/#Base-component-names-strongly-recommended) and they tend to be used very frequently across your components.

Thanks to `gridsome-plugin-base-components` plugin, all Components with names that start with `Base...` (`BaseButton.vue` etc.) will be globally available.

No need for doing below in every component that uses these `base-components`:

```javascript
<script>
import BaseButton from "@/components/BaseButton.vue"

export  default  {
	components:  {
		BaseButton,
	},
}
</script>
```

## Using SVGs as Components

You can import SVGs as you do with any other Vue component.

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

## Adding Background Images in styles

To do that you must use `~@/` as a prefix in the url

```css
.imageBox {
  background: url("~@/assets/img/image-name.jpg") center/cover no-repeat;
}
```

<!--
## GSAP & ScrollMagic

### 1. Setup:
```javascript
// main.js

// import { TweenMax } from "gsap/TweenMax" // This seems to be unnecessary
import  ScrollMagic  from  "scrollmagic"
import  "imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap"

// Load ScrollMagic's Indicators only on development environment
if (process.env.NODE_ENV  ===  "development") {
	require("imports-loader?define=>true!scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators")
}

// Load any extra plugins from GreenSock like this:
// import SplitText from "../static/SplitText"

const  GSAPScrollMagic  =  {
	install(Vue)  {
		// GSAP
		Vue.prototype.$GSAP  =  {
			// TweenMax,
			TimelineMax,
			Linear,
			Power1,
			Power2,
			Power3,
			Back
		}

		// ScrollMagic
		Vue.prototype.$ScrollMagic  =  {
			Controller:  new  ScrollMagic.Controller(),
			Scene:  ScrollMagic.Scene
		}
	}
}

export  default  function(Vue,  {  router,  head,  isClient  })  {
	...
	// Add GSAP & ScrollMagic to the project
	Vue.use(GSAPScrollMagic)
}
```

### 2. Example:

```javascript
<script>
// inside any `.vue` file
export  default  {
	...
	mounted()  {
	// create a Tween
	const  testTween  =  new  this.$GSAP.TimelineMax()
	testTween
		.from(".smElement",  1.5,  { ease:  this.$GSAP.Power2.easeOut, opacity:  0  })
		.to(".smElement",  2,  { ease:  this.$GSAP.Back.easeInOut.config(5.2), fontSize:  "30px"  })
		.to(".smElement",  2,  { rotationY:  360  })

	// create a scene
	const  testScene  =  new  this.$ScrollMagic.Scene({
		triggerElement:  ".smElement",
		triggerHook:  0.7,
		duration:  300
	})
		.addIndicators() // TODO: Remove this line before sending to production
		.setTween(testTween)

	// Add the scene to the controller
	this.$ScrollMagic.Controller.addScene(testScene)
	}
}
</script>
```
-->

## FontAwesome 5

### 1. Setup: [here](https://gridsome.org/docs/assets-svg/#fontawesome-svg-icons)

### 2. Example:

```javascript
<font-awesome  :icon="['fab',  'github']"  />
<font-awesome  :icon="['fab',  'linkedin']"  />
```

## About Me Gallery Images

1.  Follow this sizes: (For image templates follow this [link](https://www.figma.com/file/FjVqnpkJ4mvdc3Y3CnFIDe/POzyzniewski_Portfolio_Project_Image_Breakpoints_Sizez_Template?node-id=0%3A1))

        Primary Image		-	h: 290px; w: 250px
        Secondary Image	-	h: 380px; w: 380px

2.  All files must be places inside:

    - `/src/assets/img/jpg/`

3.  While passing the file name via props **use only the name without the extension**:
    - for example if your file is `portrait.jpg` use:

```html
<TheAboutMeGallery :gallery-details="galleryDetails" />
```

```javascript
data() {
	return {
		galleryDetails:  {
			primaryImg:  "portrait",
			primaryOverlayColor:  "rgba(0, 0, 255, 0.25)",
			secondaryImg:  "theAboutMeGallerySecondary",
			secondaryOverlayColor:  "rgba(155, 0, 0, 0.75)"
		}
	}
}
```

## Portfolio Projects Background Images

To save visitors' bandwith (especially on mobile devices) it's important to follow these few rules.

1.  Each image **must** be provided in four specific size variations & follow the naming convention: (For image templates follow this [link](https://www.figma.com/file/FjVqnpkJ4mvdc3Y3CnFIDe/POzyzniewski_Portfolio_Project_Image_Breakpoints_Sizez_Template?node-id=0%3A1))

        IMAGE_NAME.jpg		-	h: 400px; w: 480px
        IMAGE_NAME--md.jpg	-	h: 400px; w: 1025px
        IMAGE_NAME--md.jpg	-	h: 290px; w: 1281px
        IMAGE_NAME--md.jpg	-	h: 290px; w: 1920px

2.  They **must** be placed inside:

    - `static/assets/img/jpg/projects-bgs/`

3.  While passing the file name via props **use only the name without the extension**:
    - for example if your file is `design.jpg` use:

```html
<PortfolioProject
  v-for="(project, index) in  portfolioProjects"
  :key="index"
  :project-info="project"
/>
```

```javascript
data() {
	return {
		portfolioProjects: [
			{
				....
				bgImage:  "design"
			}
		}
	}
}
```
