<template>
  <div>
      <button @click="func()">click</button>
<!-- <p>{{name}}</p> -->
  </div>
</template>

<script>
export default {
name:"NewFile",
data(){
    return{
//name:" "
    }
},
mounted(){
    console.log("mounted")
},
beforeCreate(){
console.log("beforecreate")
},
beforeMount(){
    console.log("beforemount")
},
created(){
    console.log("created")
},
methods:{
    func(){
this.name="sukanya"
console.log(this.name)
    }
}
}
</script>

<style>

</style>