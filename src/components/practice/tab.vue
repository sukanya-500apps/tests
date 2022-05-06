<template>
    <div>
 
    <b-tabs>
      <b-tab title="Tab 1" active>
        
           <label for="name">Name</label>
            <input id="name" name="contact_name" type="text" class="form-control" value="" required> 
             <label for="id">Id</label>
        <input id="id" required name="business_id" type="number" class="form-control" value=""> 
        <b-button type="submit" variant="primary">submit</b-button>
        
      </b-tab>
      <b-tab title="Tab 2">
       <label for="email">Email</label>
            <input id="email" name="contact_email" type="email" class="form-control" value="" required>
             <label for="phone">Phone</label>
            <input id="phone" required name="business_phone" type="text" class="form-control" value="">
             <b-button type="submit" variant="primary" @click="onSubmit()">save</b-button>
      </b-tab>
    </b-tabs>

</div>
</template>
<script>
export default{
    name:"TaB",
    data(){
        return{

        }
    },
    methods:{
             onSubmit(event) {
        event.preventDefault()
        alert(JSON.stringify(this.name))
      },
        
    }
}
</script>
