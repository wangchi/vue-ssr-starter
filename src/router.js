import Vue from 'vue';
import Router from 'vue-router';
import Home from './pages/Home';
import HomeChildren from './pages/Home/HomeChildren';
import Login from './pages/Login';

Vue.use(Router);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    children: [
      {
        path: '/children',
        name: 'children',
        component: HomeChildren
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  }
];

export function createRouter() {
  return new Router({
    mode: 'history',
    routes
  });
}
