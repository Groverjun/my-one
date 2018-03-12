<template>
	<div id="app">
		<div id="wrapper">
			<nav class="navbar navbar-default navbar-static-top m-b-0">
				<div class="navbar-header">
					<!--logo区-->
					<div class="top-left-part">
						<a href="#" class="logo">
							<span class="hidden-xs">
		                       <img src="./assets/logo.png" alt="home" width="50%"/>
                     		</span>
						</a>
					</div>
					<!--左边logo结束-->
					<!--左边列表区-->
					<ul class="nav navbar-top-links navbar-left">
						<li>
							<a href="javascript:void(0)" class="open-close waves-effect waves-light">
								<i class="ti-menu"></i>
							</a>
						</li>
					</ul>
					<!--左边列表结束-->
					<!--右边列表-->
					<ul class="nav navbar-top-links navbar-right pull-right">
						<li class="dropdown">
							<a class="dropdown-toggle profile-pic" style="cursor: pointer;">
								<b class="hidden-xs">您好：</b>
								<b class="hidden-xs">{{UserName}}</b>
							</a>
						</li>
						<li class="dropdown">
							<a class="dropdown-toggle profile-pic" style="cursor: pointer;">
								<b class="hidden-xs"v-on:click="SignOut">退出</b>
							</a>
						</li>
					</ul>
					<!--右边列表结束-->
				</div>
				<!--navbar-header结束-->
			</nav>
			<div class="navbar-default sidebar" role="navigation">
				<div class="sidebar-nav slimscrollsidebar">
					<div class="sidebar-head">
						<h3><span class="fa-fw open-close"><i class="ti-close ti-menu"></i></span><span class="hide-menu">导航</span></h3>
					</div>
					<div class="user-profile">
						<div class="dropdown user-pro-body">
							<ul class="nav in" id="side-menu">
								<li>
									<router-link to="home" class="waves-effect">
										<span class="hide-menu">首页 </span>
									</router-link>
								</li>
								<li id="show">
									<router-link to="Choice" class="waves-effect" v-if="conceal">
										<span class="hide-menu">着落页模板 </span>
									</router-link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<!---->
			<div id="page-wrapper">
				<router-view/>
			</div>
			<!--内容区结束-->
			<footer class="footer text-center">
				<font style="vertical-align: inherit;">
					<font style="vertical-align: inherit;">信融模板制作 </font>
				</font>
			</footer>
		</div>

	</div>
</template>
<script type="text/javascript">
export default {
  name: 'app',
  data () {
    return {
      UserName: '山东信融',
      conceal:true
    }
  },
  mounted(){
		this.$xhr.get("/login/channelInfo").then((res)=>{
			this.UserName=res.data.sub_company
		})
  },
  methods:{
  	SignOut(){
  		alert("确定退出吗")
  	}
  }
}
</script>