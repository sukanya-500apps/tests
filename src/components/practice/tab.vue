<template>
    <div>
 
    <b-tabs>
      <b-tab  @click="func()" title="Tab 1" active>
           <!-- <label for="name">Name</label>
            <input id="name" name="contact_name" type="text" class="form-control" value="" required> 
             <label for="id">Id</label>
        <input id="id" required name="business_id" type="number" class="form-control" value="">  -->
        
        <b-table :items="res" :fields="fields"></b-table>
        
      </b-tab>
      <b-tab title="Tab 2">
       <label for="email">Email</label>
            <input id="email" name="contact_email" type="email" class="form-control" value="" required>
             <label for="phone">Phone</label>
            <input id="phone" required name="business_phone" type="text" class="form-control" value="">
            
      </b-tab>
    </b-tabs>

</div>
</template>
<script>
export default{
    name:"TaB",
    data(){
        return{
res:" "
        }
    },
    methods:{
              async func(){
let response= await fetch("https://jsonplaceholder.typicode.com/todos/")
this.res=await response.json()
             }
    },
    
}
</script>
