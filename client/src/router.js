import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home';

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: '/',
    routes: [
        {
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/create",
            name: "create",
            component: () => import("./views/Create.vue")
        },
        {
            path: "*",
            name: "error",
            component: () => import("./views/Error.vue")
       }
    ]
});


