export default{
	show_loader( { commit}, message){
		commit( 'show_loader', {
			message
		})
	},
	hide_loader( { commit}){
		commit( 'hide_loader')
	}
}