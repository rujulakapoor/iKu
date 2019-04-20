import Vue from 'vue'
import Router from 'vue-router'
import MainComponent from './App.vue'
//import Secure from "./Secure.vue"

Vue.use(Router);

let router = new Router({
    base: process.env.BASE_URL,
    routes: [ 
        {
            path: "/",
            name: "home",
            component: MainComponent
        },
        {
            path: "/Secure",
            name: "Secure",
            component: () => import("./views/Secure.vue")
            //component: SecureComponent
        }
    ]
});

export default router;
