import VueRouter from 'vue-router'
import homePage from './components/homePage.vue'

export default new VueRouter({
    routes:[
        {
            path: '',
            component: homePage
        }
    ],
    mode: 'history'
})