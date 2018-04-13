import axios from 'axios'
import host from './host'

export default function toggle_task( { commit}, { task}){
	
	commit( 'request_api')
	commit( 'show_loader', {
		message: 'toggling...'
	})
	
	axios.put( task.url, {
		completed: !task.completed
	})
	.then( res => {
		commit( 'request_api_success')
		commit( 'toggle_task', { task})
		commit( 'hide_loader')
	})
	.catch( err => {
		commit( 'request_api_error', { err})
		commit( 'show_loader', {
			message: 'There was an error toggling.'
		})
	})
}