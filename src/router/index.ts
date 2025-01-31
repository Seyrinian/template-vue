import { createMemoryHistory, createRouter } from 'vue-router';

import HomeSreenPage from '../pages/HomeScreen.page.vue';

const routes = [{ path: '/', component: HomeSreenPage }];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
