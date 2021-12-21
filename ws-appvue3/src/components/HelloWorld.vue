<template>
	<h1>{{ msg }}</h1>
	<button @click="count++">count is: {{ count }}</button>
	<p>Edit <code>components/HelloWorld.vue</code> to test hot module replacement.</p>
	<Counter />
</template>

<script>
	import Counter from './Counter.vue';
	export default {
		name: 'HelloWorld',
		components: {
			Counter
		},
		props: {
			msg: String
		},
		data() {
			return {
				count: 0
			}
		}
	}
</script>
