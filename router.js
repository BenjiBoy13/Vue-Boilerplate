import Vue from 'vue';
import Router from 'vue-router';
import Home from "./src/vue/components/Home";

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: '/',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
    ]
})