import axios from 'axios'
import host from './host'

export default function clear_completed( { commit}){
		
	commit( 'request_api')
	commit( 'show_loader', {
		message: 'deleting completed task...'
	})

	axios.delete( host)
	.then( res => {
		commit( 'request_api_success')
		commit( 'clear_completed')
		
		commit( 'hide_loader')
	})
	.catch( err => {
		commit( 'request_api_error', { err})
		commit( 'show_loader', {
			message: 'There was an error deleting the tasks.'
		})
	})
}
