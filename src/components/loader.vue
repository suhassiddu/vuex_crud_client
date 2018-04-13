<template>
<center>
	<div v-if="loader.show">
		<v-progress-circular indeterminate :size="70" :width="7" color="indigo"></v-progress-circular><br/>
		{{ loader.message}}
	</div>
</center>
</template>

<script>
// <div v-else>Done loading</div>
import { mapState} from 'vuex'

export default{
	name: 'loader',
	computed: mapState([
		'loader'
	])
}
</script>