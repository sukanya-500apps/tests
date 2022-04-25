<template>
    <div>
        <h1>Question7</h1>
<button @click="func()">click</button>
<p>The index of id(88):{{result}}</p>
    </div>
</template>
<script>
export default{
    name:"QuEe7",
    data(){
        return{
  users : [ { id: 20, name: 'Captain Piett' }, 
  { id: 24, name: 'General Veers' },
   { id: 56, name:'Admiral Ozzel' }, 
   { id: 88, name: 'Commander Jerjerrod' }],
result:" "
        }
    },
    methods:{
        func(){
            this.result=this.users.findIndex(user=>user.id==88)
            return this.result
        }
    }
}
</script>
