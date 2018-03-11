<Three-module v-bind:conceal="conceal">
	<div>000000000</div>
</Three-module>

<script>
export default {
  name: 'a',
  porps:['conceal'],
  data () {
    return {
      UserName: '山东信融',
    }
  },
  mounted(){
	console.log(conceal)
  },
  methods:{
  	SignOut(){
  		alert("确定退出吗")
  	}
  }
}	

</script>

<style>
</style>