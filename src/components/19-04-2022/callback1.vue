<template>
  <div>
<h1>callback</h1>
 
<p>{{result}}</p>
  </div>
</template>

<script>
export default {
    name:"CaLlback1",
data(){
    return{
result :this.myCalculator(5, 5,this.myDisplayer()),
    }
},
methods:{
   myDisplayer:(some) => {
  console.log(some)
  },
 myCalculator:(num1, num2) =>{
  let sum = num1 + num2;
  return sum;
 }
    }

}
</script>

<style>

</style>