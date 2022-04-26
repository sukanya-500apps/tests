<template>
    <div>
        <p>emit</p>
        <b-table striped hover :items="user" :fields="fields" ></b-table>
       <emitchild @check="parent" /> 
    </div>
</template>
<script>
import emitchild from "../practice/emitchild.vue"
export default{
    name:"EmitParent",
    components:{
        emitchild,
    },
data(){
return{
    user:[{name:'sukanya',subject:'db'},
    {name:'kiran',subject:'db'},
    {name:'arun',subject:'db'}],
    fields:['name','subject']
}
},
methods:{
    parent(data){
        console.log("data",data)
     this.user[0].subject= data.subject;
}
}
}
</script>
