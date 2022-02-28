
<template>
  <router-link :to="{name: 'home'}">
    <div class='close-projects-item-btn'></div>
  </router-link>
</template>

<script>
  export default {
    name: 'CloseButton',
    methods: {
      // closeComponent(){
      //   setTimeout(() => {
      //     this.$root.closeComponent()
      //   }, 500)
      // },
    },
  }
</script>
