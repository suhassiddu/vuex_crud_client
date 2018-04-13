import axios from 'axios'
import host from './host'

export default function edit_task( { commit}, { task, text}){
	
	commit( 'request_api')
	commit( 'show_loader', {
		message: 'updating tasks...'
	})

	axios.put( task.url, {
		text
	})
	.then( res => {
		commit( 'request_api_success')
		commit( 'edit_task', { task, text})
		commit( 'hide_loader')
	})
	.catch( err => {
		commit( 'request_api_error', { err})
		commit( 'show_loader', {
			message: 'There was an error updating the tasks.'
		})
	})
	
}
