<template>
	<div id="operation">
		<div class="pageWrapper_top text-right ">
			<div class="container">
				<div class="row">
					<div class="col-md-6">
						<p style="line-height: 35px;">模板二</p>
					</div>
					<div class="col-md-6 text-right" style="padding-right: 30px;">
						<a href="#/Choice">退出模板</a>
						<a href="javascript:void(0)" onclick="javascript:location.reload();">重做</a>
						<el-button type="primary" v-if="ImmediateUse" @click="ImmediateUseclick">立即使用</el-button>
						<el-button type="primary" v-if="Submit"  @click="Submitclick">提交并发布</el-button>
					</div>
				</div>
			</div>
			<div class="Pc_middle">
				<div class="container">
					<div class="row">
						<div class="col-md-24 text-center">
							<a href="#/operation2" class="pc_abt ">PC端制作</a>
							<a href="javascript:void(0)" class="pc_abt pc_activ">移动端制作</a>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="pageWrapperP_box">
			<div class="operation_box" v-model="html">
				<ul style="width: 768px; margin: auto;">
					<li class="Mask_box" v-for="(maskBox,index) in Mask_box">
						<img v-bind:src="maskBox" width="100%"/>
						<div class="Mask"  v-if="allDelete">
							<p>上传图片的宽为1200PX</p>
							<p>
								<el-button type="primary "round class="fileBox">
								上传<i class="el-icon-upload el-icon--right"></i>
								<input type="file" v-on:change="maskFile($refs.module2mask[index],index,1200)" ref="module2mask" />
								</el-button>
								<el-button type="danger" round icon="el-icon-delete" @click="delMask(index)">删除</el-button>
							</p>
						</div>
					</li>
					<li class="addMask"  v-if="allDelete">
						<el-button type="success" @click="addMask">添加一张</el-button>
					</li>
				</ul>
			</div>
			<div id="script" v-html="this.script"></div>
		</div>
		<!--提示框-->
		<el-dialog title="注意事项" :visible.sync="dialogFormVisible">
		  <el-form>
		    <el-form-item label="">
		    	 <el-input  v-model="description" placeholder="请输入模板名称"  :maxlength="20">
				    <template slot="append"><span>{{this.description.length}}</span>/20</template>
				  </el-input>
		          <el-alert title="请输入模板名称"  type="error" show-icon v-if="hintText" style="height: 35px;margin-top: 5px;"> </el-alert>
		          <el-alert  title="1. 不能出现联系方式： 包括手机号，座机号，QQ号，邮箱，其他网址；"  type="info" show-icon style="height: 35px;margin-top: 5px;"></el-alert>
		          <el-alert  title="2. 不能出现公司名称及所在地域名称；"  type="info" show-icon style="height: 35px;margin-top: 5px;"></el-alert>
		          <el-alert  title="3. 不要出现资质图片，如要添加，图片上的公司信息需加马赛克。"  type="info" show-icon style="height: 35px;margin-top: 5px;"></el-alert>
		          <el-alert  title="如不规范将不予通过！建议再仔细审核一遍！"  type="warning" show-icon style="height: 35px;margin-top: 5px;"></el-alert>
		    </el-form-item>
		  </el-form>
		  <div slot="footer" class="dialog-footer text-center">
		    <el-button @click="dialogFormVisible = false">取 消</el-button>
		    <el-button type="primary" @click="Prompt">确 定</el-button>
		  </div>
		</el-dialog>
	</div>
</template>

