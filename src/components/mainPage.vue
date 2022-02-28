<template>
  <div>
    <div class="main-wrapper">
      <div class="author-info">
        <h1 class='author-name-info'>HELLO <br> I'M <span class='selected-text'>ABDULLAH</span> SHIRINOV</h1>
        <h2 class='author-profession'>FRONTEND DEVELOPER</h2>
        <div class="projects-resources">
          <a href="#" class="projects-resources-link">
            <i class="fab fa-github"></i>
          </a>
          <div class="resours-name">github</div>
        </div>
      </div>
      <div class="author-projects">
        <router-link :to="{name: 'profile'}">
          <div @click="openComponent" class="projects-item-button">
            <div class='mask'></div>
            <div class='projects-item-button-child'>
              <div class='projects-item-button-icon'>
                <i class="fa fa-user"></i>
              </div>
              <div class='projects-item-button-desc'>
                <h2>PR<span class='selected-text'>O</span>FILE</h2>
                <h3>Some words about me.</h3>
              </div>
            </div>
          </div>
        </router-link>
        <router-link :to="{name: 'resume'}">
          <div @click="openComponent" class="projects-item-button">
            <div class='mask'></div>
            <div class='projects-item-button-child'>
              <div class='projects-item-button-icon'>
                <i class="fa fa-graduation-cap"></i>
              </div>
              <div class='projects-item-button-desc'>
                <h2>RE<span class='selected-text'>S</span>UME</h2>
                <h3>Something about my experience and skills.</h3>
              </div>
            </div>
          </div>
        </router-link>

        <router-link :to="{name: 'projects'}">
          <div @click="openComponent" class="projects-item-button">
            <div class='mask'></div>
            <div class='projects-item-button-child'>
              <div class='projects-item-button-icon'>
                <i class="fa fa-briefcase"></i>
              </div>
              <div class='projects-item-button-desc'>
                <h2>PORT<span class='selected-text'>F</span>OLIO</h2>
                <h3>Have a spoon of my work.</h3>
              </div>
            </div>
          </div>
        </router-link>
        <router-link :to="{name: 'contact'}">
          <div @click="openComponent" class="projects-item-button">
            <div class='mask'></div>
            <div class='projects-item-button-child'>
              <div class='projects-item-button-icon'>
                <i class="fa fa-envelope-o"></i>
              </div>
              <div class='projects-item-button-desc'>
                <h2>CO<span class='selected-text'>N</span>TACT</h2>
                <h3>Say hello or find me.</h3>
              </div>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import '../styles/mainPage/mainPage.css';
export default {
  name: 'Head',
  methods: {
    handleLoadPage() {
      this.$root.pageLeft = document.querySelector('.author-info');
      this.$root.pageRight = document.querySelector('.author-projects');
      !this.$store.getters.firstLoaded
        && this.$root.pageLeft.classList.add('opened-main-left')
      !this.$store.getters.firstLoaded
        && this.$root.pageRight.classList.add('opened-main-right');
    },
    openComponent() {
      this.$root.openComponent()
    },
  },
  mounted() {
    this.handleLoadPage();
    setTimeout(() => {
      this.$root.closeComponent()
    }, 100)
  }
}
</script>
