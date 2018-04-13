export const state = {
	tasks: []
}

export const mutations = {
	[ 'get_tasks']( state, action){
		state.tasks = action.payload
	},
	[ 'toggle_task']( state, { task}){
		task.completed = !task.completed
	},
	[ 'delete_task']( state, { task}){
		state.tasks.splice( state.tasks.indexOf( task), 1)
	},
	[ 'edit_task']( state, { task, text}){
		task.text = text
	},
	[ 'add_task']( state, { task}){
		state.tasks.push( task)
	},
	[ 'clear_completed']( state){
		state.tasks = state.tasks.filter( task => !task.completed)
	}
}
