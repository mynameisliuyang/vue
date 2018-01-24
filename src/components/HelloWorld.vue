<template>
	<div class="hello">
		<span @click="targetPage" path="page">{{ msg }}</span>
		<span @click="targetPage" path="adduser">{{ msg1 }}</span>
	</div>
</template>

<script>
	export default {
		name: 'HelloWorld',
		data() {
			return {
				msg  : '点击我跳转到page页面',
				msg1 : '点击我跳转到adduser页面'
			}
		},
		methods: {
			targetPage(event) {
				var path = event.target.getAttribute('path');

				this.$router.push({
					path: '/' + path
				})
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
span{
	width: 200px;
	display: block;
	text-align: center;
	border: 1px solid #eee;
	border-radius: 7px;
	margin: 10px auto;
}
</style>