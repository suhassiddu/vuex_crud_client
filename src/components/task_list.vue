<template>
<v-app>
	<v-layout row>
		<v-flex xs12 sm6 offset-sm3>
			<v-card>
				<v-toolbar color="indigo" dark tabs>
					
					<v-toolbar-title>Crud Tasks</v-toolbar-title>
					<v-spacer/>
					<v-btn @click="clear_completed" icon><v-icon>delete</v-icon></v-btn>
					
					<v-tabs
					color="transparent"
					slot="extension"
					grow
					v-model="active_tab"
					>
						<v-tab :key="all">All</v-tab>
						<v-tab :key="completed">Completed</v-tab>
						<v-tab :key="active">
							Active 
							<v-badge color="pink"><span slot="badge">{{ active_task_count}}</span></v-badge>
						</v-tab>
						<v-tabs-slider color="pink"/>
					</v-tabs>
				</v-toolbar>
				<br/>
				<v-tabs-items v-model="active_tab">
					<v-tab-item :key="all" :id="all">
						<loader/>
						<v-list two-line v-if="!network.isfetching" v-for="task in tasks.tasks">
							<task_item :task="task"/>
						</v-list>
					</v-tab-item>
					<v-tab-item :key="completed" :id="completed">
						<loader/>
						<v-list two-line v-if="!network.isfetching" v-for="task in completed_tasks">
							<task_item :task="task"/>
						</v-list>
					</v-tab-item>
					<v-tab-item :key="active" :id="active">
						<loader/>
						<v-list two-line v-if="!network.isfetching" v-for="task in active_tasks">
							<task_item :task="task"/>
						</v-list>
					</v-tab-item>
				</v-tabs-items>
			</v-card>
		</v-flex>
	</v-layout>

	<router-link :to="{ name: 'task_field', params: { id: false, add: true}}">
		<v-btn
		color="indigo"
		dark
		fab
		fixed
		bottom
		right
		>
			<v-icon>add</v-icon>
		</v-btn>
	</router-link>
	
	<router-view/>
</v-app>
</template>

<script>
import { mapActions, mapGetters, mapState} from 'vuex'
import store from '@/store'

import task_item from './task_item'
import loader from './loader'

export default {
	name: 'task_list',
	components: { 
		loader,
		task_item
	},
	data () {
		return {
			active_tab: null,
		}
	},
	methods: {
		...mapActions([
			'clear_completed'
		])
	},
	beforeRouteEnter( to, from, next){
		store.dispatch( 'get_tasks')
		.then( () => next())
	},
	computed: {
		...mapState([
			'tasks',
			'network'
		]),
		...mapGetters([
			'completed_tasks',
			'active_tasks',
			'active_task_count'
		])
	}

}

// <v-btn icon><v-icon>account_circle</v-icon></v-btn>
// <v-btn icon><v-icon>check_circle</v-icon></v-btn>
</script>