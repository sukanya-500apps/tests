<template>

<div>

<b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="pageSize"
      aria-controls="my-table"
    >
    </b-pagination>

    <p class="mt-3">Current Page: {{ currentPage }}</p>
<b-card no-body>

<b-tabs card>

<!-- Render Tabs, supply a unique `key` to each tab -->

<b-tab v-for="i in tabs" :key="'dyn-tab-' + i" :title="'Tab ' + i" @click="fun">

<b-table striped hover :items="items" class="table" :per-page="perPage" :current-page="currentPage"></b-table>


<b-button size="sm" variant="danger" class="float-right" @click="closeTab(i)">cancel

</b-button>

</b-tab>


<!-- New Tab Button (Using tabs-end slot) -->

<template #tabs-end>

<b-nav-item role="presentation" @click.prevent="newTab" href="#"><b>+</b></b-nav-item>

</template>


<!-- Render this if no tabs -->

<template #empty>

<div class="text-center text-muted">

There are no open tabs<br>

Open a new tab using the <b>+</b> button above.

</div>

</template>

</b-tabs>

</b-card>

</div>

</template>


<script>

//import axios from "axios"


export default {

name:"MAhi",

data() {

return {
  perPage:3,
  currentPage:1,

items:[],

tabs: [],

tabCounter: 0

}

},

methods: {

async fun(){

const response=await fetch("https://jsonplaceholder.typicode.com/todos");

const responseText= await response.json();

this.items=responseText;

},
closeTab(x) {

for (let i = 0; i < this.tabs.length; i++) {

if (this.tabs[i] === x) {

this.tabs.splice(i, 1)

}

}

},

newTab() {

this.tabs.push(this.tabCounter++)

}

},

computed: {
    rows() {
      return this.items.length;
    },
  },

}

</script>