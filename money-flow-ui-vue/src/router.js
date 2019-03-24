import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/_shared/Home'
import Lancamento from './components/Lancamento/Lancamento'

Vue.use(Router);

Vue.component('router-link', Vue.options.components.RouterLink);
Vue.component('router-view', Vue.options.components.RouterView);

export default new Router({
    routes: [
        {
            path: '/',
            nome: 'home',
            component: Home
        },
        {
            path: '/lancamento',
            component: Lancamento
        }
    ]
})