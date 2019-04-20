import Vue from 'vue'
import Router from 'vue-router'
import MainComponent from './App.vue'
import SecureComponent from "./components/secure.vue"

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: "/secure",
            name: "secure",
            component: SecureComponent
        },
        {
            path: "/",
            name: "home",
            component: MainComponent
        }
    ]
})