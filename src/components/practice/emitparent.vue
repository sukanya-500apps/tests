<template>
    <div>
        <p>emit</p>
        <b-table striped hover :items="user" :fields="fields" v-if="name==sukanya"></b-table>
       <emitchild @check="parent()" /> 
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
    parent(){
    if(this.user.name=="sukanya")
    return this.user.subject=="java"
}
}
}
</script>
