<template>
  <layout>
    <main role="main">
      <SectionHero />
    </main>
  </layout>
</template>

<script>
import SectionHero from "@/components/SectionHero.vue"

export default {
  metaInfo: {
    title: "Home Page"
  },
  components: {
    SectionHero
  }
}
</script>
