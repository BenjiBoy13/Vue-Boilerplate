// Importing Vue JS Elements
import Vue from 'vue';
import router from './router';

// Main Component
import Main from "./src/vue/Main";

// Importing Styles
import "./app.scss";

// Initializing Vue JS
new Vue({
    render: createEl => createEl(Main),
    router: router
}).$mount('#app');