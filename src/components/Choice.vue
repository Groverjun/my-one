<template>
  <div class="choice">
  		<div class="container">
	  			<div class="row">
							<div class="col-md-12">
								<p class="index_title" style="justify-content: space-between;">
									<span><span class="index_span "></span><span class="sub_company">{{this.UserName}}</span></span>
								</p>
							</div>
					</div>
					<!---->
					<div class="row">
						<div class="col-md-12">
							<div class="choice_top">
									<p>你好：{{this.UserName}}</p>
									<p><span>着陆页制作流程</span><span style="color:#27abfc ;">（每张流量卡最多可制作5张着陆页）</span></p>
									<p class="choice_topAbt">
											<button class="btn btn-danger" style="margin-left: 0;">1着陆页设置</button>
											<img src="../assets/jiant.jpg"/>
											<button class="btn btn-danger">2基本资料</button>
											<img src="../assets/jiant.jpg"/>
											<button class="btn btn-danger">3网站栏目</button>
											<img src="../assets/jiant.jpg"/>
											<button class="btn btn-danger">4编辑内容</button>
											<img src="../assets/jiant.jpg"/>
											<button class="btn btn-danger">5使用网站</button>
									</p>
									<p><span>着陆页制作引导</span></p>
									<p><span style="color:#27abfc ;">1.通用模板：</span></p>
									<p><span >点击图片可更换；详细制作引导请点击该模板预览！</span></p>
									<p><span style="color:#27abfc ;">2.自定义模板：</span></p>
									<p><span >文字可双击编辑；点击图片可更换；详细制作引导请点击该模板预览！</span></p>
							</div>
						</div>
				</div>
				<!---->
				<div class="row">
					<div class="col-md-12">
						<p class="index_title" style="justify-content: space-between;">
							<span><span class="index_span "></span><span class="sub_company">着陆页样式</span></span>
						</p>
					</div>
				</div>
				<!---->
  		</div>
  		
  		<div class="container">
  			<div class="module_img">
						<div class="row">
								<div class="col-md-3" v-for="(Img,index) in Img">
										<p class="text-center">
											<span v-if="index==0">自定义模板</span>
											<span v-if="index==1">通用模板</span>
										</p>
										<div>
												<p class="module_imgBox text-center"><img v-bind:src="Img.displayImgPc" width="100%"/></p>
												<p class="text-center">
													<el-button @click="primary(index)" >制 作</el-button>
				    							<el-button @click="preview(index)">预 览</el-button>
												</p>
										</div>
								</div>
						</div>
				</div>
  		</div>
  		
  </div>
</template>
<script>
export default {
  name: 'Choice',
  data () {
    return {
      UserName:null,
      Img:null,
      indexData:null,
    }
  },
  mounted(){
  	$("#show").show()
    console.log(this.$route.params)
    this.UserName=this.$route.params.UserName;
    this.indexData=this.$route.params.customerName;
    console.log(this.indexData)
    this.$xhr.get("/page/findModel").then((res)=>{
				this.Img=res.data
				console.log(this.Img)
		})
  },
  methods:{
  	preview(){
	  	  this.$router.push({
		        path: 'preview', 
		        name: 'preview',
	      })
  	},
  	primary(index){
  		this.$router.push({
		        path: 'operation'+(index+1), 
		        name: 'operation'+(index+1),
		        params:this.indexData,
	      })
  	}
  }
}
</script>

