<template>
    <div>
<h1>Question1</h1>
<!-- <p>{{result}}</p>  -->
<b-table :items="Users" :fields="fields"></b-table>
<button @click="func()">click to reverse</button>
<button @click="func2()">click for alphabetic order</button>
    </div>
</template>
<script>
export default{
    name:"QuEstion1",
    data(){
        return{
            
           Users :[{name:"500apps", id:1},
{name:"Technologies",id:2},
{name:"Agile",id:3},
{name:"Mantra",id:4},
{name:"Clockly",id:5},
{name:"CRM",id:6},
{name:"500apps",id:7}],
fields1:["name","id"],
fields2:["name"]
}
},
methods:{
func(){
this.Users.reverse()
return this.Users
},
func2(){
    console.log(this.Users.sort((x, y) => (x[this.fields2] || "").toString().localeCompare((y[this.fields2] || "").toString())));
}
}
}
</script>
