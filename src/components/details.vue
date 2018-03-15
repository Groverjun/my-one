<template>
	<div class="details">
		<div class="container">
			<div class="row">
				<div class="col-md-12">
					<p class="index_title" style="justify-content: space-between;">
						<span><span class="index_span "></span><span class="sub_company">{{this.UserName}}</span></span>
						<a href="#/home" >返回上一页</a>
					</p>
				</div>
			</div>
			<!---->
			<div class="row">
				<div class="table-responsive">
				  	<table class="table  table-bordered ">
				  		<thead>
				  			<tr>
				  				<th  class="text-center">序号</th>
				  				<th class="text-center">页面名称</th>
				  				<th class="text-center">预览</th>
				  				<th class="text-center">状态</th>
				  				<th class="text-center">操作</th>
				  			</tr>
				  		</thead>
				  		<tbody>
				  			<tr v-for="(details,index) in details">
				  				<th  class="text-center">{{index}}</th>
				  				<th class="text-center">{{details.pageName}}</th>
				  				<th class="text-center" v-html="details.href"></th>
				  				<th class="text-center">
				  					<span v-if="details.state==0">未审核</span>
				  					<span v-if="details.state==1">已通过</span>
				  					<span v-if="details.state==2">未通过[{{details.checkInfo}}]</span>
				  					<span v-if="details.state==3">暂未使用</span>
				  				</th>
				  				<th class="text-center"><el-button type="primary" size="mini" @click="newDetails(index)">重做 </el-button></th>
				  			</tr>
				  		</tbody>
				  	</table>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      indexData:null,
      UserName:null,
      pageId:null,
      details:[]
    }
  },
  mounted(){
//  console.log(this.$route.params.customerName)
    this.UserName=this.$route.params.UserName;
    var _this=this
    this.indexData=JSON.parse(localStorage.getItem("data"))
//  console.log(this.apiUrl.apiUrl)
    var a='http://192.168.1.140:8081'
    $.ajax({
    	contentType :'application/json;charset=UTF-8',
		type:"get",
		dataType: 'json',
		url:_this.apiUrl.apiUrl+"/page/findPages",
		async:true,
		data:{
		  "cid": _this.indexData.c_id,
		  "orderId":_this.indexData.network_id,
		},
		success:function(res){
//				console.log(res)
			for(var i in res.data){
				_this.details.push({
					pageName:res.data[i].clientName,
		      		href:res.data[i].visitUrl,
		      		state:res.data[i].state,
		      		pageId:res.data[i].id
				})
			}
		},
		error(){
			_this.$router.push({
	            path: 'home', 
	            name: 'home',
	        })
		}
    });
  },
  methods:{
  	newDetails(index){
//		console.log(this.details[index].pageId)
		localStorage.setItem("pageId",this.details[index].pageId)
//		console.log(this.details[index])
		this.$router.push({
	        path: 'Choice', 
	        name: 'Choice',
	        params:{
            	customerName:this.indexData,
            	UserName:this.UserName
            }
	    })
  	}
  }
  	  
}
</script>

<style>
</style>