<template>
    <div>
        <h1>extracting html tags</h1>
        <button @click="func()">click</button>
        {{posts}}
    </div>
</template>
<script>
export default{
    name:"XYz",
    data(){
        return{
posts:" "
        }
    },
    methods:{
       async func(){
           try{
            this.response= await fetch("https://www.agilecrm.com/sitemap.xml")
//  this.posts = await document.getElementsByTagName("url").innerHTML
//  console.log(this.posts)
 if (element.includes(this.response)) {
           document.getElementById("demo").value=element
         return element
        }
           }
       catch (error) {
    console.log(error);
   }
    }
    }
}
</script>
