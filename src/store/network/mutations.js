export const state = {
	isfetching: false,
	error: null
}

export const mutations = {
	[ 'request_api']( state){
		state.isfetching = true
		state.error = null
	},
	[ 'request_api_success']( state){
		state.isfetching = false
		state.error = null
	},
	[ 'request_api_error']( state, action){
		state.isfetching = false
		state.error = action.error
	}
}