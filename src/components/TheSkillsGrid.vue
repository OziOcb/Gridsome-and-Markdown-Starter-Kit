<template>
  <div ref="skillsGrid" class="skillsGrid">
    <div
      v-for="(tile, index) in tiles"
      :key="index"
      ref="skillsGridTiles"
      :class="tile"
      class="skillsGrid__skillBox"
    >
      <component :is="`Svg${tile}`"></component>
    </div>
  </div>
</template>

<script>
// prettier-ignore
import {
  SvgAdobeIllustrator,SvgAdobePhotoshop,SvgAdobeTypekit,SvgAdobeXd,SvgAtom,SvgBabel,
  SvgBasecamp,SvgBit,SvgBootstrap,SvgCodeoen,SvgCodeSandbox,SvgCodewars,SvgCss,SvgCssWizardy,
  SvgEsLint,SvgFigma,SvgFilleZilla,SvgFirebase,SvgGit,SvgGitHub,SvgGitLab,SvgGraphQl,SvgGulp,
  SvgHtml5,SvgJavascript,SvgJekyll,SvgJest,SvgJson,SvgMarkdown,SvgMaterialDesign,SvgNpm,
  SvgNuxtJs,SvgPostman,SvgPowerShell,SvgPrettier,SvgSass,SvgVSC,SvgVueJs,SvgVue,SvgWebpack,
  SvgYarn,SvgZapier
} from "~/assets/img/svg/skillsGrid/index.js"

export default {
  // prettier-ignore
  components: {
    SvgAdobeIllustrator,SvgAdobePhotoshop,SvgAdobeTypekit,SvgAdobeXd,SvgAtom,SvgBabel,
    SvgBasecamp,SvgBit,SvgBootstrap,SvgCodeoen,SvgCodeSandbox,SvgCodewars,SvgCss,SvgCssWizardy,
    SvgEsLint,SvgFigma,SvgFilleZilla,SvgFirebase,SvgGit,SvgGitHub,SvgGitLab,SvgGraphQl,SvgGulp,
    SvgHtml5,SvgJavascript,SvgJekyll,SvgJest,SvgJson,SvgMarkdown,SvgMaterialDesign,SvgNpm,
    SvgNuxtJs,SvgPostman,SvgPowerShell,SvgPrettier,SvgSass,SvgVSC,SvgVueJs,SvgVue,SvgWebpack,
    SvgYarn,SvgZapier
  },
  data() {
    return {
      // prettier-ignore
      tiles: [
        "Markdown","FilleZilla","PowerShell","MaterialDesign","Css","Git","Basecamp","GraphQl",
        "CssWizardy","Bit","NuxtJs","Bootstrap","EsLint","VueJs","GitHub","AdobePhotoshop",
        "GitLab","VSC","Gulp","Figma","AdobeXd","Sass","Prettier","Html5","Npm","Firebase",
        "Webpack","Javascript","Codewars","Vue","Codeoen","CodeSandbox","Atom","AdobeTypekit",
        "Postman","Zapier","Babel","AdobeIllustrator","Yarn","Jest","Jekyll","Json"
      ]
    }
  },
  mounted() {
    const skillsGrid = this.$refs.skillsGrid
    const skillsGridTiles = this.$refs.skillsGridTiles
    const timeoutDurration = 100
    const intervalDurration = 4800

    const removeHiglights = () => skillsGridTiles.forEach(tile => tile.classList.remove("active"))
    const giveRandomTileNumber = () => Math.floor(Math.random() * (skillsGridTiles.length - 2)) // -2 because two last tiles are hidden on mobile
    const highlightRandomTile = () =>
      skillsGridTiles[giveRandomTileNumber()].classList.add("active")

    let timeout
    const highlightFourRandomTiles = bool => {
      if (bool) {
        timeout = setTimeout(() => {
          highlightRandomTile()
          setTimeout(() => {
            highlightRandomTile()
            setTimeout(() => {
              highlightRandomTile()
              setTimeout(() => {
                highlightRandomTile()
                setTimeout(() => {
                  highlightRandomTile()
                  setTimeout(() => {
                    highlightRandomTile()
                    setTimeout(() => {
                      highlightRandomTile()
                    }, timeoutDurration)
                  }, timeoutDurration)
                }, timeoutDurration)
              }, timeoutDurration)
            }, timeoutDurration)
          }, timeoutDurration)
        }, timeoutDurration)
      } else {
        clearTimeout(timeout)
      }
    }

    let interval
    const setHiglightInterval = bool => {
      if (bool) {
        interval = setInterval(() => {
          removeHiglights()
          highlightFourRandomTiles(true)
        }, intervalDurration)
      } else {
        highlightFourRandomTiles(false)
        clearInterval(interval)
      }
    }

    highlightFourRandomTiles(true)
    setHiglightInterval(true)

    skillsGrid.addEventListener("mouseenter", () => {
      removeHiglights()
      setHiglightInterval(false)
    })
    skillsGrid.addEventListener("mouseleave", () => {
      highlightFourRandomTiles(true)
      setHiglightInterval(true)
    })
  }
}
</script>

