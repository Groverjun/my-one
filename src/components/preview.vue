<template>
	<div id="preview">
		<div class="pageWrapper_top text-right ">
				<div class="container">
					<div class="row">
						<div class="col-md-6">
							<p style="line-height: 35px;">模板一</p>
						</div>
						<div class="col-md-6 text-right" style="padding-right: 30px;">
							<a href="#/Choice">退出预览</a>
							<el-button type="primary">立即制作</el-button>
						</div>
					</div>
				</div>
		</div>
		<div class="pageWrapper_box">
			<p style="height: 2000px;">0000000000000</p>
		</div>
	</div>
</template>

<script>
  export default {
    data() {
      return {
      };
    },
    mounted(){
    	/***/
    	if($("body").attr("class")=="fix-header show-sidebar hide-sidebar"){
    		$(".pageWrapper_top").removeClass("pageWrapper_topR")
    	}else{$(".pageWrapper_top").addClass("pageWrapper_topR")}
    	/***/
    }
  };
</script>
