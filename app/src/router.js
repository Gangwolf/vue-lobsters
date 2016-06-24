import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import Newest from './components/Newest.vue';
import Hottest from './components/Hottest.vue';

Vue.use(VueRouter);
Vue.use(VueResource);

const router = new VueRouter({
  hashbang: false,
  history: true
});

router.map({
  '/newest': {
    name: 'newest',
    component: Newest
  },
  '/hottest': {
    name: 'hottest',
    component: Hottest
  }
});

router.redirect({
  '*': '/hottest'
});

export default router;