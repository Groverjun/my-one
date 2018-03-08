<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    
  </div>
</template>

<script>
export default {
  name: 'preview',
  data () {
    return {
      msg: '预览页面，'
    }
  },
  mounted(){
  	console.log(0)
  }
}
</script>

