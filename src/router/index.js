import { createRouter, createWebHistory } from 'vue-router'
import WordList from '../views/WordList.vue'
import Random from '../views/Random.vue'
import Home from '../views/Home.vue'
import ContactUs from '../views/ContactUs.vue'
const history = createWebHistory()
const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home
	},
	{
		path: '/word-list',
		name: 'WordList',
		component: WordList
	},
	{
		path: '/random',
		name: 'Random',
		component: Random
	},
	{
		path: '/contact',
		name: 'ContactUs',
		component: ContactUs
	}
]
const router = createRouter({ history, routes })
export default router
