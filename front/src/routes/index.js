import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import { createRouter, createWebHistory } from 'vue-router'
const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/about', name: 'About', component: About },
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})
