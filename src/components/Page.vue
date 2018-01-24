<template>
	<div id="page">
		<my-header v-bind:page="title"></my-header>
		<div>
			<ul>
				<li v-for="(item,index) in items" :data-id="index" v-if="index<=5">
					<img :src="item.url" />
				</li>
			</ul>
		</div>
		<my-footer v-bind:page="title"></my-footer>
	</div>
</template>

<script>
	import Headers from './Header'
	import Footers from './Footer'
	export default {
		name: "page",
		data() {
			return {
				items: [],
				title: "这是page页面的传值"
			}
		},
		components: {
			'myHeader': Headers,
			'myFooter': Footers,
		},
		methods: {

		},
		created() {
			let URL = 'http://jsonplaceholder.typicode.com/photos';
			//vue-resource
			//this.$http.get('http://jsonplaceholder.typicode.com/photos').then((data)=>{
				//console.log(data)
				//for (var i = 0 ; i <= 5 ;i++ ) {
				//this.items.push(data.body[i]);
				//}
			//})
			//axios
			this.$axios.get(URL).then(response => {
				console.log(response)
				for (var i = 0 ; i <= 5 ;i++ ) {
					this.items.push(response.data[i]);
				}
			}, response => {
				console.log(response)
			})
		}
	}
</script>

<style scoped="scoped">
	#page {
		width: 100%;
		max-width: 1200px;
		box-sizing: border-box;
	}
	
	ul {
		list-style-type: none;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		padding: 0;
	}
	
	li {
		flex-basis: 200px;
		flex-grow: 1;
		text-align: center;
		margin: 5px;
	}
	
	li img {
		width: 100%;
		max-height: 450px;
	}
</style>