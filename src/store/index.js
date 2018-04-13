import vue from 'vue'
import vuex from 'vuex'
import vue_resource from 'vue-resource'

import tasks from './tasks'
import loader from './loader'
import network from './network'

vue.use( vuex)
vue.use( vue_resource)

export default new vuex.Store({
	modules: {
		tasks,
		loader,
		network
	}
})