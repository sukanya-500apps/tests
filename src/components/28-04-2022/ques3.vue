<template>
  <div>
    <h3>This is Web Scrapping</h3>
    <button @click="getdata()"></button>
    <p>{{response}}</p>
  </div>
</template>
<script>
const axios = require("axios");
const cheerio = require("cheerio");
export default {
  name: "QuE3",
  data() {
    return {
      response: [],
    };
  },
  methods: {
    getdata() {
      let url = "https://www.msn.com/en-au?AR=2";
      axios({
        method: "get",
        url: url,
      }).then(function (response) {
        let html = response.data;
        let $ = cheerio.load(html);
        console.log(html);
        $("ul.tertiary li").each(function () {
          $(this).find("h3").attr("area-lable");
        });
      });
    },
  },
  created() {
    this.getdata();
  },
};
</script>
<style>
</style>