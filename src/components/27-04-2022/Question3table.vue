<template>
   <div>
       <h3>CRUD in table</h3>
       <TablE
               endpoint="/permissions"
               :columns="['firstname','lastname','action']"
               :form-fields="{
               firstname: '',
               lastname:''
           }">
           <!-- your form input fields in this slot-->
           <template v-slot:input-fields="{formdata}">
               <b-form-group id="input-group-2" label="Your name:" label-for="input-2">
                   <b-form-input
                           id="input-2"
                           v-model="formdata.firstname"
                           required
                           placeholder="Enter first name"></b-form-input>
               
                   <b-form-input
                           id="input-2"
                           v-model="formdata.lastname"
                           required
                           placeholder="Enter last name"></b-form-input>
                           </b-form-group>
               
           </template>
       </TablE>
   </div>
</template>

<script>
   import TablE from './TablE1.vue';

   export default {
       name:"QuEstion3table",
       components: {TablE},
   };
</script>

<style scoped>

</style>