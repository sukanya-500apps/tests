<template>
    <div id="vue-app">
        <h1>hi</h1>
    <meta charset="utf-8">
    <title>vuecomputed property</title>
        <h1>computed properties</h1>
        <file/>
        <button v-on:click="a++">Add to A</button>
        <button v-on:click="b++">Add to B</button>
 <p>A-{{a}}</p>
 <p>B-{{b}}</p>
 <p>age+A={{AddToA()}}</p>
 <p>age+B={{AddToB()}}</p>
<link rel="stylesheet" href="styles.css">
    </div>
</template>
    
  
   <script>
   import file from './file.vue'
   export default{
       name:"CoMp",
       components:{
           file
       }
   }
   
   </script>
