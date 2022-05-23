<template>
    <div>
        <p>emit</p>
        <b-table striped hover :items="users" :fields="fields" ></b-table>
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
    users:[{name:'sukanya',subject:'db'},
    {name:'kiran',subject:'db'},
    {name:'arun',subject:'db'}],
    fields:['name','subject']
}
},
methods:{ 
    parent(){
        // for (var j = 0; j < this.users.length; j++){
    //    console.log("data",data)
       
    //  this.users[1].subject= data.subject;
    //   console.log("data",data)
       // }
    // if(this.users.name=="kiran"){
    //     this.users.subject==data.subject;
    //     console.log("data",data)
    // }
    // else{
    //     return 
    // }

}
}
}
</script>
