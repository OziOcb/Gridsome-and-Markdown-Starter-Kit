<template>
  <layout>
    <main role="main">
      <SectionHero />
      <SectionAbout />
      <SectionSkills />
      <SectionPortfolio />
      <SectionContact />
    </main>
  </layout>
</template>

<script>
import SectionHero from "@/components/SectionHero.vue"
import SectionAbout from "@/components/SectionAbout.vue"
import SectionSkills from "@/components/SectionSkills.vue"
import SectionPortfolio from "@/components/SectionPortfolio.vue"
import SectionContact from "@/components/SectionContact.vue"

export default {
  metaInfo: {
    title: "Home Page",
    meta: [
      { name: "author", content: "Paul Ozyzniewski" },
      { name: "robots", content: "index, follow, noodp, noydir" },
      {
        name: "description",
        content:
          "Paul Ozyzniewski is a Barnsley-based freelance front-end web developer. He specialises in responsive HTML5, CSS, and JavaScript (Vue.js) software development."
      },
      {
        name: "keywords",
        content:
          "HTML, CSS, JavaScript, Vue.js, Front-end, Front End Developer, Developer, Freelance"
      }
    ]
  },
  components: {
    SectionHero,
    SectionAbout,
    SectionSkills,
    SectionPortfolio,
    SectionContact
  }
}
</script>
