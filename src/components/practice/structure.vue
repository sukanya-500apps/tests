<template>
  <div>
      <h1>hello</h1>
      <button @click="func()">clickme</button>
      <p>{{array1}}</p>
      <p>{{string1}}</p>
  </div>
</template>
<script>
export default {
name:"StruCture",
data(){
    return{
        array1:[ ],
        string1:" ",
    }
},
created(){

},
mounted(){

},
updated(){

},
destroy(){

},
computed:{

},
methods:{
    func(){
        let array2=[1,2,3,4]
        console.log(this.array1)
        console.log(array2)
    }
}
}
</script>

<style>

</style>
