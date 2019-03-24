import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/_shared/Home'
import Lancamento from './components/Lancamento/Lancamento'

Vue.use(Router);

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