export default{
	completed_tasks( state){
		return state.tasks.filter( task => task.completed)
	},
	active_tasks( state){
		return state.tasks.filter( task => !task.completed)
	},
	active_task_count( state, getters){
		return getters.active_tasks.length
	}
}