<template>
  <div>
<button @click="func()">click</button>
<p>{{string}}</p>
  </div>
</template>

<script>
export default {
name:"SeTT",
data(){
    return{
string:" "
    }
},
created(){
  setTimeout(() => {
        this.string="hello"
        console.log("time is",this.string);
      }, 3000);
},
mounted(){
          setTimeout(() => {
        this.string="hii"
        console.log("time is",this.string);
      }, 4000);
    },
    methods:{
      func(){
        setTimeout(() => {
        this.string="jhh"
        console.log("time is",this.string);
      }, 3000);
      }
    }
}

</script>

<style>

</style>