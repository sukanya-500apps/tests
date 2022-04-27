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
fields:["url"]
    }
  },
  methods: {
    fun() {
   let response= axios.get( "https://agilecrm.com")
let mypromise=new Promise((myResolve,myReject)=>{
    myResolve(response);
    myReject("error");
})
       mypromise.then(response =>{
         this.res=response.data;
         console.log(response.data);
         
       //
         })
         mypromise.then(function (error) {
          if (error.response) {
            console.log(error.response.data)
            console.log(error.response.status);
            console.log(error.response.headers);
          }
        });
    }
  }
}
  </script>