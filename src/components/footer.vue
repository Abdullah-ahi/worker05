<template>
  <footer class="footer">
    <a @click="scrollToBlock($event)" :href="href" class="footer-left">ABDULLAH SHIRINOV</a>
    <span class="footer-right">Copyright &copy; 2021 All rights reserved</span>
  </footer>
</template>

<script>
  export default {
    name: 'Footer',
    props: {
      href: { type: String }
    },
    methods: {
      scrollToBlock (e) {
        e.preventDefault()
        const blockId = e.target.getAttribute('href').substr(1)
        document.querySelector(`.${blockId}`).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
    }
    }
  }
</script>

<style scoped>
  .footer {
    padding: 10px 15px;
    background:  #E94C6F;
    display: flex;
    justify-content: space-between;
    color: #fff;
    font-family: 'Open Sans', sans-serif;
  }
  .footer-left {
    cursor: pointer;
    text-decoration: none;
    color: #fff;
  }
  @media (max-width: 1200px) {
    .footer-right {
      font-size: 14px;
    }
    .footer-left {
      font-size: 15px;
    }
  }
  @media (max-width: 1200px) {
    .footer-right {
      font-size: 10px;
    }
    .footer-left {
      font-size: 10px;
    }
  }
</style>
