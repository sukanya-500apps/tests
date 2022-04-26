<template>
  <div>
    <b-form-input
      v-model="value"
      placeholder="enter country name"
      required
    ></b-form-input>
    <button @click="getData()">click for data</button>
    
    <b-container class="bv-example-row">
      <b-card>
        <b-card-text v-for="data1 in result" :key="data1.id">
          <b-card>
            <b-row>
              <b-col>University name:{{ data1.name }}</b-col>
            </b-row>
            <div class="w-100"></div>
            <b-row>
              <b-col>Domain:{{ data1.domains }}</b-col>
              <b-col>State-province:{{ data1.state - province }}</b-col>
              <b-col>
                  <a :href="data1.Web-pages">website_url:{{ data1.web_pages }}</a>
                  </b-col>
            </b-row>
          </b-card>
        </b-card-text>
      </b-card>
    </b-container>
  </div>
</template>
<script>
export default {
  name: "QueS5",
  data() {
    return {
      result: " ",
      fields: ["name", "domains", "state-province", "web-pages"],
    };
  },
  methods: {
    async getData() {
      try {
        let response = await fetch(
          "http://universities.hipolabs.com/search?country=" + this.value
        );
        this.result = await response.json();
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    this.getData();
  },
};
</script>
