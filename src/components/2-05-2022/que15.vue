<template>
    <div>
        <button @click="func()">click here</button>
    </div>
</template>
<script>
    export default {
        name: "QuE15",
        data() {
            return {
                myColor: ["Red", "Green", "White", "Black"]
            }
        },
        methods: {
            func() {
                document.write(this.myColor + "</br>" + this.myColor.join('  ') + "</br>" + this.myColor.join(' + '));
            }
        }
    }
</script>