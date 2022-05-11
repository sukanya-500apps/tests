<template>
  <div>
<button @click="func()">click</button>
<p>{{arr}}</p>
<p>{{arr1}}</p>
  </div>
</template>
<script>
export default {
name:"HiI",
data(){
    return{
arr:[ ],
arr1:[ ]
    }
},
methods:{
    func(){
        this.arr = [1,5,2,6,9,8];
this.arr.forEach((value) => {
    this.arr1.push(value+2);
    console.log(value);
   
});
    }
}
}
</script>

<style>

</style>