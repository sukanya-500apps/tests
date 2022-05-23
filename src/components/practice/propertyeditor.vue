<template>
  <b-sidebar
    v-if="is_enabled"
    :visible="sidebarShow"
    @change="toggleSidebar"
    @hidden="hidden"
    right
    width="370px"
    shadow
    class="border-left"
    id="propertyeditor"
    title="Property Editor"
    header-class="close-btn-right d-flex align-items-center card border-bottom rounded-0 
           shadow-none justify-content-between flex-row-reverse mb-0"
    body-class="rounded-0 pt-1 bg-soft-light"
    backdrop
    backdrop-variant="dark"
    no-close-on-backdrop="true"
  >
    <div>
      <b-form @input="onInput(false)" @reset="onReset" @submit.prevent="onInput(true)">
        <b-tabs content-class="my-4">
          <b-tab :title="toUpperCase(index)" :key="index" v-for="(items, index) in modifiedElements">
            <!-- Rendering Form -->
            <b-card class="mb-0 shadow-none border-0 mb-3">
              <div class="form-group mb-3" v-for="(item, index) in items" :key="index">
                <label>{{ item.label }}</label>
                <div v-if="!item.children || item.tag === 'Dtable'">
                  <b-form-group :description="item.props.description">
                    <component :is="item.tag" v-model="item.value" v-bind="item.props"></component>
                  </b-form-group>
                </div>
                <div v-else>
                  <Grid v-model="item.children" @input="onInput" ref="grid"></Grid>
                </div>
              </div>
            </b-card>
          </b-tab>
        </b-tabs>
        <span class="badge badge-soft-success ml-3 mt-2 ">{{ status_message }}</span>
        <div class="d-flex justify-content-end border-top pt-3">
          <b-button type="reset" variant="secondary" class="mr-3 px-4">Reset</b-button>
          <b-button type="submit" variant="primary" class="px-md-4 px-3">Save</b-button>
        </div>
        <div>
          <element-actions >
          Components:<b-form-select v-model="selected" :options="element" @click="drop()">
            <b-form-select-option :value="null">Please select the components</b-form-select-option>
          </b-form-select>
          </element-actions>
          Condition:<b-form-select v-model="selected" :options="condition">
            <b-form-select-option :value="null">Please select the condition</b-form-select-option>
          </b-form-select>
          Enter your text here:<b-form-textarea id="textarea" v-model="text" placeholder="Enter your text here" rows="3" max-rows="6"></b-form-textarea> status:<b-form-select
            v-model="selected"
            :options="status"
          >
            <b-form-select-option :value="null">Please select the status</b-form-select-option>
          </b-form-select>
        </div>
      </b-form>
    </div>
  </b-sidebar>
</template>
<script>
  import EditorMixin from "../mixins/Editor";
  import Grid from "../Components/Grid";
  import { bus } from "@/js/500apps/emit-bus";
  import SidebarClose from "../builder/sidebar-close";
  import ElementActions from "../builder/ElementActions.vue";
  export default {
    name: "PropertyEditor",
    props: {
      element: {
        type: Object,
        required: true,
      },
    },
    components: { Grid, ElementActions },
    mixins: [EditorMixin],
    data() {
      return {
        show: false,
        is_enabled: true,
        sidebarShow: false,
        status_message: "",
        modifiedElements: [],
        visible: false,
        title: "",
        selected: null,
        condition: ["Equal", "Notequal"],
        status: ["enable", "disable", "hide", "show"],
      };
    },
    mounted: function() {
      this.sidebarClose();
    },
    created() {
      this.loadElement();
    },
    computed: {},
    methods: {
      ...SidebarClose,
      toUpperCase(tabTitle) {
        return tabTitle.charAt(0).toUpperCase() + tabTitle.slice(1);
      },
      hidden() {
        if (!this.show) {
          this.element = this.originalValue;
          this.onInput();
          this.is_enabled = false;
        }
      },
      onReset(e) {
        let _this = this;
        e.preventDefault();
        _this.element = this.originalValue;
        setTimeout(function() {
          // Optional chaining for checking nested objects
          _this.$refs?.grid?.[0]?.reset();
          _this.onInput();
        }, 0);
      },
      onInput(enable) {
        // Delaying for getting checkbox and select values. please check the following link.
        // https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event
        if (enable) {
          this.show = true;
          this.status_message = this.$t("forms.property_status_message");
          setTimeout(() => {
            this.status_message = "";
          }, 1500);
        } else {
          this.show = false;
        }
        var _this = this;
        setTimeout(function() {
          let updatedData = { props: {} };
          Object.keys(_this.modifiedElements).map((ele) => {
            _this.modifiedElements[ele].map((el) => {
              if (el.label === "Value") {
                updatedData[el.label] = el.value;
              } else if (el.children) {
                // Other children elements
                updatedData["children"] = el.children;
              } else {
                Object.assign(updatedData.props, { [el.label]: el.value });
              }
            });
          });
          bus.$emit("saveNewProps", updatedData);
        }, 0);
      },
      // Invoked after click on elementactions(such as Edit)
      loadElement() {
        if (this.element && Object.keys(this.element).length) {
          // For Deep copy
          this.originalValue = JSON.parse(JSON.stringify(this.element));
          this.modifiedElements = this.input_data_change(this.element);
          this.visible = true;
          this.sidebarShow = true;
        } else {
          this.visible = false;
        }
      },
      /**
       * v-modal for sidebar
       */
      toggleSidebar(e) {
        this.sidebarShow = e;
      },
    },
    watch: {
      element: {
        immediate: true,
        handler(newValue) {
          this.element = newValue;
          this.loadElement();
        },
      },
    },
  };
</script>
<style scoped></style>
