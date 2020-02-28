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

## FontAwesome 5

### 1. Setup: [here](https://gridsome.org/docs/assets-svg/#fontawesome-svg-icons)

### 2. Example:

```javascript
<font-awesome  :icon="['fab',  'github']"  />
<font-awesome  :icon="['fab',  'linkedin']"  />
```
