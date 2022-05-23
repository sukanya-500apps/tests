<template>

<div>

<b-form @submit="student()">

students:<b-form-select

v-model="studentdata.studentid"

:options="students"

value-field="id"

text-field="Name"


required

></b-form-select

><br /><br />


<b-button type="submit" @click="function1()" variant="primary" >submit</b-button><br /><br />

</b-form>

<p id="demo"></p>

<b-table striped hover :items="students" :fields="fields"></b-table>

</div>

</template>
<script>

import axios from "axios"


export default {

name: "StudentDetails",


data() {

return {

studentdata: {

studentid: "",

subject: "",

date: "",

marks: "",

remarks: "",

},

students: [],

//selected: 0,

// subjects: [

// { value: 1, text: "English" },

// { value: 2, text: "Mathematics" },

// { value: 3, text: "Electronics" },

// ],

};

},


// async mounted() {

// await this.function1();

// },


methods: {

async function1() {

let response = await axios.get(

"https://api.sampleapis.com/baseball/battingAvgsSingleSeason"

);


this.students = await response.data;

},

// async function1() {

// let response = await fetch(

// "https://api.sampleapis.com/baseball/battingAvgsSingleSeason"+this.value

// );


// this.students = await response.json();

// },


student() {

document.getElementById("demo").innerHTML = JSON.stringify(

this.studentdata

);

}

}

}

</script>