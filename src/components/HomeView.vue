<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <div v-for="(item,index) in list" v-bind:key="index">
        姓名:{{ item.name }}
        年龄:{{ item.age }}
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  data() {
    return {
        list:[
          {
            name:'张三',
            age:16
          },
          {
            name:'张三',
            age:16
          },
          {
            name:'张三',
            age:16
          },
          {
            name:'张三',
            age:16
          },
        ]
    }
  },
  components: {
    HelloWorld
  }
}
</script>
