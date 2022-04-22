<template>
  <div>
    <h1>Using Axios</h1>
    
<button @click="fun()">clickme</button>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "AxiOs",
  data() {
    return {
//response:" "
    }
  },
  methods: {
    fun() {
    let response= axios.get("https://jsonplaceholder.typicode.com/todos/1")
let mypromise=new Promise((myResolve,myReject)=>{
    myResolve(response);
    myReject("error");
})
       mypromise.then(response =>{
         console.log(response.data);
         return response.data
         })
        //   .then(result => {
        //   commit('setEmployee', result.data);
        //   return result.data; // resolve 
        // })
         
         mypromise.then(function (error) {
          if (error.response) {
            console.log(error.response.data)
            console.log(error.response.status);
            console.log(error.response.headers);
          }
        });
     axios.post("https://jsonplaceholder.typicode.com/todos", {
         title: "sukanya",
       })
       .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
    });
    },
  }
}
</script>

