<template>
    <div>
        <button @click="func()">click here
        </button>
    </div>
</template>
<script>
    export default {
        name: "QuE14",
        methods: {
            func() {
                var is_array = function (input) {
                    if (toString.call(input) === "[object Array]")
                        return true;
                    return false;
                };
                console.log(is_array('w3resource'));
                console.log(is_array([1, 2, 4, 0]));
            }
        }
    }
</script>