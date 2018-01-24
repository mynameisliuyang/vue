<template>
	<div id="app">
		<ul>
			<!--注:此处你的路由名字叫什么，那么href里就要写'/你要跳转的路由名'-->
			<li>
				<router-link to="/">Home</router-link>
			</li>
			<li>
				<router-link to="/helloworld">helloworld</router-link>
			</li>
			<li>
				<router-link to="/page">page</router-link>
			</li>
		</ul>
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		name: 'app',
		data() {
			return {
				
			}
		},
		methods:{
			
		},
		components: {
			
		}
	}
</script>

<style scoped="scoped">
	*{
		margin: 0;
		padding: 0;
	}
	#app{
		width: 100%;
		max-width: 1200px;
		margin: 0 auto;
	}
	ul{
		width: 100%;
		list-style-type: none;
		display: flex;
		justify-content: space-around;
	}
	li{
		list-style: none;
	}
</style>

<!--
	父组件向子组件传值  语法（v-bind:自定义属性="需要传递的值"）  子组件使用:props['自定义属性'] ，然后使用的时候就使用[自定义属性]
	第二个names 对应data里面的names
	Items 对应子组件props里面的Items
	
	子组件传值到父组件
	（一）子组件 :先定义一个方法 方法里使用 this.$emit("titleChange","子组件向父组件传值");
	1.titleChange 子向父传递的时候自己定义的一个方法
	2."子组件向父组件传值":子向父传递的值
	（二）父组件:
	需要接收参数的地方绑定一个事件 v-on:titleChange="updataTitle($event)"
	1.titleChange 子组件向父组件传递时 自定义的方法
	2.updataTitle ： 父组件这边接收时需要自己定义的一个方法
	3.$event :父组件接收子组件传递的参数  ~~~~此处必须是$event
-->