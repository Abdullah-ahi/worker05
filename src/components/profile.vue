<template> 
    <div class='component-wrapper'>
      <pageLeft :componentName="componentName"></pageLeft>
      <closeButton />
      <div class="page-right">
        <div class="about-me-block-wrapper">
          <div class='about-me-block'>
            <h2 class="profile-head-text">STORY OF GLORY</h2>
            <div class="profile-main-block">
              <img class="profile-main-img" src="../images/profile-main.jpg" alt="profile-photo">
              <div class="profile-main-block-text">
                <p class="profile-main-block-text-item">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quaerat ea, tempore eius facilis culpa in. Consequuntur nemo ipsam inventore maxime aut molestiae temporibus voluptatem, totam perspiciatis magnam dolorem impedit?</p>
                <p class="profile-main-block-text-item">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quaerat ea, tempore eius facilis culpa in. Consequuntur nemo ipsam inventore maxime aut molestiae temporibus voluptatem, totam perspiciatis magnam dolorem impedit?</p>
                <p class="profile-main-block-text-item">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quaerat ea, tempore eius facilis culpa in. Consequuntur nemo ipsam inventore maxime aut molestiae temporibus voluptatem, totam perspiciatis magnam dolorem impedit?</p>
              </div>
            </div>
          </div>
        </div>
        <div class="what-can-i-do-block">
          <h2 class="what-can-i-do-block-main-text">WHAT CAN I DO?</h2>
          <section class="what-can-i-do-cards">
            <div class="what-can-i-do-cards-item web-development-card">
              <div class="what-can-i-do-cards-item-icon-block">
                <i class="fa fa-code"></i>
              </div>
              <h3 class="what-can-i-do-cards-item-head-text">WEB DEVELOPMENT</h3>
              <p class="what-can-i-do-cards-item-body-text">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem assumenda, architecto at perspiciatis ea sit beatae fuga dignissimos, dolorum ratione commodi quo quia officia libero sed, consequuntur qui quas cumque?
              </p>
            </div>
            <div class="what-can-i-do-cards-item accounting-card">
              <div class="what-can-i-do-cards-item-icon-block">
                <i class="fas fa-calculator"></i>
              </div>
              <h3 class="what-can-i-do-cards-item-head-text">ACCOUNTING</h3>
              <p class="what-can-i-do-cards-item-body-text">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem assumenda, architecto at perspiciatis ea sit beatae fuga dignissimos, dolorum ratione commodi quo quia officia libero sed, consequuntur qui quas cumque?
              </p>
            </div>
          </section>
        </div>
        <DoneProjects/>
        <Footer :href="scrollBlock"/>
      </div>
    </div>
</template>

<script>
  import '../styles/profile/profile.css';
  import pageLeft from './pageLeft.vue';
  import closeButton from './closeButton.vue';
  import Footer from './footer.vue';
  import DoneProjects from './doneProjects.vue';

  export default {
    name: 'Profile',
    components: {
      pageLeft,
      closeButton,
      Footer,
      DoneProjects
    },
    data: () => ({
      componentName: 'PR<span class="selected-letter">O</span>FILE',
      scrollBlock: ".about-me-block"
    }),
    mounted() {
      this.$root.checkRepositories();
    }
  }
</script>