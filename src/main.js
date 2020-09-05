import { createApp } from 'vue';
import 'typeface-inter';
import App from './App.vue';
import Tetikus from 'tetikus';
import './index.css';

const app = createApp(App);
app.use(Tetikus.default);

app.mount('#app');
