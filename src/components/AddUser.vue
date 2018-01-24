<template>
	<div class="adduser">
		<h4>{{msg}}</h4>
		
		<hr/>
		<!--@添加用户信息-->
		<form @submit="addUser">
			<input type="text" v-model="newUser.name" placeholder="Enter Name" tabindex="1"/>
			<input type="text" v-model="newUser.age" placeholder="Enter age" tabindex="2"/>
			<input type="submit" value="submit" tabindex="3"/>
		</form>
		<div class="soft" @click="sorts()">排序</div>
		<!--@展示用户信息-->
		<ul>
			<li v-for="(user,index) in users">
				<p @click="user.flag = !user.flag">姓名：{{user.name}}</p>
				<p v-show="user.flag">年龄：{{user.age}}</p>
				<button v-on:click="deletes(index)">X</button>
			</li>
		</ul>
		<hr/>
		<h3>注:此页面包含的功能有session(localstorage/sessionstorage)的存储、数据的增加和删除、排序,并且使用了vue中的数据监听。</h3>
	</div>
</template>

<script>
	import session from '../lib/session.js' //通过路径查找引入js文件
	//console.log(session)
	export default {
		name:"adduser",
		data(){
			return{
				msg:"增加用户",
				users:session.fetch(),//从缓存里去取值
				newUser:{name:'',age:'',flag:false},
				flag:false
			}
		},
		methods:{
			addUser(e){
				e.preventDefault();//阻止浏览器默认事件---取消submit的默认提交刷新页面行为
				//增加
				if(this.newUser.name != '' && this.newUser.age != ''){
					this.users.push({
						name:this.newUser.name,
						age:this.newUser.age,
						flag:false
					});
					this.newUser={name:'',age:'',flag:false};
				}else{
					alert('姓名和年龄不能为空')
				}
			},
			deletes(index){
				//删除
				this.users.splice(index,1);
			},
			sorts(){
				if(this.flag){
					this.users.sort(function(a,b){
						return a.age > b.age;
					})
				}else{
					this.users.sort(function(a,b){
						return a.age < b.age;
					})
				}
				this.flag = !this.flag;
			}
		},
		computed:{
			//计算属性
		},
		watch:{//数据监听
			//观察数据的变化，执行后面的方法(此处观察的是users对象数据的改变)
			users:{
				handler:function(items){
					session.save(items);//数据有变化自动保存到缓存
				},
				deep:true //深层次复制
			}
		}
	}
</script>

<style scoped="scoped">
	li{
		list-style: none;
	}
	h4{
		text-align: center;
	}
	h3{
		text-align: center;
		color: #F00;
	}
	.soft{
		width: 50px;
		text-align: center;
		border: 1px solid #eee;/*no*/
		margin: 5px auto 0 ;
		background-color: #25f5e5;
		color: #000;
	}
	form,ul{
		text-align: center;
	}
	ul li p{
		width:50px;
		height: 20px;
		background: #EEE;
		color:deepskyblue;
		display: inline;
	}
</style>