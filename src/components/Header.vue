<template>
	<header @click=" flag && changeTitle()">
		<h1>
			{{title1}}  <!--自身页面参数-->
			{{titles}}  <!--home页面参数-->
			{{pages}}	<!--page页面参数-->
		</h1>
	</header>
</template>

<script>
	//注：module.exports={} 等效于 export defaule{}
	module.exports = {
		name :"app-header",
		props:{
			title:{
				type:String
			},
			flag:{
				type:Boolean
			},
			page:{
				type:String
			}
		},
		data(){
			return{
				title1:"header:",
				titles:this.title, //因为子组件要改变这个传递过来的值，所以要用个变量保存，不然会发出警告
				msg:'标题信息',
				pages:this.page,
			}
		},
		methods:{
			changeTitle(){
				this.titles = "子组件改变父组件传递过来的String参数" //改变父组件传递过来的值(前面要保存，不然会发出警告)
				//console.log(this.flag)
			}
		},
		computed:{
			
		}
		//以下为vue生命周期的钩子函数
		,
		beforeCreate:function(){
			//alert("组件实例化之前执行的函数")
		}
		,
		created:function(){
			//alert("组件实例化完毕，但页面还未显示")
		}
		,
		beforeMount:function(){
			//alert("组件挂载前，页面仍未显示，但是虚拟dom已经配置")
		}
		,
		mounted:function(){
			//alert("组件挂载后，此方法执行后，页面显示")
		}
		,
		beforeUpdate:function(){
			//alert("组件更新前，页面仍未更新，但是虚拟dom已经配置")
		}
		,
		updated:function(){
			//alert("组件更新，此方法执行后页面显示")
		}
		,
		beforeDestory:function(){
			//alert("组件销毁前")
		}
		,
		destoryed:function(){
			//alert("组件销毁")
		}
	}
</script>

<style scoped="scoped">
	header{
		background: lightgreen;
		padding: 10px;
	}
	h1{
		color: #222;
		text-align: center;
	}
</style>