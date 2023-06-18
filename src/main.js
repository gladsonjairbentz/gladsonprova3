import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { pinia } from './store';
import vuetify from './plugins/vuetify';

createApp(App)
  .use(router)
  .use(pinia)
  .use(vuetify)
  .mount('#app');
