<template>
	<div>
	<swiper></swiper>
	</div>
</template>

<script>
	import swiper from './swiper'
export default {
  name: 'preview',
    components: {
    swiper,
  },
  data () {
    return {
      msg:null,
      conceal:false
    }
  },
  mounted(){
  	console.log(0)
     console.log(this.$route.params)
     this.msg=this.$route.params
  },
  methods:{
  	
  }
  	  
}
</script>

<style>
</style>