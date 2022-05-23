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

subjects:

<b-form-select

v-model="studentdata.subject"

:options="subjects"

required

></b-form-select>


date: <b-form-datepicker v-model="studentdata.date" required></b-form-datepicker

><br />

marks:<b-form-input

v-model="studentdata.marks"

type="number"

placeholder="enter student marks upto 100"

min="0"

max="100" required

></b-form-input

><br />

remarks:<b-form-input

v-model="studentdata.remarks"

type="text" required

></b-form-input

><br />

<b-button type="submit" variant="primary" >submit</b-button><br /><br />

</b-form>

<p id="demo"></p>

<!--<b-table striped hover :items="students" :fields="fields"></b-table>-->

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

selected: 0,

subjects: [

{ value: 1, text: "English" },

{ value: 2, text: "Mathematics" },

{ value: 3, text: "Electronics" },

],

};

},


async mounted() {

await this.function1();

},


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