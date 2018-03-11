<template>
  <div class="hello">
     		<p>这里是选择模板页</p>
     		<a  @click="sendParams">预览</a>
     		<router-link to="operation">制作1</router-link>
     		<router-link to="operation2">制作21</router-link>
  </div>
</template>

<script>
export default {
  name: 'preview',
  data () {
    return {
      msg:null,
      conceal:false
    }
  },
  mounted(){
  	$("#show").show()
     console.log(this.$route.params)
     this.msg=this.$route.params
  },
  methods:{
  	  sendParams(){
	  	  this.$router.push({
	            path: 'preview', 
	            name: 'preview',
	            params: { 
	                name: 'name', 
	                dataObj: "sahlksag"
	            },
	      })
  	}
  }
}
</script>

