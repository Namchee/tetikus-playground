import { createApp } from 'vue';
import 'typeface-inter';
import App from './App.vue';
import Tetikus from '@namchee/tetikus';
import '@namchee/tetikus/dist/tetikus.css';
import './index.css';

const app = createApp(App);
app.use(Tetikus);

app.mount('#app');
