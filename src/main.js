import Vue from 'vue';
import { sync } from 'vuex-router-sync';
import App from './App';
import { createRouter } from './router';
import { createStore } from './store';

export function createApp() {
  const router = createRouter();
  const store = createStore();

  sync(store, router);

  const app = new Vue({
    router,
    store,
    render: h => h(App)
  });

  return { router, store, app };
}
