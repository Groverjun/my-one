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
					<div class="col-lg-4 col-lg-12">
						<div class="form-horizontal">
						    <div class="form-group">
							    <label for="name" class="col-sm-4 control-label  CustomerName">客户名称：</label>
							    <div class="col-sm-8">
							    	<el-input placeholder="客户名称 " v-model='CustomerName'></el-input>
							    </div>
							 </div>
						</div>
					</div>
					<div class="col-lg-4 col-lg-12">
						<div class="form-horizontal">
						    <div class="form-group">
							    <label for="tel" class="col-sm-4 control-label">联系电话：</label>
							    <div class="col-sm-8">
							     <el-input placeholder="电话" v-model='contactTel'></el-input>
							    </div>
							 </div>
						</div>
					</div>
					<div class="col-lg-4 col-lg-12">
						<div class="form-horizontal">
						    <div class="form-group">
							    <label for="inputPassword3" class="col-sm-4 control-label">状态：</label>
							    <div class="col-sm-8">
							    	  <el-select v-model="state" placeholder="请选择" style="display: block;">
										    <el-option
										      v-for="item in styleRadioArr"
										      :key="item.value"
										      :label="item.label"
										      :value="item.value">
										    </el-option>
										  </el-select>
							    </div>
							 </div>
						</div>
					</div>
					<div class="col-lg-4 col-lg-12">
						<div class="form-horizontal">
						    <div class="form-group">
							    <label for="time" class="col-sm-4 control-label">下单时间：</label>
							    <div class="col-sm-8" id="timebox">
							      <div class="block">
									    <el-date-picker
									      v-model="selectionTime"
									      type="date"
									      placeholder="选择日期" style="display: block;width: 100%;">
									    </el-date-picker>
									  </div>
							    </div>
							 </div>
						</div>
					</div>
					<div class="col-lg-4">
						 <el-button type="primary" v-on:click="query">查询</el-button>
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
			  				<th class="text-center">操作</th>
			  			</tr>
			  		</thead>
			  		<tbody>
			  			<tr v-for="(tbodyData,index) in tbodyData">
			  				<th class="text-center">{{index}}</th>
			  				<th class="text-center">{{tbodyData.state}}</th>
			  				<th class="text-center">{{tbodyData.channelType}}</th>
			  				<th class="text-center">{{tbodyData.Type}}</th>
			  				<th class="text-center">{{tbodyData.CustomerName}}</th>
			  				<th class="text-center">{{tbodyData.contactTel}}</th>
			  				<th class="text-center">{{tbodyData.selectionTime}}</th>
			  				<th class="text-center" id="primary">
			  					<el-button type="primary" @click="sendParams" size="mini">着陆页制作 </el-button>
			  					<span v-if="tbodyData.state!=''">
			  						<el-button type="primary" size="mini" @click="dialogFormVisible = true">在线客服  </el-button>
			  						<el-button type="primary" size="mini" @click="details">操作 </el-button>
			  					</span>
			  				</th>
			  			</tr>
			  		</tbody>
			  </table>
			  <div class="fenye clearfix">
			  	<el-pagination
			  		@current-change="pagination"
			  		background
					  layout="prev, pager, next"
					  :page-size="PageCount"
					  :total="total_page">
					</el-pagination>
			  </div>
			</div>
			<el-dialog title="在线客服修改" :visible.sync="dialogFormVisible"class="text-center">
			  <el-form>
			  	<p class="title_h2">在线客服设置</p><br />
					    <el-row class="text-left">
					    		<el-col :span='4'>列表是否显示：</el-col>
									<el-col :span="20">
										<el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
								    	<el-checkbox label="1">在线咨询</el-checkbox>
									    <el-checkbox label="2">企业QQ</el-checkbox>
									    <el-checkbox label="3">在线留言</el-checkbox>
									    <el-checkbox label="4">回拨电话</el-checkbox>
								    </el-checkbox-group>
									</el-col>
					    </el-row><br />
					    <el-row class="text-left">
					    		<el-col :span='4'>样式编号：</el-col>
					    		<el-col :span='20'>
					    			<el-radio v-model="styleRadio" label="1">样式1</el-radio>
  									<el-radio v-model="styleRadio" label="2">样式2</el-radio>
					    		</el-col>
					    </el-row><br />
					     <el-row class="text-left">
					    		<el-col :span='12'>
					    				 产品类型：
					    				 <el-select v-model="productType" placeholder="请选择">
											    <el-option
											      v-for="item in productTypeArr"
											      :key="item.value"
											      :label="item.label"
											      :value="item.value">
											    </el-option>
										 	 </el-select>
					    		</el-col>
					    		<el-col :span='12'>
					    				 位置：
					    				 <el-select v-model="Position" placeholder="请选择">
											    <el-option
											      v-for="item in PositionArr"
											      :key="item.value"
											      :label="item.label"
											      :value="item.value">
											    </el-option>
										 	 </el-select>
					    		</el-col>
					    </el-row><br />
					    <p class="title_h2">请选择投放网站</p>
					    <el-row>
					    	<el-col :span="24">
					    		   <el-checkbox-group  v-model="checkedCities1">
									    <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
									  </el-checkbox-group>
					    	</el-col>
					    </el-row>
			  </el-form>
			  <div slot="footer" class="dialog-footer text-center">
			    <el-button @click="dialogFormVisible = false">取 消</el-button>
			    <el-button type="primary" @click="Determine">确 定</el-button>
			  </div>
			</el-dialog>
