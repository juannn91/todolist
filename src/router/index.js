import Vue from 'vue'
import VueRouter from 'vue-router'
import Users from '../views/Users.vue'
import TodoList from '../views/TodoList.vue';
import HomePage from '../views/HomePage.vue';
import Contact from '../views/Contact.vue';
Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: HomePage
    },
    {
        path: '/todoList',
        name: 'TodoList',
        component: TodoList
    },
    {
        path: '/Users',
        name: 'Users',
        component: Users
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router