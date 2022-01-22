import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import App from './App.vue';
import Home from './components/Home/Home.vue';
import ArticleList from './components/Home/ArticleList.vue';
import Article from './components/Article.vue';
import About from './components/About.vue';
import 'virtual:windi.css';

const router = createRouter({
  base: './',
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/blog/',
      name: 'BlogList',
      component: ArticleList,
    },
    {
      path: '/blog/:title',
      name: 'Blog',
      component: Article,
    },
    {
      path: '/about',
      name: 'About',
      component: About,
    },
  ],
});

createApp(App).use(router).mount('#app');