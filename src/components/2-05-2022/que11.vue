<template>
    <div>
<p id="demo"></p>
        {{circle.diameter()}}<br/>
        {{circle.perimeter()}}
    </div>
</template>
<script>
export default{
    name:"QuE1",
    data(){
        return{
        circle : {
radius: 20,
diameter() {
  return this.radius * 2;
},
perimeter: () => 2 * Math.PI * this.radius,
}
        }
    }
}
</script>