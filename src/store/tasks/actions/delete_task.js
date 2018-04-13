import axios from 'axios'
import host from './host'

export default function delete_task( { commit}, { task}){

	commit( 'request_api')
	commit( 'show_loader', {
		message: 'deleting tasks...'
	})

	axios.delete( task.url)
	.then( res => {
		commit( 'request_api_success')
		commit( 'delete_task', { task})
		commit( 'hide_loader')
	})
	.catch( err => {
		commit( 'request_api_error', { err})
		commit( 'show_loader', {
			message: 'There was an error deleting the tasks.'
		})
	})
}
