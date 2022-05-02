<template>
    <div>
        <button @click="myCalculator(5,5,myDisplayer)"></button>
    </div>
</template>
<script>
export default{
    name:"caLlback",
    data(){
        return{
        }
    },
    methods:{
         myCalculator(num1, num2, myCallback) {
  let sum = num1 + num2;
  myCallback(sum);
},
myDisplayer(som) {
  console.log(som);
}

    },



}
</script>
