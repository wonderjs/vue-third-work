import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { clickOutside } from './common/directives';
import { getToken, removeToken } from '@/services/token-manager';
import { useAuthStore } from '@/stores';

import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount('#app');
app.directive('click-outside', clickOutside);

// Проверяем, если пользователь уже вошёл в систему
const token = getToken();
if (token) {
  try {
    const authStore = useAuthStore();
    await authStore.getMe();
    await router.push('/');
  } catch (e) {
    removeToken();
    console.log(e);
  }
}
