export const state = {
	show: false,
	message: ''
}

export const mutations = {
	[ 'show_loader']( state, action){
		state.show = true
		state.message = action.message
	},
	[ 'hide_loader']( state){
		state.show = false
		state.message = ''
	}
}
