<template>
	<div id="details">
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
				  				<th class="text-center">{{details.href}}</th>
				  				<th class="text-center">
				  					<span v-if="details.state==1">审核通过待制作</span>
				  					<span v-if="details.state==3">作完成待检查</span>
				  					<span v-if="details.state==4">检查不合格</span>
				  					<span v-if="details.state==6">上线完成</span>
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
  name: 'details',
  data () {
    return {
      indexData:null,
      UserName:null,
      details:[]
    }
  },
  mounted(){
    console.log(this.$route.params.customerName)
    this.UserName=this.$route.params.UserName;
    var _this=this
    this.indexData=this.$route.params.customerName
    $.ajax({
    	contentType : 'application/json;charset=UTF-8',
			type:"get",
		  dataType: 'json',
			url:"http://192.168.1.140:8081/page/findPages",
			async:true,
			data:{
			  "cid": _this.indexData.c_id,
			  "orderId":_this.indexData.network_id,
			},
			success:function(res){
				console.log(res)
				for(var i in res.data){
					_this.details.push({
						pageName:res.data[i].clientName,
			      		href:res.data[i].visitUrl,
			      		state:res.data[i].state
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
  		console.log(index)
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