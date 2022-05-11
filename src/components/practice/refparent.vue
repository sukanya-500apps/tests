<template>
  <div class="hello">
    <refchild
      :name="name"
      ref="refer"
      :number="number"
      :Items="Items"
    ></refchild>

    <button @click="click()">Ref</button>
  </div>
</template>

<script>
import refchild from "./refchild.vue";

export default {
  name: "HelloWorld",

  components: {
    refchild,
  },

  data() {
    return {
      name: "PropsConcept",

      number: 10,

      Items: [
        { name: "500apps", id: 1 },

        { name: "Technologies", id: 2 },

        { name: "Agile", id: 3 },

        { name: "Mantra", id: 4 },

        { name: "Clockly", id: 5 },

        { name: "CRM", id: 6 },

        { name: "500apps", id: 7 },
      ],
    };
  },

  methods: {
    click() {
      this.$refs.refer.fun1();
    alert("Parent");
    },
  },
};
</script>






