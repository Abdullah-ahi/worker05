import { createRouter, createWebHashHistory } from "vue-router";
import Head from '../components/mainPage'
import profile from '../components/profile';
import resume from '../components/resume';
import portfolio from '../components/portfolio';
import contact from '../components/contact';

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Head,
    },
    {
      path: '/profile',
      name: 'profile',
      component: profile,
    },
    {
      path: '/resume',
      name: 'resume',
      component: resume,
    },
    {
      path: '/projects',
      name: 'projects',
      component: portfolio,
    },
    {
      path: '/contact',
      name: 'contact',
      component: contact,
    }
  ]
})
