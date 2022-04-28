<template>
  <div>
    <h1>Using Axios</h1>
<button v-on:click="fun()">clickme</button>
  <b-table striped hover :items="res" :fields="fields"></b-table>
<!-- <p>{{res}}</p> -->
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "AxiOs",
  data() {
    return {
res:[ ],
fields:["userId","id","title","completed"]
    }
  },
  methods: {
    fun() {
   let response= axios.get("https://jsonplaceholder.typicode.com/todos/")
let mypromise=new Promise((myResolve,myReject)=>{
    myResolve(response);
    myReject("error");
})
       mypromise.then(response =>{
         this.res=response.data;
         //console.log(response.data);
         
       //
         })
         mypromise.then( (error)=> {
          if (error.response) {
            console.log(error.response.data)
            console.log(error.response.status);
          }
        });
     axios.post("https://jsonplaceholder.typicode.com/todos", 
     {
         title: "sukanya",
       })
       .then(function (response)
        {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
    });
    },
  }
}
</script>

