import Vue from 'vue'
import Router from 'vue-router'
import task_list from '@/components/task_list'
import task_field from '@/components/task_field'

Vue.use(Router)

export default new Router({
	routes: [{
		path: '/',
		name: 'task_list',
		component: task_list,
	// },{
		children: [{
		path: '/:id/:add',
		component: task_field,
		props: true,
		name: 'task_field'
		}]
	}]
})
