<template>
    <div>
        <center>
    <p v-for="user in user" :key="user.id">
{{user.name}}{{user.email}}
    </p>
        </center>
    </div>
</template>
<script>
import usersData from '../20-04-2022/users.json';
export default{
    name:"QuE4",
    data(){
        return{
fields:["email","name"],
user:usersData,
        };
    },
};
</script>


