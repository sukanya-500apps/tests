<template>
    <div>
        <b-form-input type="Number" id="num1" placeholder="Enter first number"></b-form-input>
        <b-form-input type="Number" id="num2" placeholder="Enter second number"></b-form-input>
        <button @click="multiply()">multiply</button>
        <button @click="divide()">divide</button>
        <p id="demo">The result is:</p>
    </div>
</template>
<script>
export default{
    name:"QuEstion2",
    data(){
        return{
multiplyresult:[ ],
divisionresult:[ ]
        }
    },
    methods:{
        multiply(){
 document.getElementById("demo").innerHTML =
document.getElementById("num1").value *
document.getElementById("num2").value;
return this.multiplyresult;
        },
        divide(){
document.getElementById("demo").innerHTML =
document.getElementById("num1").value /
document.getElementById("num2").value;
return this.divisionresult;

        }
    }
}
</script>
