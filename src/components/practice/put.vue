<template>
    <div>
           <button v-on:click="fun()">click</button>
          <b-table :items="res" :fields="fields"></b-table>  
    </div>
</template>
<script>
import axios from "axios"
export default{
     name: "AxiOs1",
  data() {
    return {
res:[ ],
fields:["userId","id","title","completed"]
    }
  },
  
  methods: {
    async fun() {
   let response= await axios.get("https://jsonplaceholder.typicode.com/todos/")
try{
      response =>{
         this.res=response.data;
         console.log(response.data);
         //return response.data
         }}
      catch{
          console.log("error")
      }
     this.response1=axios.put("https://jsonplaceholder.typicode.com/todos", {
         if (response1.title == "delectus aut autem"){
           return title="sukanya"
         }
       })
       try{
      
         this.res=response1.title;
          console.log(response1.title);
        }

        catch{(function (error) {
          console.log(error);
    });
    }
  }
 
}


</script>
