<template>
  <div>
    <h1>parse</h1>
    <p>{{ res }}</p>
    <button @click="fun()">Try it</button>
  </div>
</template>
<script>
export default {
  name: "AbhI",
  data() {
    return {
      text: ["Ford", "BMW", "Audi", "Fiat"],
      res: [ ],
    };
  },
  methods: {
    fun() {
      this.res = JSON.stringify(this.text);
      //console.log(this.res);
       this.res=this.text.filter((res)=>{
       res==this.text[1]
       })
    },
  },
};
</script>
<style>
</style>



