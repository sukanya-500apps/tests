<template>
  <div id="app">
    <router-view/>
    <p>Name:{{name}}</p>
    <p>Subject:{{subject}}</p>
   <Quee4 :name="name"/>
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
    name:"sneha",
    subject:"java"
    }
  },
  methods: {
    parent(change) {
      this.name=this.change
      this.subject=change.subject
    }
  }
}
 </script>
 