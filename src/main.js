import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

AOS.init();
loadFonts()

createApp(App)
  .use(vuetify)
  .mount('#app')
