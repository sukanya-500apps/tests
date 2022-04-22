<template>
    <div>
        <center>
   <!-- <p v-for="user in users" :key="user.id">
   </p> -->
   <b-table striped hover :items="user" :fields="fields">
       <button v-on:click="func()">click</button>
   </b-table>
        </center>
    </div>
</template>
<script>
import usersData from '../20-04-2022/users.json';
export default{
    name:"QuE4",
    data(){
        return{
fields:["email","name","_id","isActive" ],

user:usersData,
        }
    },
    methods:{
       func(){
            this.users=this.users.filter(this.users.isActive=="true")
            return this.users
        }
     }
}
</script>


