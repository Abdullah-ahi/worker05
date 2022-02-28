<template>
  <div class="about-done-projects-block">
    <div class="done-projects-count-block">
      <h3 class="done-projects-count-text">PROJECTS DONE</h3>
      <span class="done-projects-count-value">{{ this.$store.getters.repositories.length }}</span>
    </div>
  </div>
</template>

<script>

export default {
  name: 'DoneProjects',
}
</script>
