import {
    createApp
} from 'vue'
import App from './App.vue'
import './index.css'
const app = createApp(App);
//app.config.globalProperties.$R = $R;
app.mount('#app')