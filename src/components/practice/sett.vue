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
methods:{
    func(){
          setTimeout(() => {
        this.string="jhh"
        //console.log("time is",this.string);
      }, 5000);
    },
    }
}

</script>

<style>

</style>