</div>
</template>
<script>
export default {
  name: 'home',
  data () {
    return {
    	conceal:false,
    	checkedCities:[],
    	checkedCities1: [],
    	PageCount:10,
    	total_page:100,
      cities:['百度', '360', '搜狗', '其他'],
    	arr:[1,1,0,1,0,0,0,0],
    	arr2:['1','1','0','1','0','0','0','0'],
    	dialogFormVisible:false,
    	formLabelWidth: '120px',
    	/**时间选择框*/
    		pickerOptions1: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          }
        },
        /***/
       Position:'right',
       PositionArr:[
       	{ value: 'right',label: '右边'},
       	{ value: 'left',label: '左边'}
       
       ],
        /*产品类型下拉框**/
        productType:'0',
        productTypeArr:[
        	{ value: '0',label: '流量卡着落页'}
        ],
    	/*状态拉框**/
				styleRadioArr: [
					{ value: '0',label: '==请选择=='},
	        { value: '1',label: '下单待审核'},
	        { value: '2',label: '审核通过待解析'},
	        { value: '3',label: '优化上线带解析'},
	        { value: '4',label: '已收录'},
	        { value: '5',label: '已达标'},
	        { value: '6',label: '检查不合格'},
	        { value: '7',label: '已过期'}
				],
				styleRadio:'2',
			/*表格数据**/
				tbodyData:[
					{
						channelType:"",
						Type:"",
						CustomerName:"",
						contactTel:"",
						selectionTime:"",
						state:"",/*状态*/
					},
					{
						channelType:"",
						Type:"",
						CustomerName:"",
						contactTel:"",
						selectionTime:"",
						state:"00",/*状态*/
					},
					{
						channelType:"",
						Type:"",
						CustomerName:"",
						contactTel:"",
						selectionTime:"",
						state:"",/*状态*/
					},
				],
				/*查询输入框**/
        selectionTime: '',/*时间**/
      	CustomerName:"lijunjie",/*用户名称*/
      	state:"2",/*状态*/
      	contactTel:"188811212979",/*电话*/
      	
    }
  },
  mounted(){
  	$("#show").hide()
  	  var str=this.arr;
  		for (var i=1;i<str.length;i++) {
					if(str[i]==1){
						var j= JSON.stringify(i)
						this.checkedCities.push(j)
					}
  		}
//	this.$xhr.get("doufu/data/classify.json").then((res)=>{
//		console.log(res)
//	})
//	this.$xhr.post("url",{
//		name:"",
//		age:""
//	}).then((res)=>{
//		console.log("成功")
//	}).catch((err)=>{
//		console.log("err")
//		
//	})
  },
  methods:{
  	/**选择状态*/
  	/*提交在线客服**/
  	Determine(){
  		console.log(this.arr2)
  		console.log(this.styleRadio)
  	},
  	/*在线客服列表选项**/
  	handleCheckedCitiesChange(){
  		var checkA=this.checkedCities
  		this.arr2=['1','0','0','0','0','0','0','0']
  		for (var i in checkA) {
	  			if(checkA[i]=='1'){/*咨询**/
	  				this.arr2[1]='1'
	  			}else if(checkA[i]==2){/*qq**/
						this.arr2[2]='1'
					}else if(checkA[i]==3){/*留言**/
						this.arr2[3]='1'
					}else if(checkA[i]==4){/*电话**/
						this.arr2[4]='1'
					}
  		}
    },
  	/**查询*/
  	query(){
  	},
  	/*制作着陆页按钮*/
  	sendParams(){
  	 this.$router.push({
            path: 'Choice', 
            name: 'Choice',
            params: { 
                name: 'name', 
                dataObj: this.ChannelType
            },
            query: {
                name: 'aa', 
                dataObj: this.tel
            }
        })
  	},
  	/*制作详情页按钮*/
  	details(){
  		  	 this.$router.push({
            path: 'details', 
            name: 'details',
            params: { 
                name: 'name', 
                dataObj: this.ChannelType
            }
        })
  	},
  	pagination(currentPage){
  		console.log(currentPage)
  	}
  	
  }
}
</script>