<script>
  export default {
    data() {
      return {
      	  indexData:null,/*首页数据**/
      	  pageId:null,/*详情页传的ID**/
      	  description:'000',/*模板名称**/
      	  Boxloading:false,
      	  loading:false,
      	  ImmediateUse:true,
      	  Submit:false,
      	  allDelete:true,
      	  script:'',
      	  dialogFormVisible:true,
      	  hintText:true,
      	  html:$(".operation_box").html(),
      	  headImg:"https://groverjun.github.io/i/head.jpg",
      	  Mask_box:["https://groverjun.github.io/i/middle1.jpg","https://groverjun.github.io/i/middle2.jpg","https://groverjun.github.io/i/middle3.jpg"],
      	  footImg:"https://groverjun.github.io/i/foot.jpg"
      };
    },
    mounted(){
    	/***/
    	if($("body").attr("class")=="fix-header show-sidebar hide-sidebar"){
    		$(".pageWrapper_top").removeClass("pageWrapper_topR")
    	}else{$(".pageWrapper_top").addClass("pageWrapper_topR")}
    	/***/
    	this.indexData=JSON.parse(localStorage.getItem("data"))
    	this.pageId=localStorage.getItem("pageId")
    	console.log(this.indexData)
    },
    methods: {
    	open(txt,h1) {
	        this.$alert(txt, h1, {
	          confirmButtonText: '确定',
	        });
      	},
      	/**获取生意帮代码*/
      	ImmediateUseclick(){
      		this.dialogFormVisible=true;
      		var _this=this;
  			$.ajax({
				type:"post",
				dataType:"json",
				url:"http://192.168.1.140:8081/page/code/sybCode",
				contentType : 'application/json;charset=UTF-8',
				data:JSON.stringify({
				  "c_id":_this.indexData.c_id,
				  "network_id":_this.indexData.network_id
				}),
				success:function(res){
					_this.script=res.data.codeEntity.sybCreateCode;
					console.log(_this.script)
					_this.ImmediateUse=false;
					_this.Submit=true;
				},
				error:function(){
					console.log("err")
				}
			});
      	},
      	/**提交*/
      	Submitclick(){
      		console.log(this.html)
      		var _this=this
      		$.ajax({
      			type:"post",
				dataType:"json",
				contentType : 'application/json;charset=UTF-8',
				url:"http://192.168.1.140:8081/page/createHtmlPage",
				data:JSON.stringify({
                    "channelId": _this.indexData.channel_id,/*渠道ID**/
                    "clientId": _this.indexData.c_id,/*客户customer_id  ID**/
                    "modelType":0,/*模板类型**/
                    "clientName": _this.indexData.CustomerName,/*客户名称**/
                    "htmlCode": _this.html,/*html代码**/
                    "modelId": 2,/*模板id**/
                    "orderId":_this.indexData.network_id,/*流量卡ID**/
                    "description ":null,
				    "pageId":_this.pageId,
				}),
				success:function(res){
					console.log(res)
				},
				error:function(err){
					console.log(err)
				}
      		})
      	},
      	/*提示框**/
      	Prompt(){
      		if(this.description==null){
      			this.hintText=true;
      		}else{
      			this.dialogFormVisible = false;
      			this.hintText=false;
      		}
      		
      	},
    	maskFile(input_file,index,maxWidth){
    		var _this=this;
    		this.loading=true;
    		this.loading=true;
    		this.dataImg(_this,input_file,maxWidth,
	    		function(str){
	    		_this.Mask_box.splice(index,1,str)
	    	})
    	},
    	addMask(){
    		this.Mask_box.push("https://groverjun.github.io/i/middle1.jpg")
    	},
    	delMask(index){
    		console.log(index)
    		this.Mask_box.splice(index,1)
    	},
    	/*上传图片**/
		dataImg(_this,input_file,maxWidth, get_data){
            if (typeof (FileReader) === 'undefined') {  
                alert("抱歉，你的浏览器版本太陈旧，请使用现代浏览器操作！");  
            } else {  
                try {  
		 			 var formData = new FormData();
					 var file = input_file.files[0];
					 var txt=''
                     var h1=''
                     _this.loading=true
		             formData.append("file",file);
                     if(parseInt(file.size/1024/1024)>1){
                    	alert("图片不能大于1M")
                    	return false;  
                    }
                    if (!/image\/\w+/.test(file.type)) {  
                        alert("请确保文件为图像类型");  
                        return false;  
                    }  
                    var reader = new FileReader();  
                    reader.onload = function () {
                    	var image = new Image();
                    	image.onload=function(){
                    		if(maxWidth<=image.width&&maxWidth>=(image.width-10)){
                    			/**发送Ajax请求*/
                    			$.ajax({
			                		type:"post",
			                		url:"http://192.168.1.140:8081/file/saveImage",
			                		data: formData,
		                 			dataType : "json",
		                 			async: false,
		                    		contentType: false,
		                    		processData: false,
									success:function(str){
										console.log(str)
		                    			_this.loading=false;
		                    			get_data(this.result,str.data); 
									},
									error:function(){
										
									}
			                	});
                    			
                    		}else{
                    			/**宽不正确*/
                    			 txt="上传图片的宽为"+maxWidth+"PX"; h1="失败"
                    			_this.open(txt,h1)
                    			_this.loading=false
                    		}
                    	}
                    	image.src= this.result;
                    }  
                    reader.readAsDataURL(file);  
                } catch (e) {  
                    alert('图片转Base64出错啦！' + e.toString());
                }  
            }					
		}
		/*上传图片结束**/
    }
  }
</script>

<style scoped="scoped">
.operation_head{
	position: relative;
}
ul{
	list-style: none;
	margin: 0;
	padding: 0;
}
li{
	list-style: none;
	margin: 0;
	padding: 0;
}
.addMask{
	padding: 15px;
	background: rgba(255,255,255,0.5);
	text-align: center;
}
.Mask_box{
	position: relative;
}
.Mask_box:hover .Mask{
	display: flex;
}
.Mask{
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	background: rgba(0,0,0,0.5);
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	display: none;
}
.Mask>p{
	display: block;
	width: 100%;
	text-align: center;
	color: #fff;
	font-size: 24px;
}
.operation_head:hover .Mask{
	display: flex;
}
</style>