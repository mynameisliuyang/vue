<template>
	<footer @click="changeTitle">
		<p>{{title1}}{{title}}{{pages}}</p>
	</footer>
</template>

<script>
	export default{
		name : "app-footer",
		props:{
			title:{
				type:String
			},
			page:{
				type:String
			}
		},
		data(){
			return{
				title1:"footer:",
				pages:this.page
			}
		},
		methods:{
			changeTitle(){
				//子传父  --注册titleChange事件,后面为需要传递的值
				this.$emit("titleChange","子组件向父组件传值");
			}
		}
	}
</script>

<style scoped="scoped">
	footer{
		width: 100%;
		background: #222;
		padding: 10px;
		position: fixed;
		bottom: 0;
		left: 0;
	}
	P{
		color: lightgreen;
		text-align: center;
	}
</style>