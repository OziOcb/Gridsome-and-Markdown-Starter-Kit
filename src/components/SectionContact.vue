<template>
  <section id="contactMe" class="contact container">
    <div class="contact__column">
      <h2 class="contact__title fixedSize">how to contact me?</h2>
      <p class="contact__desc">
        Contact me if you are looking for
        <strong>talented</strong>
        and
        <strong>hard working</strong>
        Front End Developer!
      </p>
    </div>

    <div class="contact__column">
      <ContactMeForm class="contact__contactForm" />
    </div>
  </section>
</template>

<script>
import ContactMeForm from "@/components/ContactMeForm.vue"
export default {
  components: {
    ContactMeForm
  }
}
</script>

<style lang="scss" scoped>
.contact {
  padding-top: $size-section-padding-top;
  padding-bottom: $size-section-padding-bottom;
  @media (min-width: $breakpoint-xl) {
    padding-top: $size-section-padding-top--desktop;
    padding-bottom: $size-section-padding-bottom--desktop;
    display: flex;
  }

  &__column {
    flex: 1;
  }

  &__title {
    text-align: center;
    @media (min-width: $breakpoint-xl) {
      margin-top: 0.2em;
      margin-left: auto;
      padding-right: $size-gutter-width;
      max-width: 360px;
      text-align: right;
    }
  }

  &__desc {
    @media (min-width: $breakpoint-md) {
      text-align: center;
    }
    @media (min-width: $breakpoint-xl) {
      margin-left: auto;
      padding-right: $size-gutter-width;
      max-width: 360px;
      text-align: right;
    }
  }
}
</style>
