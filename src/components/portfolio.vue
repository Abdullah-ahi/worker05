<template>
  <div class="component-wrapper">
    <div class="portfolio-block-mask" v-show="showRepoDesc" @click="closeRepoDesc"></div>
    <div class="repo-info-block" v-show="showRepoDesc">
      <div class="close-info" @click="closeRepoDesc">×</div>
      <img src="../images/repo-img.jpg" alt="repo-img" class="repo-info-block-img">
      <div class="info-block-main">
        <h3>{{openedRepoName}}</h3>
        <p>{{openedRepoDesc}}</p>
        <a href="#">Preview</a>
      </div>
    </div>
    <pageLeft :componentName="componentName"></pageLeft>
    <div class="page-right">
      <closeButton></closeButton>
      <div class="portfolio-block-wrapper">
        <div class="portfolio-block">
          <h2 class="portfolio-block-head">PORTFOLIO</h2>
          <nav class="portfolio-nav">
            <div class="portfolio-nav-item" @click="handleClick($event, 'showAll')">All</div>
            <div class="portfolio-nav-item" @click="handleClick($event, 'showReact')">React.js</div>
            <div class="portfolio-nav-item" @click="handleClick($event, 'showLayout')">Layout</div>
            <div class="portfolio-nav-item" @click="handleClick($event, 'showVue')">Vue.js</div>
          </nav>
          <section class="repos-section" >

            <div v-show="showAll" 
              class="repo-card"
              v-for="repo in allRepos"
              :key="repo.name"
            >
              <div class="repo-card-mask"></div>
              <span>{{repo.name}}</span>
              <div class="repo-card-btns">
                <a href="#" class="repo-card-link">
                  <i class="fas fa-link"></i>
                </a>
                <a href="#" class="repo-card-link" @click="handleOpenRepoDesc(repo, $event)">
                  <i class="fas fa-search"></i>
                </a>
              </div>
            </div>

            <div v-show="showReact"
              class="repo-card"
              v-for="repo in react"
              :key="repo.desc"
            >
              <div class="repo-card-mask"></div>
              <span>{{repo.name}}</span>
              <div class="repo-card-btns">
                <a href="#" class="repo-card-link">
                  <i class="fas fa-link"></i>
                </a>
                <a href="#" class="repo-card-link" @click="handleOpenRepoDesc(repo, $event)">
                  <i class="fas fa-search"></i>
                </a>
              </div>
            </div>

            <div v-show="showLayout"
              class="repo-card"
              v-for="repo in layout"
              :key="repo.archive_url"
            >
              <div class="repo-card-mask"></div>
              <span>{{repo.name}}</span>
              <div class="repo-card-btns">
                <a href="#" class="repo-card-link">
                  <i class="fas fa-link"></i>
                </a>
                <a href="#" class="repo-card-link" @click="handleOpenRepoDesc(repo, $event)">
                  <i class="fas fa-search"></i>
                </a>
              </div>
            </div>

            <div v-show="showVue"
              class="repo-card"
              v-for="repo in vue"
              :key="repo.url"
            >
              <div class="repo-card-mask"></div>
              <span>{{repo.name}}</span>
              <div class="repo-card-btns">
                <a href="#" class="repo-card-link">
                  <i class="fas fa-link"></i>
                </a>
                <a href="#" class="repo-card-link" @click="handleOpenRepoDesc(repo, $event)">
                  <i class="fas fa-search"></i>
                </a>
              </div>
            </div>
          </section>
          <DoneProjects />
          <Footer :href="scrollBlock"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import pageLeft from './pageLeft';
  import closeButton from './closeButton';
  import '../styles/global/global.css';
  import '../styles/portfolio/portfolio.css';
  import DoneProjects from './doneProjects.vue';
  import Footer from './footer.vue';

  export default {
    name: 'Portfolio',
    components: {
      pageLeft,
      closeButton,
      DoneProjects,
      Footer,
    },
    data: () =>({
      componentName: 'PORT<span class="selected-letter">F</span>OLIO',
      allRepos: [],
      react: [],
      layout: [],
      vue: [],
      showAll: true,
      showReact: false,
      showLayout: false,
      showVue: false,
      prevGroup: 'showAll',
      openedRepoName: 'Project Name',
      openedRepoDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum possimus doloremque iure odio praesentium repellendus consectetur amet eius illo! Quis inventore deserunt ab voluptatum eveniet reprehenderit, eligendi fuga accusamus eum.',
      showRepoDesc: false,
      selectedGroupClass: 'selected-repos-group',
      scrollBlock: '.portfolio-block-head',
    }),
    methods: {
      handleRepos(repos){
        this.allRepos = repos;
        repos.forEach((repo) => {
          if (/React/ig.test(repo.description)){
            this.react.push(repo)
          }
          if (/Vue/ig.test(repo.description)){
            this.vue.push(repo)
          }
          if (/Layout/ig.test(repo.description)) {
            this.layout.push(repo)
          }
        })
      },
      handleClick(event, key) {
        this.prevGroup ? this[this.prevGroup] = false : null;
        this[key] = true
        this.prevGroup = key;
        this.switchReposGroup(event)
      },
      switchReposGroup(event) {
        const prevReposGroup = document.querySelector(`.${this.selectedGroupClass}`)
        prevReposGroup.classList.remove(this.selectedGroupClass);
        event.target.classList.add(this.selectedGroupClass);
      },
      handleOpenRepoDesc(repo) {
        this.openedRepoName = repo.name;
        this.openedRepoDesc = repo.description;
        this.showRepoDesc = true;
      },
      closeRepoDesc() {
        this.showRepoDesc = false;
      },
      setSelectedReposGroup() {
        const reposBtns = Array.from(
          document.querySelectorAll('.portfolio-nav-item')
        );
        this.showAll && reposBtns[0].classList.add(this.selectedGroupClass);
        this.showReact && reposBtns[1].classList.add(this.selectedGroupClass);
        this.showLayout && reposBtns[2].classList.add(this.selectedGroupClass);
        this.showVue && reposBtns[3].classList.add(this.selectedGroupClass);
      }


    //METHODS
    },
    async mounted() {
      const repos = await this.$root.checkRepositories()
      this.handleRepos(repos)
      this.setSelectedReposGroup();
    }
  }
</script>

<style scoped>
</style>
