<template>
  <layout>
    <main role="main">
      <SectionHero />
      <SectionContact />
    </main>
  </layout>
</template>

<script>
import SectionHero from "@/components/SectionHero.vue"
import SectionContact from "@/components/SectionContact.vue"

export default {
  metaInfo: {
    title: "Home Page"
  },
  components: {
    SectionHero,
    SectionContact
  }
}
</script>
