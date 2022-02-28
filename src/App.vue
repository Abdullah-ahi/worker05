<template>
  <router-view v-slot="{ Component }">
    <Transition name="fade" mode="out-in">
      <component :is="Component" />
    </Transition>
  </router-view>
</template>

<script>
import './styles/global/global.css';
export default {
  name: 'App',
  data: () => ({
    pageLeft: null,
    pageRight: null,
  }),
  methods: {
    async getRepositories() {
      try {
        const res = await fetch('https://api.github.com/users/Abdullah-ahi/repos');
        const data = await res.json();
        this.$store.commit('saveRepositories', data);
        return data;
      }catch(e){
        console.log(e)
      }
    },
    checkRepositories() {
      return !this.$store.getters.repositories.length 
        ? this.getRepositories()
        : this.$store.getters.repositories
    },
    openComponent(){
      this.pageLeft.classList.add('opened-main-left');
      this.pageRight.classList.add('opened-main-right');
      this.$store.getters.firstLoaded && this.$store.commit('changeHeadState')
    },
    closeComponent() {
      this.pageLeft.classList.remove('opened-main-left');
      this.pageRight.classList.remove('opened-main-right');
    },
  },
};
</script>

<style scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition-property: opacity;
    transition-duration: .4s;
  }

  .fade-enter-active {
    transition-delay: 0s;
  }

  .fade-enter,
  .fade-leave-active {
    opacity: 0;
  }
</style>
