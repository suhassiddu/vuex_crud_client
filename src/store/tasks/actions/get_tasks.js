import axios from 'axios'
import host from './host'

export default function get_tasks( { commit}){
		
	commit( 'request_api')
	commit( 'show_loader', {
		message: 'downloading tasks...'
	})

	axios.get( host)
	.then( res => {
		commit( 'request_api_success')
		commit( 'get_tasks', {
			payload: res.data
		})
		commit( 'hide_loader')
	})
	.catch( err => {
		commit( 'request_api_error', { err})
		commit( 'show_loader', {
			message: 'There was an error downloading the tasks.'
		})
	})
}
