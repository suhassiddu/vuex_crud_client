import axios from 'axios'
import host from './host'

export default function edit_task( { commit}, { text}){
	
	commit( 'request_api')
	commit( 'show_loader', {
		message: 'addinging new task...'
	})

	axios.post( host, {
		text,
		completed: false
	})
	.then( res => {
		commit( 'request_api_success')
		commit( 'add_task', { task: res.data})
		commit( 'hide_loader')
	})
	.catch( err => {
		commit( 'request_api_error', { err})
		commit( 'show_loader', {
			message: 'There was an error adding the task.'
		})
	})
	
}
