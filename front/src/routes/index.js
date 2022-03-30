import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Details from "../pages/Details.vue";
import Edit from "../pages/Edit.vue";
import Add from "../pages/Add.vue";
const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/add', name: 'Add', component: Add },
    { path: '/edit/:id', name: 'Edit', component: Edit },
    { path: '/details/:id', name: 'Details', component: Details }
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})
