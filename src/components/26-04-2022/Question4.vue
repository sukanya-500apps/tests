<template>
  <div>
    <form name="myform" method="post" onsubmit="myfun()" id="demo">
      <input type="text" name="word" id="word" placeholder="Enter Text" v-model="result" />
      <button @click="search()">Search</button>
      <ul id="demo">
  <li v-for="items in list" :key="items.id" >
    {{ items }}
  </li>
</ul>
    </form>
  </div>
</template>
<script>
export default {
  name: "QuestioN1",
  data() {
    return {
      list: ['orange', 'red', 'blue', 'black', 'white'],
    }
  },
  methods: {
    search() {
      this.result = document.getElementById("word").value;
      const match = this.list.filter((element) => {
        if (element.includes(this.result)) {
           document.getElementById("demo").value=element
         return element
        }
      });
      document.write(match);
      if (match !== undefined) {
        console.log("error");
      }
    },
  },
};
</script>






<!--<template>
    <div>

<b-form-input type="text" id="demo" placeholder="Enter the item">
</b-form-input>
<p><ol>
<li v-bind="lists in list" track-by="id"></li></ol>{{list.id}}</p>
    </div>
</template>
<script>
export default{
    name:"QuesTion4",
    data(){
        return{
            list : [ 'orange', 'red', 'blue', 'black', 'white' ]
        }
    },
    methods:{
        search(){
            this.list.map(item=>item==document.getElementById("demo"))

        }
    }
}
</script>-->
