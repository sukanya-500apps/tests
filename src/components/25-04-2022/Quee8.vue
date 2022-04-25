<template>
    <div>
        <button @click="func()">filter</button>
        <p>The officer details are:{{result}}</p>
    </div>
</template>
<script>
export default{
    name:"QueE8",
    data(){
        return{
            officers :[ { id: 20, name: 'Captain Piett' },
             { id: 24, name: 'General Veers' },
              { id: 56, name: 'Admiral Ozzel' },
               { id: 88, name: 'Commander Jerjerrod' } ],
               result:" "
        }
    },
    methods:{
        func(){
            this.result=this.officers.filter(officer=>officer.name=='General Veers')
            return this.result
        }
    }
}
</script>
