<template>
    <div>
<button @click="func()">splice</button>
<button @click="func2()">slice</button>
<p>{{months}}</p>
 <p>{{result}}</p> 
    </div>
</template>
<script>
export default{
    name:"SpliceSlice",
    data(){
        return{
            result:[ ],
             months : ['Jan', 'March', 'April', 'June'],
             //replace:[ ]
             num:[2,5,6,3,1,8,6,9]
        }
    },
    methods:{
        func(){
            this.months.splice(2,0,"March")
           // console.log(this.months)
            this.replace=this.months.splice(1,1,"February")
           // console.log(this.replace)
        },
       func2(){
          this.result= this.num.slice(2,7)
          return this.result
       } 
    }
}
</script>
