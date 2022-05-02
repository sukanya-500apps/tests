<template>
  <div class="overflow-auto">
    <b-form-select
      v-model="value"
      :options="countries"
      ></b-form-select>        
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="pageSize"
      aria-controls="my-table">
    </b-pagination>
    <b-row cols-md="7"><b-col>
<b-table id="my-table" :per-page="pageSize" :current-page="currentPage" striped hover :items="items">
<b-col>
<p>university_name: {{ value.university_name }}</p></b-col>
<b-col><p>domains: {{ value.domains }}</p></b-col>
<p @click="redirect(value.website_url)">
<a :href="value.website_url" target="_blank">{{value.website_url}}</a>
website_url: {{ value.website_url }}</p>
<b-col><p>state_province: {{ value.state_province }}</p></b-col>
</b-table>
</b-col>
</b-row>
    <p class="mt-3">Current Page: {{ currentPage }}</p>
    <button @click="getData()" class="button">Submit</button>
    <b-container mt="5" class="co">
      
      <div class="row mt=6" id="mytable">
        
        <div class="col-md-6">
            <h3>University details</h3>
          <div class="p-2 alert alert-secondary" v-for="data1 in items" :key="data1.id" >
            <!-- <h3>University details</h3> -->
            <draggable   class="list-group kanban-column" group="tasks">
              <div class="list-group-item" >
                <b-container class="bv-example-row" >
                  <b-card>
                    <b-card-text
                 v-for="data1 in items"
                      :key="data1.id"
                      :per-page="pageSize" :current-page="currentPage"
                      small>
                    </b-card-text>
                        <b-row>
                          <b-col>University name:{{ data1.university_name }}</b-col>
                        </b-row>
                        <div class="w-100"></div>
                        <b-row>
                          <b-col>Domain:{{ data1.domains }}</b-col>
                          <b-col>State-province:{{ data1.state_province }}</b-col>
                          </b-row>
                          <b-row>
                          <b-col>
                          website_url:<a :href="data1.website_url" target="_blank">{{data1.website_url}}</a>
                          </b-col>
                        </b-row>
                  </b-card>
                </b-container>
              </div>
            </draggable>
          </div>
        </div>
        <div class="col-md-5">
          <div class="p-2 alert alert-success">
            <h3>files</h3>
            <draggable
              class="list-group kanban-column"
              :list="countries"
              group="tasks">
              <div
                class="list-group-item"
                v-for="element in arrTested"
                :key="element.name"></div>
            </draggable>
          </div>
        </div>
      </div>
    </b-container>
  </div>
</template>
<script>
import axios from "axios"
import draggable from "vuedraggable";
const { getNames } = require("country-list");
export default {
  name: "PAgination",
  components: {
    draggable,
  },
  data() {
    return {
      pageSize:3 ,
      currentPage: 1,
      items: " ",
      countries: [],
      fields:["university_name", "domains", "website_url", "state_province"]
    };
  },
  // watch: {
  //   currentPage(newValue, oldValue) {
  //     console.log("newValue", newValue);
  //     console.log("oldValue", oldValue);
  //     this.pagedata(newValue);
  //   },
  // },
  methods: {
    // async pagedata(page) {
    //   this.pageShowData = [];
    //   this.pageShowData = this.items.slice(
    //     (page - 1) * this.pageSize,
    //     page * this.pageSize
    //   );
    // },
    redirect(value) {
      window.open(value, "_blank");
    },
    async getData() {
      const response = await axios.get(
        "http://universities.hipolabs.com/search?country=" + this.value,
        {
          method: "GET",
        }
      );
      const responseText = await response.data;
      this.items = responseText.map((row) => {
        return {
          university_name: row.name,
          domains: row.domains,
          website_url: row.web_pages[0],
          state_province: row["state-province"],
        };
      });
      // this.pagedata(1);
    },
  },
  mounted() {
    let countries = getNames();
    this.countries = countries.map((row) => {
      return { value: row, text: row };
    });
    if (this.countries.length) this.value = this.countries[0].text;
  },
  computed: {
    rows() {
      return this.items.length;
    },
  },
  created() {
    this.getData();
  },
};
</script>
<style scoped>
.h3{
  color:black;
}
.button
{
background-color:#4CAF50;;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}
.co
{
    background-color: lightyellow;
  border: none;
  /* color: white; */
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}
</style>