<template>
    <div>
        <table align="centre">
          <h3>{{res}}</h3>
           <button v-on:click="fun()">click</button>
            <tbody>
            <tr v-for="userId in res" :key="userId.id"></tr>
            <tr v-for="id in res" :key="id.id"> </tr>
<tr v-for="title in res" :key="title"></tr>
<tr v-for="completed in res" :key="completed"></tr>
<td>{{res.userId}}</td>
<td>{{res.id}}</td>
<td>{{res.title}}</td>
<td>{{res.completed}}</td>
            </tbody>
        </table>
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
    fun() {
   let response= axios.get("https://jsonplaceholder.typicode.com/todos/".html())
let mypromise=new Promise((myResolve,myReject)=>{
    myResolve(response);
    myReject("error");
})
       mypromise.then(response =>{
         this.res=response;
         console.log(response.data);
         return response.data
         })
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
