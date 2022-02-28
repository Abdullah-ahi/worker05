<template>
  <div class="component-wrapper">
    <div class="contact-mask" v-show="showResponse"></div>
    <div class="response-block" v-show="showResponse">
      <div class="close-info" @click="handleFeedbackBlock(0)">×</div>
      <h3 class="response-text">{{ serverResponse }}</h3>
      <span class="response-smile">{{ responseSmile }}</span>
    </div>
    <pageLeft :componentName="componentName"></pageLeft>
    <div class="page-right">
      <closeButton></closeButton>
      <div class="contact-block-wrapper">
        <div class="contact-block">
          <h2 class="contact-block-head">SAY HELLO!</h2>
          <form action="#" class="contact-form">
            <input
              type="text"
              class="name-input"
              placeholder="Your Name*"
              v-model="userName"
            />
            <small v-show="invalidName">Неверный формат имени</small>
            <input
              type="email"
              name="email"
              id="email"
              class="email-input"
              placeholder="Your Email*"
              v-model="userEmail"
            />
            <small v-show="invalidEmail">Неверный формат эл. почты</small>
            <textarea
              name="user-message"
              id="user-message"
              cols="30"
              rows="10"
              class="message-input"
              placeholder="Your Message...*"
              v-model="userMessage"
            />
            <small v-show="invalidMessage">Напишите ваше сообщение</small>
            <input type="submit" value="SEND" class="form-submit-btn" @click="handleSendMessage($event)">
          </form>
        </div>
        <div class="map-block">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d143693.81623246707!2d37.6111104!3d55.754751999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sru!4v1625174025693!5m2!1sru!2sru;"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
          >
          </iframe>
        </div>
        <div class="contact-details-block">
          <h2 class="contact-details-head">CONTACT DETAILS</h2>
          <section class="contact-items">
            <div class="contact-item">
              <i class="fa fa-map-marker"></i>
              <span>121 King St, Melbourne VIC</span>
            </div>
            <div class="contact-item">
              <i class="fa fa-phone"></i>
              <span>+7 999 826 3596</span>
            </div>
            <div class="contact-item">
              <i class="fa fa-envelope"></i>
              <span>www.sar.ras@gmail.com</span>
            </div>
            <div class="contact-item">
              <i class="fa fa-globe"></i>
              <span>www.example.com</span>
            </div>
          </section>
          <div class="social-media">
            <a href="#" class="social-media-item fa fa-facebook">
              <span class="social-media-name">Facebook</span>
            </a>
            <a href="#" class="social-media-item fa fa-twitter">
              <span class="social-media-name">Twitter</span>
            </a>
            <a href="#" class="social-media-item fa fa-google">
              <span class="social-media-name">Google</span>
            </a>
            <a href="#" class="social-media-item fa fa-linkedin">
              <span class="social-media-name">Linkedin</span>
            </a>
          </div>
        </div>
        <Footer :href="scrollBlock"/>
      </div>
    </div>
  </div>
</template>

<script>
  import pageLeft from './pageLeft';
  import closeButton from './closeButton';
  import '../styles/contact/contact.css';
  import '../styles/global/global.css';
  import Footer from './footer.vue';

  import emailjs from 'emailjs-com';

  export default {
    name: 'Contact',
    components: {
      pageLeft,
      closeButton,
      Footer,
    },
    data: () =>({
      componentName: `CO<span class="selected-letter">N</span>TACT`,
      scrollBlock: '.contact-block-head',
      userName: '',
      userEmail: '',
      userMessage: '',
      serverResponse: 'Some response',
      responseSmile: ':)',
      showResponse: false,
      invalidName: false,
      invalidEmail: false,
      invalidMessage: false,
    }),
    methods: {
      async handleSendMessage(e) {
        e.preventDefault();
        this.formDataValid() && this.sendFeedback();
      },
      sendFeedback() {
        const templateParams  = {
          name: this.userName,
          email: 'www.sar.ras@gmail.com',
          subject: this.userEmail,
          message: this.userMessage,
        }
        emailjs.send('service_bq53jof', 'template_xt6x62o', templateParams, 'user_j7ZdIE9gU96h8ixZW9koA')
          .then((response) => {
            console.log('SUCCESS', response.status, response.text);
            this.handleShowResponse(true)
          }, (error) => {
            console.log('FAILED... ', error);
            this.handleShowResponse(false);
          })
      },
      formDataValid() {
        const validName = /[A-Za-zА-Яа-я]{2,15}$/gi.test(this.userName);
        const validEmail = /(?=.*[a-zA-Z0-9.]{2,15})(?=.*[a-zA-Z])(?=.*[a-zA-Z])/gi.test(this.userEmail);
        const validMessage = /[A-Za-zА-Яа-я]{2,500}$/gi.test(this.userMessage);
        !validName ? this.invalidName = true : this.invalidName = false;
        !validEmail ? this.invalidEmail = true : this.invalidEmail = false;
        !validMessage ? this.invalidMessage = true : this.invalidMessage = false;
        
        return validName && validEmail && validMessage;
      },
      handleShowResponse(sent) {
        if (sent) {
          this.serverResponse = 'Письмо отправлено. Спасибо за обратную связь!';
          this.responseSmile = ':)';
          this.clearInputs();
        } else {
          this.serverResponse = 'По техническим причинам письмо не отправлено';
          this.responseSmile = ':(';
        }
        this.handleFeedbackBlock(1);
      },
      handleFeedbackBlock(operation) {
        operation === 0
          ? this.showResponse = false
          : this.showResponse = true;
      },
      clearInputs() {
        this.userName = '';
        this.userEmail = '';
        this.userMessage = '';
      },
    },
    mounted() {
      this.$root.checkRepositories();
    }
  }
</script>
<style scoped>
small {
  color: red;
  margin-left: 15px;
}
</style>