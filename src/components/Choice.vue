<template>
  <div class="hello">
     		<p>这里是选择模板页</p>
     		<router-link to="preview">预览</router-link>
     		<router-link to="operation">制作</router-link>
  </div>
</template>

<script>
export default {
  name: 'preview',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted(){

  }
}
</script>

