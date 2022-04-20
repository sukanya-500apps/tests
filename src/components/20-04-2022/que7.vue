<template>
    <div id="class">
        <h1>arrow function</h1>
        <p>The main difference between arrow and normal function is to mainly reducing the complexity of code</p>
        <p>Instead of using function() in normal functions we use => as a function.</p>
        Enter number:<input type="number" value="value">
        <button @click="func(num)">click</button>
<button @click="func2(num)">click</button>
    </div>
</template>
<script>
export default{
    name:"QuE7",
    data(){
        return{

        }
},
    methods:{
        func(num){
if(num%2==0){
document.write("It is a Even Number");
}
else
{
document.write("It is a odd Number");
}
},
func2:(num)=>{
    if(num%2==0){
document.write("It is a Even Number");
}
else
{
document.write("It is a odd Number");
}
}
}
}
</script>
