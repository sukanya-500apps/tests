<template>
  <div id="app">
    <router-view/>
    <h1>Question5</h1>
    <p>Name:{{name}}</p>
    <p>Subject:{{subject}}</p>
    <h2>Question4</h2>
   <Quee4 :msg="msg"/>
    <Quee5 @check="parent" />
  </div>
</template>
<script>
import Quee4 from "./components/25-04-2022/Quee4.vue";
import Quee5 from "./components/25-04-2022/Quee5.vue";
export default{
  components:{
    Quee4,
    Quee5
  },
  name:"QUEe5",
  data(){
    return{
      msg:"hi",
    name:"sneha",
    subject:"java"
    }
  },
  methods: {
    parent(change) {
      this.name=change.name
      this.subject=change.subject
    }
  }
}
 </script>
 