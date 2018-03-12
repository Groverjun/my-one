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
						<el-button type="primary">立即使用</el-button>
						<el-button type="primary">提交并发布</el-button>
					</div>
				</div>
			</div>
			<div class="Pc_middle">
				<div class="container">
					<div class="row">
						<div class="col-md-6 text-center">
							<a href="javascript:void(0)">PC端制作</a>
						</div>
						<div class="col-md-6 text-center">
							<a href="javascript:void(0)">移动端制作</a>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="pageWrapperP_box">
			
		</div>
	</div>
</template>

<script>
  export default {
    data() {
      return {
      	  src:"data:image/jpeg;base64,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"
      	  ,fileData:null,
      	  src2:"",
      	  Boxloading:false,
      	  loading:false,
      };
    },
    mounted(){
    	/***/
    	if($("body").attr("class")=="fix-header show-sidebar hide-sidebar"){
    		$(".pageWrapper_top").removeClass("pageWrapper_topR")
    	}else{$(".pageWrapper_top").addClass("pageWrapper_topR")}
    	/***/
    	console.log(this.$route.params)
    },
    methods: {
    	success(){
    		this.src=this.fileData;
    	},
    	open(txt,h1) {
        this.$alert(txt, h1, {
          confirmButtonText: '确定',
        });
      	},
    	file(input_file,maxWidth){
    		var _this=this;
    		this.loading=true
    		this.dataImg(_this,input_file,maxWidth,
	    		function(data,str){
	    		console.log(str)
	    	})
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
                    			txt="上传成功";h1="成功"
                    			_this.open(txt,h1)
                    			_this.loading=false
                    			get_data(this.result,formData); 
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

</style>