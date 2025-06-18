import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import PrimeVue from 'primevue/config'
import AnimateOnScroll from 'primevue/animateonscroll'
import 'primeflex/primeflex.css';

let texts = {
};
async function initializeTexts() {
    // texts = await fetchDataFromAPI(`texts`);
}


router.beforeEach((to, from, next) => {
    window.scrollTo(0, 0);
    next();
});

async function initializeApp() {
    await initializeTexts(); // Ensure texts are loaded before proceeding

    const app = createApp(App);
    app.use(PrimeVue)
    app.directive('animateonscroll', AnimateOnScroll)
    app.use(router);
    app.use(ElementPlus);
    app.mount('#app');
}

initializeApp();

