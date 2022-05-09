<template>
  <div>
      <emitchild1 @check="parent1" />
       <p>Name:{{name}}</p>
    <p>Subject:{{subject}}</p>
  </div>
</template>

<script>
import emitchild1 from './emitchild1.vue'
export default {
name:"EmitParent1",
components:{
    emitchild1
},
data(){
    return{
 
    name:"sneha",
     subject:"java"
    }
},
methods:{
    parent1(change) {
      this.name=change.name
      this.subject=change.subject
   }
}
}
</script>

<style>

</style>