<template>
  <section class="skills">
    <!-- GitHub Calendar -->
    <div class="calendarSection">
      <div class="calendarSection__column">
        <h2 class="calendarSection__title fixedSize">what am I good at?</h2>

        <QuoteBlock align-right>
          Tell me and I forget,
          <br />
          teach me and I may premember,
          <br />
          involve me and I learn

          <template #cite>
            Benjamin Franklin
          </template>
        </QuoteBlock>
      </div>

      <div class="calendarSection__column">
        <TheGithubCalendarDummy @open-modalGithubCalendar="$refs.modalGithubCalendar.open()" />
      </div>
    </div>
    <SweetModal ref="modalGithubCalendar" overlay-theme="dark">
      <TheGithubCalendar />
    </SweetModal>
    <!-- GitHub Calendar End -->

    <!-- SkillsGrid Calendar -->
    <div class="gridSection">
      <div class="gridSection__column gridSection__column--quote">
        <h2 class="gridSection__title fixedSize">skills and technologies</h2>
        <div class="gridSection__desc">
          <p>
            All my experience comes from hard work, practice, hours spent on reading technical docs
            and many sleepless nights.
          </p>
          <p>
            My main focus is to provide
            <strong>high-quality code that implements the newest standards</strong>
            while remembering about
            <strong>good practices</strong>
          </p>
        </div>
      </div>

      <div class="gridSection__column gridSection__column--grid">
        <TheSkillsGrid class="gridSection__skillsGrid" />
      </div>
    </div>
    <!-- SkillsGrid Calendar End -->
  </section>
</template>

<script>
// QuoteBlock
import QuoteBlock from "@/components/QuoteBlock.vue"
// Github Calendar
import TheGithubCalendar from "@/components/TheGithubCalendar.vue"
import TheGithubCalendarDummy from "@/components/TheGithubCalendar--dummy.vue"
import { SweetModal } from "sweet-modal-vue"
// SkillsGrid
import TheSkillsGrid from "@/components/TheSkillsGrid.vue"

export default {
  components: {
    TheGithubCalendar,
    TheGithubCalendarDummy,
    SweetModal,
    TheSkillsGrid,
    QuoteBlock
  }
}
</script>

<style lang="scss" scoped>
.skills {
  padding-top: $size-section-padding-top;
  padding-bottom: $size-section-padding-bottom;
  overflow: hidden;
  @media (min-width: $breakpoint-lg) {
    padding-top: $size-section-padding-top--desktop;
    padding-bottom: $size-section-padding-bottom--desktop;
  }
}
.calendarSection {
  margin-bottom: 80px;
  @media (min-width: $breakpoint-lg) {
    margin-bottom: 200px;
    display: flex;
  }
  &__column {
    flex: 1;
    &:first-child {
      margin-bottom: 80px;
      @media (min-width: $breakpoint-lg) {
        margin-bottom: 0;
      }
    }
  }
  &__title {
    margin-right: auto;
    margin-left: auto;
    max-width: 320px;
    text-align: center;
    @media (min-width: $breakpoint-lg) {
      margin-right: $size-gutter-width;
      text-align: right;
    }
  }
}
.gridSection {
  @media (min-width: $breakpoint-lg) {
    display: flex;
  }
  &__column {
    flex: 1;
    &:first-child {
      margin-bottom: 80px;
      @media (min-width: $breakpoint-lg) {
        margin-bottom: 0;
        order: 1;
      }
    }
    &--grid {
      position: relative;
      margin-left: -($size-skills-grid-width / 2 + $size-skills-grid-gap / 2) / 2;
      padding-top: 10px;
      padding-bottom: 35px;
      display: flex;
      overflow: hidden;
      justify-content: center;
      @media (min-width: $breakpoint-lg) {
        margin-left: 0;
        height: $size-skills-grid-width * 6.7;
      }
      @media (min-width: $breakpoint-xl) {
        height: $size-skills-grid-width * 6;
      }
    }
    &--quote {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
    }
  }
  &__skillsGrid {
    @media (min-width: $breakpoint-lg) {
      position: absolute;
      right: 100px;
    }
  }
  &__title {
    margin-right: auto;
    margin-left: auto;
    max-width: 320px;
    text-align: center;
    @media (min-width: $breakpoint-lg) {
      margin-left: 0;
      text-align: left;
    }
  }
  &__desc {
    padding-right: $size-gutter-width;
    padding-left: $size-gutter-width;
    @media (min-width: $breakpoint-lg) {
      padding: 0;
      max-width: 622px;
    }
  }
}
</style>
