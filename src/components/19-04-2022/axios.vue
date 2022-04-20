<template>
  <div>
    <h1>Using Axios</h1>

<button @click="fun()">clickme</button>

<p>{{result}}</p>

  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "AxiOs",

  data() {
    return {
result:" "
    }
  },

  methods: {
    fun() {
    let response= axios.get("https://jsonplaceholder.typicode.com/todos/")
let mypromise=new Promise((myResolve, myReject)=>{
    myResolve(response);
    myReject("error");
})
        mypromise.then((response) => console.log(response.data))
         mypromise.then(function (error) {
          if (error.response) {
             console.log(error.response.data);

            console.log(error.response.status);

            console.log(error.response.headers);
          } else if (error.request) {
         console.log(error.request);
          } else {
            console.log("Error", error.message);
          }

           console.log(error.config);
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