<style lang="scss" scoped>
$cubic-bezier-skills-grid: cubic-bezier(0.25, 0.1, 0.36, 4.13);

.skillsGrid {
  padding-bottom: $size-skills-grid-border;
  display: grid;
  grid-template-columns: repeat(4, $size-skills-grid-width);
  grid-auto-rows: $size-skills-grid-width - $size-skills-grid-gap / 2;
  grid-column-gap: $size-skills-grid-gap;
  @media (min-width: $breakpoint-md) {
    grid-template-columns: repeat(5, $size-skills-grid-width);
  }
  @media (min-width: $breakpoint-xl) {
    grid-template-columns: repeat(6, $size-skills-grid-width);
  }

  &__skillBox {
    position: relative;
    margin: $size-skills-grid-border 0;
    display: flex;
    width: $size-skills-grid-width / 1.4;
    height: $size-skills-grid-height * 1.2;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    fill: white;

    &:before {
      position: absolute;
      width: $size-skills-grid-width;
      height: $size-skills-grid-width;
      content: "";
      background-color: $color-skills-grid-box-bg;
      transition: background-color $duration-animation-skills-grid ease;
      transform: rotate(45deg);
    }
    &:nth-child(2n + 1):before {
      background-color: rgba($color-skills-grid-box-bg, 0.3);
    }
    &:nth-child(3n + 1):before {
      background-color: rgba($color-skills-grid-box-bg, 0.6);
    }
    &:nth-child(5n + 3):before {
      background-color: rgba($color-skills-grid-box-bg, 0.8);
    }
    &:nth-child(7n + 5):before {
      background-color: rgba($color-skills-grid-box-bg, 1);
    }
    &:nth-last-child(1),
    &:nth-last-child(2) {
      display: none;
      @media (min-width: $breakpoint-lg) {
        display: flex;
      }
    }
    &:hover:before,
    &.active:before {
      background-color: $color-skills-grid-box-bg-hover;
      transition: background-color $duration-animation-skills-grid $cubic-bezier-skills-grid;
    }

    > svg {
      z-index: 0;
      height: 75%;
      transition: transform $duration-animation-skills-grid ease,
        fill $duration-animation-skills-grid $cubic-bezier-skills-grid;
      fill: $color-body-bg;
    }
    &:hover > svg,
    &.active > svg {
      transition: transform $duration-animation-skills-grid $duration-animation-skills-grid-delay
          $cubic-bezier-skills-grid,
        fill $duration-animation-skills-grid $duration-animation-skills-grid-delay
          $cubic-bezier-skills-grid;
      transform: scale(1.6) rotate(3deg);
    }
  }

  &__skillBox:nth-child(8n + 5),
  &__skillBox:nth-child(8n + 6),
  &__skillBox:nth-child(8n + 7),
  &__skillBox:nth-child(8n + 8) {
    margin-left: $size-skills-grid-width / 2 + $size-skills-grid-gap / 2;
    @media (min-width: $breakpoint-md) {
      margin-left: 0;
    }
  }

  &__skillBox:nth-child(10n + 6),
  &__skillBox:nth-child(10n + 7),
  &__skillBox:nth-child(10n + 8),
  &__skillBox:nth-child(10n + 9),
  &__skillBox:nth-child(10n + 10) {
    @media (min-width: $breakpoint-md) {
      margin-left: $size-skills-grid-width / 2 + $size-skills-grid-gap / 2;
    }
    @media (min-width: $breakpoint-xl) {
      margin-left: 0;
    }
  }
  &__skillBox:nth-child(12n + 7),
  &__skillBox:nth-child(12n + 8),
  &__skillBox:nth-child(12n + 9),
  &__skillBox:nth-child(12n + 10),
  &__skillBox:nth-child(12n + 11),
  &__skillBox:nth-child(12n + 12) {
    @media (min-width: $breakpoint-xl) {
      margin-left: $size-skills-grid-width / 2 + $size-skills-grid-gap / 2;
    }
  }
}

// Logos
@each $name, $glyph in $color-logos {
  .#{$name}:hover,
  .#{$name}.active {
    &:before {
      background-color: rgba($glyph, 0.16);
    }
    svg {
      fill: $glyph;
    }
  }
}
</style>
