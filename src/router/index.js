import { createRouter, createWebHistory } from 'vue-router'
import WordList from '../views/WordList.vue'
import Random from '../views/Random.vue'
const history = createWebHistory()
const routes = [
	{
		path: '/',
		name: 'WordList',
		component: WordList
	},
	{
		path: '/random',
		name: 'Random',
		component: Random
	}
]
const router = createRouter({ history, routes })
export default router
