import { createApp } from 'vue';
import App from './App.vue';
import './index.css';

import BaseCard from './components/UI/BaseCard.vue';
import CustomIcon from './components/UI/Icons/CustomIcon.vue';

const app = createApp(App);

app.component('base-card', BaseCard);

app.use('custom-icon', CustomIcon);

app.mount('#app');
