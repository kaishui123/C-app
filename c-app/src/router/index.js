import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';

VueRouter.prototype.back = false;
VueRouter.prototype.goBack = function goBack() {
  this.back = true;
  this.go(-1);
};
Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: 'history',
  base: process.env.BASE_URL,
});

export default router;
