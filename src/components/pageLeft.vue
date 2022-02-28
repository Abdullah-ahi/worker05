
<template>
  <div class='opened-projects-item-left-container'>
    <div class='opened-item-image-mask'></div>
    <div class='opened-item-name'>
      <h2 class='opened-item-name-item'></h2>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'PageLeft',
    props: {
      componentName: { type: String, required: true }
    },
    mounted() {
      document
        .querySelector('.opened-item-name-item')
        .insertAdjacentHTML('afterbegin', this.componentName);
    }
  }
</script>
