import { createRouter, createWebHistory } from 'vue-router';
import LandingPage from '../pages/Home/LandingPage.vue';
import HasilTangkapan from '../pages/Market/HasilTangkapan.vue';

const routes = [
  { path: '/', component: LandingPage },
  { path: '/hasil-tangkapan', component: HasilTangkapan },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
