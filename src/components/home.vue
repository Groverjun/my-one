<template>
  <div class="container">
  		<div class="row">
					<div class="col-md-12">
						<p class="index_title"><span class="index_span"></span><span class="companyName"></span>分公司名称</p>
					</div>
			</div>
			<!--输入框-->
			<div class="input">
				<div class="row">
					<div class="col-lg-4">
						<div class="form-horizontal">
						    <div class="form-group">
							    <label for="name" class="col-sm-4 control-label  CustomerName">客户名称：</label>
							    <div class="col-sm-8">
							      <input type="text" class="form-control" id="customer" placeholder="客户名称 ">
							    </div>
							 </div>
						</div>
					</div>
					<div class="col-lg-4">
						<div class="form-horizontal">
						    <div class="form-group">
							    <label for="tel" class="col-sm-4 control-label">联系电话：</label>
							    <div class="col-sm-8">
							      <input type="text" class="form-control" id="phone" placeholder="客户电话 ">
							    </div>
							 </div>
						</div>
					</div>
					<div class="col-lg-4">
						<div class="form-horizontal">
						    <div class="form-group">
							    <label for="inputPassword3" class="col-sm-4 control-label">状态：</label>
							    <div class="col-sm-8">
							     <select class="form-control" id="status">
							     	 <option value="0">==请选择==</option>
							          <option value="1">下单待审核</option>
							          <option value="2">审核通过待解析</option>
							          <option value="3">优化上线带解析</option>
							          <option value="4">已收录</option>
							          <option value="5">已达标</option>
							          <option value="6">检查不合格</option>
							          <option value="7">已过期</option>
							     </select>
							    </div>
							 </div>
						</div>
					</div>
					<div class="col-lg-4">
						<div class="form-horizontal">
						    <div class="form-group">
							    <label for="time" class="col-sm-4 control-label">下单时间：</label>
							    <div class="col-sm-8" id="timebox" style="position: relative;">
							      <input type="text" class="form-control" id="order_time" placeholder="下单时间 ">
							      <div id='Calendar' style='position:absolute; z-index:1; visibility: hidden;width: 98%;'></div>
							    </div>
							 </div>
						</div>
					</div>
					<div class="col-lg-4">
						<div class="form-horizontal">
						    <div class="form-group">
							    <button  class="btn btn-danger ">查询</button>
							 </div>
						</div>
					</div>
				</div>
			</div>
			<!--表格-->
			<div class="table-responsive">
			  <table class="table  table-bordered ">
			  		<thead>
			  			<tr>
			  				<th  class="text-center">序号</th>
			  				<th class="text-center">渠道类型</th>
			  				<th class="text-center">类型</th>
			  				<th class="text-center">客户名称</th>
			  				<th class="text-center">状态</th>
			  				<th class="text-center">联系电话</th>
			  				<th class="text-center">下单时间</th>
			  				<th class="text-center" style="width: 150px;">着落页</th>
			  				<th class="text-center">操作</th>
			  			</tr>
			  		</thead>
			  		<tbody>
			  			<tr>
			  				<th  class="text-center">1</th>
			  				<th class="text-center">{{this.type}}</th>
			  				<th class="text-center">曲阳县紫恒雕塑有限公司</th>
			  				<th class="text-center"></th>
			  				<th class="text-center"></th>
			  				<th class="text-center"></th>
			  				<th class="text-center"></th>
			  				<th class="text-center"></th>
			  				<th class="text-center">
			  					<a href="#/Choice">着落页模板 </a>
			  				</th>
			  			</tr>
			  		</tbody>
			  </table>
			  <div class="fenye clearfix">
			  		
			  </div>
			</div>
  </div>
</template>
<script>
export default {
  name: 'home',
  data () {
    return {
      	ChannelType:"保定信融",/*渠道类型**/
      	type:"保定信融",/*类型**/
      	CustomerName:"用户名称",/*用户名称*/
      	state:"状态",/*状态*/
      	tel:"78888",
      	time:"2008",
      	LandingPage:'Choice'
    }
  },
  mounted(){

  }
}
</script>


