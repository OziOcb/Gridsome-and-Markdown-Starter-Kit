<template>
  <div class="theAboutMeGallery" :style="cssProps">
    <SvgAboutMeBackgroundGrid class="theAboutMeGallery__backgroundFigure" />

    <div class="theAboutMeGallery__secondaryFigure">
      <g-image
        class="theAboutMeGallery__secondaryImg"
        quality="90"
        :src="secondaryImgSrc(galleryDetails.secondaryImg)"
        :alt="secondaryAlt()"
      />
    </div>

    <div class="theAboutMeGallery__primaryFigure">
      <g-image
        class="theAboutMeGallery__primaryImg"
        quality="90"
        :src="primaryImgSrc(galleryDetails.primaryImg)"
        :alt="primaryAlt()"
      />
    </div>
  </div>
</template>

<script>
import SvgAboutMeBackgroundGrid from "~/assets/img/svg/aboutMeBackgroundGrid.svg"

export default {
  components: {
    SvgAboutMeBackgroundGrid
  },
  props: {
    galleryDetails: {
      type: Object,
      default: () => ({
        primaryImg: "portrait-default",
        primaryAlt: "",
        primaryOverlayColor: "",
        secondaryImg: "theAboutMeGallerySecondary",
        secondaryAlt: "",
        secondaryOverlayColor: ""
      })
    }
  },
  computed: {
    cssProps() {
      const { primaryOverlayColor, secondaryOverlayColor } = this.galleryDetails
      return {
        "--color-overlay-primary": primaryOverlayColor,
        "--color-overlay-secondary": secondaryOverlayColor
      }
    }
  },
  methods: {
    primaryImgSrc(imgName = "portrait-default") {
      return require(`!!assets-loader?width=250!~/assets/img/jpg/${imgName}.jpg`)
    },
    secondaryImgSrc(imgName = "theAboutMeGallerySecondary") {
      return require(`!!assets-loader?width=380!~/assets/img/jpg/${imgName}.jpg`)
    },
    primaryAlt() {
      return this.galleryDetails.primaryAlt ? this.galleryDetails.primaryAlt : ""
    },
    secondaryAlt() {
      return this.galleryDetails.secondaryAlt ? this.galleryDetails.secondaryAlt : ""
    }
  }
}
</script>

<style lang="scss" scoped>
.theAboutMeGallery {
  display: flex;
  justify-content: center;

  &__primaryFigure,
  &__secondaryFigure {
    &:before,
    &:after {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      content: "";
    }
    &:before {
      left: -400px;
      width: 400px;
      opacity: 0.15;
      background: linear-gradient(
        90deg,
        transparent 0%,
        $color-white 40%,
        $color-white 90%,
        transparent 95%
      );
      transform: skewX(25deg);
      animation: imageGlare $duration-animation-about-me-gallery-base linear infinite;
    }
  }

  &__primaryFigure {
    position: relative;
    overflow: hidden;
    width: 250px;
    height: 290px;
    border: 5px solid $color-white;
    box-shadow: 0px 0.6em 1.25em $color-button-shadow;
    transition: background $duration-animation-base linear,
      box-shadow $duration-animation-base linear, transform $duration-animation-base linear;
    &:hover {
      box-shadow: 0px 1.25em 2.5em $color-button-shadow;
      transform: scale(1.03) rotate(1deg);
    }

    &:before {
      animation-delay: 1.25s;
    }
    &:after {
      background-color: var(--color-overlay-primary, rgba($color-primary, 0.25));
    }
  }

  &__secondaryFigure {
    position: relative;
    display: none;
    overflow: hidden;
    width: 380px;
    height: 380px;
    box-shadow: 0px 0.3em 0.6em $color-button-shadow;
    transition: box-shadow $duration-animation-base linear,
      transform $duration-animation-base linear;
    &:hover {
      box-shadow: 0px 0.6em 1.2em $color-button-shadow;
      transform: scale(1.03) rotate(1deg);
    }

    &:after {
      background-color: var(--color-overlay-secondary, rgba($color-secondary, 0.75));
      transition: opacity $duration-animation-base linear;
    }
    &:hover:after {
      opacity: 0.75;
    }
  }

  &__backgroundFigure {
    display: none;
    transition: transform $duration-animation-base linear;
    &:hover {
      transform: scale(1.05) rotate(-1deg);
    }
  }

  &__primaryImg,
  &__secondaryImg {
    transition: transform $duration-animation-base * 2 ease-in-out;
    :hover > & {
      transform: scale(1.2) rotate(-5deg);
    }
  }

  // GRID
  @media (min-width: $breakpoint-md) {
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 30px;
    grid-template-rows: 20px 30px;
    max-width: 450px;
    &__primaryFigure {
      grid-column: 2;
      grid-row: 2;
      justify-self: end;
    }
    &__secondaryFigure {
      display: block;
      grid-column: 1 / span 2;
      grid-row: 1 / span 3;
    }
    &__backgroundFigure {
      display: block;
      grid-column: 3;
      grid-row: 3;
      justify-self: end;
    }
  }
  @media (min-width: $breakpoint-xl) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 110px 160px;
    max-width: 515px;
    &__primaryFigure {
      grid-column: 2;
      grid-row: 1;
      justify-self: start;
    }
    &__secondaryFigure {
      grid-column: 1 / span 2;
      grid-row: 2;
    }
    &__backgroundFigure {
      grid-column: 2;
      grid-row: 3;
    }
  }
}

// ANIMATIONS
@keyframes imageGlare {
  50%,
  100% {
    transform: skewX(0deg) translateX(800px);
  }
}
</style>
