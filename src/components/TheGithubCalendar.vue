<template>
  <div class="calendar">
    <!-- Loading stuff -->
    Loading the data just for you.
  </div>
</template>

<script>
import GithubCalendar from "github-calendar"

export default {
  mounted() {
    GithubCalendar(".calendar", "OziOcb", {
      responsive: true
    })
  }
}
</script>

<style lang="scss">
.calendar {
  font-family: Helvetica, sans-serif;
  border-radius: 0.625em;
}

.calendar-graph {
  padding: 0.25em 0 0;

  text.wday,
  text.month {
    font-size: 0.75em;
    fill: #aaa;
  }
  /* level 1 (no commits) */
  rect.day[fill="#ebedf0"] {
    fill: rgba($color-github-calendar-single-commit-bg, 0.05);
  }
  /* level 2 */
  rect.day[fill="#c6e48b"] {
    fill: rgba($color-github-calendar-single-commit-bg, 0.3);
  }
  /* level 3 */
  rect.day[fill="#7bc96f"] {
    fill: rgba($color-github-calendar-single-commit-bg, 0.6);
  }
  /* level 4 */
  rect.day[fill="#239a3b"] {
    fill: rgba($color-github-calendar-single-commit-bg, 0.8);
  }
  /* level 5 */
  rect.day[fill="#196127"] {
    fill: rgba($color-github-calendar-single-commit-bg, 1);
  }
}

.contrib-column {
  padding: 0.625em 0;
  font-size: 0.75rem;
  border-top: 1px solid #ddd;
}

.table-column {
  text-align: center;
}

.contrib-number {
  display: block;
  font-size: 2rem;
  line-height: 1.3em;
  font-weight: 400;
  color: #333;
}

#user-activity-overview,
.contrib-footer {
  display: none;
}
</style>
