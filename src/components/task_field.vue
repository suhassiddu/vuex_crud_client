<template>
<v-dialog v-model="dialog" persistent max-width="500px">
	<v-card>
		<v-card-text>
			<v-text-field label="Text" v-model="text"></v-text-field>
		</v-card-text>
		<v-card-actions>
			<v-spacer/>
			<v-btn flat color="primary" @click.native="done_edit" v-if="add">Add</v-btn>
			<v-btn flat color="primary" @click.native="done_edit" v-else>Update</v-btn>
			
			<v-btn flat color="primary" @click.native="cancel_edit">Cancel</v-btn>
		</v-card-actions>
	</v-card>
</v-dialog>
</template>

<script>
import { mapState, mapActions} from 'vuex'
import router from '@/router'

export default{
	name: 'task_field',
	props: [ 'id', 'add'],
	data(){
		return{
			text: '',
			dialog: false
		}
	},
	created(){
		this.text = this.add ? '' : this.task.text
		
		setTimeout(() => {
			this.dialog = true
		}, 0)
	},
	computed: {
		...mapState([
			'tasks'
		]),
		task(){
			if( this.add) return false
			
			const length = this.tasks.tasks.length
			for( let i=0; i<length; i++){
				const task = this.tasks.tasks[ i]
				
				if( task.id === this.id){
					// this.text = task.text
					return task
				}
			}
		}
	},
	methods: {
		...mapActions([
			'edit_task',
			'delete_task',
			'add_task'
		]),
		done_edit(){
			const trim_text = this.text.trim()
		
			if( this.add){
				if( trim_text) this.add_task( { text: trim_text})
			}
			else{
				if( trim_text) this.edit_task( { task: this.task, text: trim_text})
				else this.delete_task( { task: this.task})
			}
			
			this.dialog = false
			
			setTimeout(() => {
				router.push( '/')
			}, 250)
			
		},
		cancel_edit(){
			this.dialog = false
			
			setTimeout(() => {
				router.push( '/')
			}, 250)
		}
	}
}
</script>