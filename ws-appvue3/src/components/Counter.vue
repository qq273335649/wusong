<template>
	<div id="counter" v-bind:title="message">
		Counter: {{ counter }}
	</div>
	<div @click="stop">stopTime</div>
	<p>{{ message }}</p>
	<input v-model="message" />
	<span v-if="seen">现在你看到我了</span>
	<div @click="show">show</div>
	<ol>
		<li v-for="todo in todos">
			{{ todo.text }}
		</li>
	</ol>
</template>

<script>
	export default {
		name: 'Counter',
		data() {
			return {
				counter: 0,
				message: 123,
				time: null,
				seen: false,
				todos: [{
						text: 'Learn JavaScript'
					},
					{
						text: 'Learn Vue'
					},
					{
						text: 'Build something awesome'
					}
				]
			}
		},
		mounted() {
			this.time = setInterval(() => {
				this.counter++
			}, 1000)
		},
		methods: {
			stop() {
				console.log(this)
				this.time && clearInterval(this.time);
			},
			show() {
				this.seen = true;
			}
		}
	}
</script>

<style>
</style>
