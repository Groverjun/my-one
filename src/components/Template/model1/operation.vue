<template>
	<div id="operation">
		<div class="pageWrapper_top text-right ">
			<div class="container">
				<div class="row">
					<div class="col-md-6">
						<p style="line-height: 35px;">模板一</p>
					</div>
					<div class="col-md-6 text-right" style="padding-right: 30px;">
						<a href="#/Choice">退出模板</a>
						<a href="javascript:void(0)" onclick="javascript:location.reload();">重做</a>
						<el-button type="primary">立即使用</el-button>
						<el-button type="primary">提交并发布</el-button>
					</div>
				</div>
			</div>
		</div>
		<!--内容区-->
		<div class="pageWrapper_box">
			<swiper :allD="allD"></swiper>
			<el-button type="primary" @click="Delete">删除</el-button>
		</div>
	</div>
</template>

<script>
  import swiper from '../../swiper'
  export default {
  	components: {
	    swiper,
	},
    data() {
      return {
      	allD:true
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
    	Delete(){
    		this.allD=false
    	},
    	open(txt,h1) {
        this.$alert(txt, h1, {
          confirmButtonText: '确定',
        });
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

<style>
</style>