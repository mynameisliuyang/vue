<template>
	<div id="user">
		<ul>
			<!--注:此处的数组对象Items 对应props里面的Items-->
			<li v-for="(item,index) in Items" :data-id="index" @click="item.show = !item.show">
				<h4>姓名:{{item.name}}</h4>
				<!--此P标签用于自己定义的names数据-->
				<!--<p>
					<span v-show="item.show">职务:{{item.pos}}</span>
				</p>-->
				<h3>邮箱:{{item.email}}</h3>
			</li>
		</ul>
		
		<button @click="deleteUser">删除</button>
	</div>
</template>

<!--
	父传值到子：
	传值: string number boolean(改变某一组件的内容不会改变其余组件的内容)
	引用: array object （改变某一组件的内容的会改变其余的组件内容）
-->

<script>
	export default{
		name:"user", //相当于el :"#user"
		//props:['Items'],//基本方式
		props:{ //标准写法
			Items:{ //Items:父组件传递时的自定义属性名
				type:Array, //传递的类型
				required:true //验证
			}
		},
		data(){
			return {
				
			}
		},
		methods:{
			deleteUser(){
				this.Items.pop();
				//pop()删除数组最后一个元素并返回该元素，改变原数组的长度
			}
		}
	}
</script>

<style scoped="scoped">
	#user{
		width: 100%;
		max-width: 1200px;
		margin: 40px auto;
		padding: 0 20px;
		box-sizing: border-box;
	}
	ul{
		display: flex;
		flex-wrap: wrap;
		list-style-type: none;
		padding: 0;
	}
	li{
		flex-grow: 1;
		/*width: 200px;*/
		/*flex-basis:设置或检索弹性盒伸缩基准值*/
		flex-basis: 200px; 
		text-align: center;
		padding: 30px;
		border: 1px solid #222;
		margin:10px;
	}
</style>