# Gridsome-and-Markdown-Starter-Kit

## Install

### 1. Install Gridsome CLI tool if you don't have

`yarn global add @gridsome/cli`
or
`npm install --global @gridsome/cli`

### 2. Run the Project

1. Clone the Repository `git clone https://github.com/OziOcb/Gridsome-and-Markdown-Starter-Kit.git`.
2. `cd Gridsome-and-Markdown-Starter-Kit` to open the folder.
3. `gridsome develop` to start a local dev server at `http://localhost:8080` 🎉🙌

## Base Components

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

## Global Head Metadata ( [Grdisome docs](https://gridsome.org/docs/head/#add-global-head-metadata) )

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

## Using SVGs as Components

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

## FontAwesome 5 Icons ( [Gridsome docs](https://gridsome.org/docs/assets-svg/#fontawesome-svg-icons) )

### Example:

```javascript
<font-awesome  :icon="['fab',  'github']"  /> // Ad.1
<font-awesome  :icon="['fab',  'linkedin']"  /> // Ad.1
```

1. Thanks to doing it this way, the SVG for Github/LinkedIn icons will be the only ones added to our final build!

## Adding Background Images in styles

To do that you must use `~@/` as a prefix in the url

```css
.imageBox {
  background: url("~@/assets/img/image-name.jpg") center/cover no-repeat;
}
```
