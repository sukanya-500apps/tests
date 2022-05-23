<template>
  <div class="form-builder-response">
    <div class="col-12 px-0">
      <div class="justify-content-between align-items-center border-bottom sticky-top bg-white">
        <div class="d-md-flex justify-content-between align-items-center p-3 ml-2">
          <div>
            <div class="d-flex pb-md-0">
              <div>
                <h3>Form Response</h3>
              </div>
            </div>
          </div>
          <div>
            <div class="d-flex align-items-center mobile-feedback-space mobile_formresponse_buttons">
              <template>
                <b-button :disabled="rIndex == 0" v-if="endcount > 1" @click="next_previous_task('previous')" size="sm" variant="white" class="border">
                  <span class="fe fe-chevron-left align-middle" />
                </b-button>
                <span class="mx-3">{{ rIndex + 1 }} of {{ endcount }}</span>
                <b-button :disabled="rIndex == endcount - 1" v-if="endcount > 1" @click="next_previous_task('next')" size="sm" class="border" variant="white">
                  <span class="fe fe-chevron-right align-middle" />
                </b-button>
              </template>
              <button type="button" class="close mb-3 ml-3 text-dark close-mobilebutton" @click="hide()">
                <svg
                  viewBox="0 0 16 16"
                  width="1em"
                  height="1em"
                  focusable="false"
                  role="img"
                  aria-label="x"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  class="bi-x b-icon bi mobile_forms_response"
                >
                  <g>
                    <path
                      d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                    ></path>
                  </g>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
          <b-row class=" overflow-y-auto h-100">
            <b-col cols="12" md="12" lg="4" xl="3" class="p-17px">
              <Formsidebar :response="response" />
            </b-col>
            <b-col lg="9">
              <div role="tablist" class="accordion" v-if="form_type === 'multi'">
                <b-card class="mb-0" no-body :key="index" v-for="(form, index) in form_schema">
                  <b-card-header variant="primary" v-b-toggle="`form-response-${index}`" class="d-flex justify-content-between align-items-center">
                    <h4 class="mb-0">Step {{ index + 1 }}</h4>
                    <i class="fe fe-chevron-up" />
                  </b-card-header>
                  <b-collapse class="card-body" :id="`form-response-${index}`" :visible="index == 0 ? true : false" accordion="my-accordion" role="tabpanel">
                    <Element :schema="form" :response_json="form_response[index]" :type="type" :theme="theme_data" />
                  </b-collapse>
                </b-card>
              </div>
              <b-card class="mb-0 shadow-none mt-4 mx-4" v-else>
                <Element :schema="form_schema" :response_json="form_response" :type="type" :theme="theme_data" />
              </b-card> </b-col
          ></b-row>
    </div>
  </div>
</template>
<script>
  import Element from "./Element";
  import Formsidebar from "./ Formsidebar";
  export default {
    name: "FormResponse",
    components: { Element, Formsidebar },
    props: {
      response: { type: [String, Object] },
      theme_data: {
        type: [String, Object],
      },
      schema: {
        type: [String, Object],
      },
      response_json: {
        type: [String, Object, Array],
      },
      form_type: {
        type: String,
      },
      rIndex: Number,
      type: {
        type: String,
        default: () => {
          return "Preview";
        },
      },
    },
    data() {
      return {
        form_schema: {},
        form_response: {},
        endcount: 0,
      };
    },
    async mounted() {
      this.endcount = this.$parent.$parent.$refs.response_list.results.length;
    },
    methods: {
      delete_buttons(form_json) {
        let data = form_json.items;
        delete data[data.length - 1];
      },
      hide() {
        this.$root.$emit("bv::toggle::collapse", "form_response");
      },
      next_previous_task(key) {
        console.log("prevNext");
        var rowData = {};
        if (key == "next") {
          rowData = this.$parent.$parent.$refs.response_list.results[this.rIndex + 1];
          this.$emit("rowClicked", rowData, this.rIndex + 1);
        } else {
          rowData = this.$parent.$parent.$refs.response_list.results[this.rIndex - 1];
          this.$emit("rowClicked", rowData, this.rIndex - 1);
        }
      },
    },
    watch: {
      schema: {
        immediate: true,
        handler(newValue) {
          this.form_schema = typeof newValue === "string" ? JSON.parse(newValue) : newValue;
          // Delete the buttons while showing the preview
          if (this.form_type === "single") {
            this.delete_buttons(this.form_schema);
          } else {
            this.form_schema.map((form) => this.delete_buttons(form));
          }
        },
        deep: true,
      },
      response_json: {
        immediate: true,
        handler(newValue) {
          this.form_response = typeof newValue === "string" ? JSON.parse(newValue) : newValue;
        },
        deep: true,
      },
    },
  };
</script>
<style>
  .form-builder-response .card-header.not-collapsed .fe {
    transform: rotate(180deg);
  }
  .form-builder-response div[id="true"] {
    margin-bottom: 1.375rem;
  }
</style>
