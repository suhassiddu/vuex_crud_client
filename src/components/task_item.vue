<template>
<div>
	<v-list-tile
	avatar
	ripple
	
	>
		<v-list-tile-content>
			<v-list-tile-title>
				<router-link :to="{ name: 'task_field', params: { id: task.id, add: false}}">
					{{ task.text}}
				</router-link>
			</v-list-tile-title>
		</v-list-tile-content>

		<v-list-tile-action>
			<v-btn @click="delete_task( { task})" icon><v-icon color="indigo" @click="toggle(index)">delete</v-icon></v-btn>
			
			<v-btn @click="toggle" icon>
				<v-icon color="pink" v-if="checked">star</v-icon>
				<v-icon color="grey lighten-1" v-else>star_border</v-icon>
			</v-btn>
		</v-list-tile-action>
	</v-list-tile>
	
</div>
</template>

<script>
import { mapActions, mapState} from 'vuex'

export default{
	name: 'task_item',
	props: [ 'task'],
	data(){
		return{
			checked: this.task.completed
		}
	},
	computed: {
		...mapState([
			'tasks'
		])
	},
	methods: {
		...mapActions([
			'toggle_task',
			'delete_task'
		]),
		toggle(){
			this.checked = !this.checked
			this.toggle_task( { task: this.task})
		}
	}
}
</script>

<style>
a {
  color: black;
  font-weight: bold;
  text-decoration: none; /* no underline */
}
</style>