<template>
  <div>
    <form name="myform" method="post" onsubmit="myfun()">
      <input type="text" name="word" id="word" placeholder="Enter Text" />
      <button @click="myfun()">Search</button>
    </form>
  </div>
</template>
<script>
export default {
  name: "QuestioN1",
  data() {
    return {
      array: ["agile", "crm", "mantra", "technologies", "500apps", "infinity"],
    };
  },
  methods: {
    myfun() {
      let a = document.getElementById("word").value;
      const match = this.array.map((element) => {
        if (element.includes(a)) {
          return element;
        }
      });
      document.write(match);
      if (match !== undefined) {
        console.log("error");
      }
    },
  },
};

</script>





