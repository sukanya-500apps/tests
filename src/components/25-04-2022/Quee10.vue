<template>
    <div>
        <button @click="func()">click for map</button>
        <p>{{result}}</p>
    </div>
</template>
<script>
export default{
    name:"queE10",
    data(){
        return{
             users :[ { id: 20, name: 'Captain Piett' },
              { id: 24, name: 'General Veers' },
               { id: 56, name:'Admiral Ozzel' }, 
              { id: 88, name: 'Commander Jerjerrod' } ],
result:" "
        }
    },
    methods:{
        func(){
            this.result=this.users.map(user=>{
                return user.id})
        }
    }
}
</script>
