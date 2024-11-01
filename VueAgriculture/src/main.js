// src/main.js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router/'; // Mengimpor router
import './index.css';

const app = createApp(App);
app.use(router); // Menggunakan router dalam aplikasi
app.mount('#app');
