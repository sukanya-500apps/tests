<template>
    <div>
       <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      ></b-pagination>
<b-tabs>
      <b-tab @click="func()" title="Tab 1" active>
        <b-table :items="res" :fields="fields" :per-page="perPage" :current-page="currentPage"></b-table>
      </b-tab>
</b-tabs>
</div>
</template>
<script>

export default{
    name:"TaB",
    data(){
        return{
            
res:" ",
perPage:3,
currentPage:1
        }
    },
    methods:{
              async func(){
let response= await fetch("https://jsonplaceholder.typicode.com/todos/")
this.res=await response.json()
             }
    },
   computed: {
    rows() {
      return this.res.length;
    },
  },
}
</script>
