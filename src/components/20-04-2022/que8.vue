<template>
    <div>
        <b-table users :items="items" :fields="fields"></b-table>
    </div>
</template>
<script>
export default{
    name:"QuE8",
    data(){
        return{
            fields:['email','id','name'],
            items:[
{email: "Eliseo@gardner.biz",
id: 1,
name: "id labore ex et quamlaborum"},
 {email: "Jayne_Kuhic@sydney.com",
 id: 2,
 name: "quo vero reiciendisvelitsimiliqueearum"}, 
 {email: "Nikita@garfield.biz",
 id: 3,
 name: "odio adipisci rerumaut animi"},
{email: "Lew@alysha.tv",
  id: 4,
  name: "alias odio sit"}
],
   
        }
    }
}
</script>
