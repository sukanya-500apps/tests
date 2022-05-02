<template>
    <div>
           <button v-on:click="fun()">click</button>
             <button v-on:click="updateProduct()">clickme</button>
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
      let data = [{
    		title:'delectus aut autem',// eslint-disable-line no-mixed-spaces-and-tabs
    		completed:'completed'// eslint-disable-line no-mixed-spaces-and-tabs
      }];// eslint-disable-line no-mixed-spaces-and-tabs
   let response= await axios.get("https://jsonplaceholder.typicode.com/todos/")
let mypromise=new Promise((myResolve,myReject)=>{
    myResolve(response);
    myReject("error");
})
       mypromise.then(response =>{
         this.res=response.data;
         console.log(response.data);
         //return response.data
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
    axios.put("https://jsonplaceholder.typicode.com/todos",data)
   .then(response => {
                 console.log(response);
             })
             .catch(function (error) {
                console.log(error.response)
             })
    },
    
    updateProduct(productId) {
        const headers = { 
            'Authorization': 'Bearer my-token',
            'Content-Type': 'application/json'
        };
        const data = {// eslint-disable-line no-mixed-spaces-and-tabs
    		name: 'Test Post',// eslint-disable-line no-mixed-spaces-and-tabs
    		date: '2021.08.10'// eslint-disable-line no-mixed-spaces-and-tabs
    	};// eslint-disable-line no-mixed-spaces-and-tabs
        axios.put(`http://127.0.0.1:8000/api/products/${productId}`, data, {headers})
             .then(response1 => {
                 console.log(response1);
             })
             .catch(function (error) {
                console.log(error.response1)
             })
    }
    },
  }

  
 



</script>
