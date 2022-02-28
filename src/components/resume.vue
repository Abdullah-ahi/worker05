<template>
  <div class="component-wrapper">
    <pageLeft :componentName="componentName"></pageLeft>
    <div class="page-right">
      <closeButton></closeButton>
      <div class="education-block-wrapper">
        <div class="education-block">
          <h2 class="education-block-head-text">EDUCATION</h2>
          <div class="education-block-main">
            <div class="education-block-main-content">
              <div class="education-block-main-item">
                <div class="education-block-main-bullet"></div>
                <div class="education-block-main-item-head">GEEKBRAINS / <span class="education-years">August 2020 - February 2021</span></div>
              </div>
              <div class="education-block-main-item-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, optio quisquam in architecto error tempora eius blanditiis aliquid dolorum velit sint necessitatibus dolor alias voluptate. Quibusdam harum amet mollitia pariatur.</div>
            </div>
            <div class="education-block-main-content">
              <div class="education-block-main-item">
                <div class="education-block-main-bullet"></div>
                <div class="education-block-main-item-head">Moscow University of Finance and Law / <span class="education-years">September 2016 - June 2019</span></div>
              </div>
              <div class="education-block-main-item-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, optio quisquam in architecto error tempora eius blanditiis aliquid dolorum velit sint necessitatibus dolor alias voluptate. Quibusdam harum amet mollitia pariatur.</div>
            </div>
          </div>
        </div>
      </div>
      <div class="experience-block-wrapper">
        <h2 class="experience-block-head">EXPERIENCE</h2>
        <div class="experience-block-main">
          <div class="experience-block-main-content">
            <div class="experience-block-main-item">
              <div class="experience-block-main-item-head">
                <p class="profession">Frontend developer (training) / <span class="working-years">August 2020 - Today</span></p>
                <span class="worked-company-name">GeekBrains</span>
              </div>
              <div class="experience-block-bullet"></div>
            </div>
            <div class="experience-block-main-item-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur impedit, cum asperiores placeat fugiat iure ea laborum dolorum maiores? Ducimus culpa dolore quas voluptatem illum reprehenderit veritatis, voluptates itaque cumque?</div>
          </div>
          <div class="experience-block-main-content">
            <div class="experience-block-main-item">
              <div class="experience-block-main-item-head">
                <p class="profession">Assistant accountant / <span class="working-years">December 2019 - June 2020</span></p>
                <span class="worked-company-name">Consteel 24</span>
              </div>
              <div class="experience-block-bullet"></div>
            </div>
            <div class="experience-block-main-item-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur impedit, cum asperiores placeat fugiat iure ea laborum dolorum maiores? Ducimus culpa dolore quas voluptatem illum reprehenderit veritatis, voluptates itaque cumque?</div>
          </div>
        </div>
      </div>
      <div class="skills-block-wrapper">
        <h2 class="skills-block-head">
          SKILLS
        </h2>
        <section class="skills-block-main">
          <div class="skills-main-item">
            <span>Development</span>
<!--            <apexchart type="donut" :options="DevOptions" :series="DevSeries"></apexchart>-->
          </div>
          <div class="skills-main-item">
            <span>Accounting</span>
<!--            <apexchart type="donut" :options="AccOptions" :series="AccSeries"></apexchart>-->
          </div>
        </section>
      </div>
      <Footer :href="scrollBlock"/>
    </div>
  </div>
</template>

<script>
  import pageLeft from './pageLeft';
  import closeButton from './closeButton';
  import '../styles/resume/resume.css';
  import Footer from './footer.vue';
  export default {
    name: 'Resume',
    components: {
      pageLeft,
      closeButton,
      Footer,
    },
    data: () => ({
      componentName: 'RE<span class="selected-letter">S</span>UME',
      scrollBlock: '.education-block-main',
      DevOptions: {
        labels: ['Development skills', ''],
        label: 'Development',
        chart: {
          type: 'donut',
          sparkline: {
            enabled: true,
          }
        },
        plotOptions: {
          pie: {
            donut: {
              labels: {
                show: true,
              }
            }
          }
        },
      },
      DevSeries: [70, 30],
      AccOptions: {
        labels: ['Accounting skills', ''],
        label: 'Accounting',
        chart: {
          type: 'donut',
          sparkline: {
            enabled: true,
          }
        },
        plotOptions: {
          pie: {
            donut: {
              labels: {
                show: true,
              }
            }
          }
        },
      },
      AccSeries: [50, 50]
    }),
    mounted() {
      this.$root.checkRepositories();
    }
  }
</script>
