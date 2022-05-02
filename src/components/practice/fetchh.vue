<template>
    <div>
        <b-container fluid>
            <b-form-select v-model="res" :options="title">countries
</b-form-select>
<button @click="getd()">click</button>
 <b-form-group
     label=""
     label-for="filter-input"
     label-cols-sm="8"
     label-align-sm="center"
     label-size="l"
     class="mb-0">
     <b-input-group size="sm">
      <b-form-input
       id="filter-input"
       v-model="filter"
       type="search"
       placeholder="Type to Search"></b-form-input>
       <b-input-group-append>
       <b-button :disabled="!filter" @click="filter = ''" class="button2">refresh</b-button>
      </b-input-group-append>
     </b-input-group></b-form-group>
<b-table :items="res" :fields="fields" filter="filter" @filtered="OnFiltered"></b-table>
<template #cell(actions)="row">
   <b-button
    size="sm"
    @click="info(row.item, row.index, $event.target)"
    class="mr-1">
    Info modal
   </b-button>
   <b-button size="sm" @click="row.toggleDetails">
    {{ row.detailsShowing ? "Hide" : "Show" }} Details
   </b-button>
  </template>
        </b-container>
    </div>
</template>
<script>
export default{
    name:"FeTch",
    data(){
        return{
res: " ",
filter:null,
fields:["userId","id","title","completed"]
        }
    },
    computed: {
  sortOptions() {
   return this.fields
    .filter((f) => f.sortable)
    .map((f) => {
     return { text: f.label, value: f.key };
    });
  },
 },
 mounted() {
    this.res =this.res.title .map((row) => {
      return { value: row, text: row };
    });

    if (this.res.length) this.value = this.res[0].text;
  },
    methods:{
        async getd(){
let response= await fetch("https://jsonplaceholder.typicode.com/todos/")
this.res=await response.json()
        },
         onFiltered(filteredItems) {
   this.totalRows = filteredItems.length;
   this.currentPage = 1;
  },
    },
    created() {
  this.getd();
 },
}
</script>
