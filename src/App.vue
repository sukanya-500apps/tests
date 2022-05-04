<template>
    <router-view/>
    <!-- <h1>Question5</h1>
    <p>Name:{{name}}</p>
    <p>Subject:{{subject}}</p>
    <h2>Question4</h2>
   <Quee4 :msg="msg"/>
    <Quee5 @check="parent" /> -->
    <!-- <Question3table/> -->
  <!-- <div id="app">
  <div class="container">
    <app-header :quoteCount="quotes.length" :maxQuotes="maxQuotes"></app-header>
    <app-new-quote @quoteAdded="newQuote"></app-new-quote>
    <app-quote-grid :quotes="quotes" @quoteDeleted="deleteQuote"></app-quote-grid>
      <div class="row">  
        
        <div class="col-sm-12 text-center">
         <div class="alert alert-info" id="add">info:click on a Quote to delete it!</div>
        <div col-sm-12></div>
      </div>
  </div>
  </div> 
  </div> -->
</template>
<script>
// import QuoteSgrid from '@/components/practice/Quotegrid.vue'
// import NewQuote from '@/components/practice/ Newquote.vue'
// import Header from '@/components/practice/Header.vue'
// export default {
//   name:"app",
//   data(){
//     return{
//       quotes:[
//         'just a quote too see something'
//       ],
//       maxQuotes:10
//     }
   
//     },
//     methods:{
//       newQuote(quote){
//         if(this.quotes.length >= this.maxQuotes) {
//           return alert('please delete Quote')
//         }
//       this.quotes.push(quote.id);
//     },
//     deleteQuote(index){
//       this.quotes.splice(index,1); 
//     }
//     },
//     components:{
//       appQuoteGrid:QuoteSgrid,
//       appNewQuote:NewQuote,
//       appHeader:Header
      
//     }
//   }
// import Quee4 from "./components/25-04-2022/Quee4.vue";
// import Quee5 from "./components/25-04-2022/Quee5.vue";
// import Question3table from "./components/26-04-2022/Question3table.vue"
// export default{
//   components:{
//      Question3table
//     Quee5
//    },
//   name:"QUEe5",
//   data(){
//     return{
//       msg:"hi",
//     name:"sneha",
//     subject:"java"
//     }
//   },
//   methods: {
//     parent(change) {
//       this.name=change.name
//       this.subject=change.subject
//     }
//   }
// }
</script>
 