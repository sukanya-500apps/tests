<template>
    <div>
        <center>
   <p v-for="user in user" :key="user.id">
   </p>
   <b-table striped hover :items="user" :fields="fields"></b-table>
        </center>
    </div>
</template>
<script>
import usersData from '../20-04-2022/users.json';
export default{
    name:"QuE4",
    data(){
        return{
fields:["email","name","_id"],

user:usersData,
        };
    },
};
</script>


