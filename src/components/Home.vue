<template>
	<div id="home">
		<app-header v-bind:title='title' v-bind:flag='flag'></app-header>
		<!--父组件向子组件传值  语法（v-bind:自定义属性="需要传递的值"）  子组件使用:props['自定义属性'] ，然后使用的时候就使用[自定义属性]
			第二个names 对应data里面的names
			Items 对应子组件props里面的Items
		-->
		<!--path="helloworld" 要跳转到的组件名-->
		<p path="helloworld" @click="targetHelloworld">点击我跳转到helloworld页面</p>
		<p path="adduser" @click="targetHelloworld">点击我跳转到adduser页面</p>
		
		<user v-bind:Items="names"></user>
		<!--<user v-bind:Items="names"></user>-->
		<!--
			titleChange：对应子组件向父组件传值时注册的事件
			updataTitle：自己这边定义的方法
			$event:接收传递过来的参数(注：此处只能是$event)
		-->
		<app-footer v-bind:title='title'  v-on:titleChange="updataTitle($event)" ></app-footer>
	</div>
</template>

<script>
	import User from './User' //引入组件
	import Header from './Header' //引入组件
	import Footer from './Footer' //引入组件
	export default {
		name: 'home',
		data() {
			return {
//				names:[{
//					name:'Lucy',pos:'web开发',show:false
//				},
//				{
//					name:'Lily',pos:'web前端',show:false
//				},
//				{
//					name:'Jhon',pos:'Ios开发',show:false
//				},
//				{
//					name:'Daiv',pos:'android开发',show:false
//				},
//				{
//					name:'Liu',pos:'打酱油',show:false
//				}],
				title:"传递的是一个值(string number boolean)",
				flag:true,
				names:[]
			}
		},
		methods:{
			//title 传递过来的值
			updataTitle(title){
				this.title = title;
			},
			targetHelloworld(event){
				
				var path = event.target.getAttribute('path');
				
				this.$router.push({
						path: '/' + path
				});
			}
		},
		components: {
			//注册局部组件
			'user':User,
			'appHeader':Header,
			'appFooter':Footer
		},
		created(){
			//使用vue-resource获取数据
			var url = "http://jsonplaceholder.typicode.com/users"
			this.$http.get(url).then((data)=>{
				//console.log(data);
				this.names = data.body;
			})
		}
	}
</script>

<style>
	*{
		margin: 0;
		padding: 0;
	}
	p{
		text-align: center;
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
	
	<!--
		老师github地址:
		https://github.com/hemiahwu/vueplaylist
		vue json接口地址
		http://jsonplaceholder.typicode.com
	-->
