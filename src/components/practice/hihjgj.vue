<template>
  <div v-if="dropdown_data">
    <!-- List view -->
    <div class="shadow-none mb-3">
      <p :class="[errorClass] + ' mt-3'">{{ message }}</p>
      <b-row class="justify-content-end forms_filtersdropdowns">
        <b-col md="4" lg="3" xl="2" class="pr-md-2 mb-3 mb-md-0">
          <!-- <label class="mb-1">{{ $t("forms.select_form_label") }}</label> -->
          <b-dropdown menu-class="w-315 max-height-300 overflow-auto" class="w-100" variant="white" toggle-class="w-100 text-truncate d-flex justify-content-between">
            <template #button-content>
              <p class="mb-0 text-truncate w-85 text-left">{{ dropdown_text }}</p>
            </template>
            <b-dropdown-form class="dropdown-item p-3">
              <b-input-group size="sm">
                <template #append>
                  <b-input-group-text class="py-0 px-2">
                    <i class="fe fe-search" />
                  </b-input-group-text>
                </template>
                <b-input v-model="searchData" type="text" placeholder="Search.." id="myInput" @input="filterFunction(searchData)" />
              </b-input-group>
            </b-dropdown-form>
            <b-dropdown-item-button button-class="text-truncate" v-for="(item, index) in dropdown_data" :key="index" @click="selectedForms(item)" :disabled="index == 0">
              {{ item.name }}
            </b-dropdown-item-button>
          </b-dropdown>
        </b-col>
        <b-col md="4" lg="3" xl="2" class="px-md-2 mb-3 mb-md-0 responsetype_dropdown">
          <div class="d-flex">
            <!-- <label class="mb-1">{{ $t("forms.select_form_type") }}</label> -->
            <!-- <i class="fe fe-info ml-2 text-muted" v-b-tooltip:hover :title="$t('forms.embeded_helptext')" /> -->
          </div>
          <b-dropdown class="w-100" variant="white" toggle-class="d-flex justify-content-between">
            <template #button-content>
              <p class="mb-0 text-truncate w-85 text-left">{{ getUpperCase(save_json.type) }}</p>
            </template>
            <b-dropdown-item-button v-for="(item, index) in response_type" :key="index" @click="toggleResponseType(item)" :disabled="index == 0">
              {{ item }}
            </b-dropdown-item-button>
          </b-dropdown>
        </b-col>
        <div class="align-self-end col-auto pl-md-2">
          <b-button variant="white" @click.prevent="exportCSV()">
            <i class="fe fe-file-text" />
            Export
          </b-button>
        </div>
      </b-row>
    </div>
    <CRUD
      :key="key"
      form_listener="form_responses"
      :url="url"
      :count_url="count_url"
      :delete_url="deleteURL"
      :headers="form_responses_fields"
      :params="params"
      :results_per_page="50"
      :search_columns="['id']"
      ref="response_list"
      @rowclicked="rowClicked"
      empty_message="No Form Responses Found"
      :gridview="false"
      class="row-cursor-pointer"
      :bulk_options="bulk_options"
      @bulk_delete="bulkDelete"
    >
      <template #cell(browser_type)="data">
        <Browser :browser="data.item.browser_type" />
      </template>
      <template #cell(ip_address)="data">
        <IPAddress :key="data.item.ip_address" :ip_address="data.item.ip_address" />
      </template>
      <template #cell(device)="data">
        <OperatingSystem :operatingSystem="data.item.device" class="pt-lg-1" />
      </template>
      <template #cell(email)="data">
        <p class="mb-0 tonumber-hover">
          <span v-if="data.item.email" :id="data.item.created_by" :key="data.item.created_by"> {{ data.item.email }}</span>
          <span v-else> Form Response </span>
          <b-link v-b-modal.modalContactAddToCRM @click.prevent="openModal(data.item)" class="cursor-pointer phone-icon" v-if="data.item.email"
            ><span class="fe fe-folder-plus mr-2 text-primary"></span
          ></b-link>
        </p>
      </template>
      <template #cell(created_date)="data">
        <span>{{ data.item.created_date }}</span>
      </template>
      <template #cell(actions)="data">
        <div class="d-flex align-items-center justify-content-end mr-4" v-if="data">
          <b-link href="#" class="text-danger ml-4">
            <span class="fe fe-trash-2 option-icon-delete" @click="delete_row(data)" v-b-tooltip:hover :title="$t('forms.btn_delete')"></span>
          </b-link>
        </div>
      </template>
      <template #empty_state>
        <EmptyState
          :heading="$t('forms.empty_responses_list')"
          :description="$t('forms.empty_responses_desc')"
          empty_state_img="/img/empty-states/forms/no-data.svg"
          :sub_block="{
            main_heading: $t('forms.responses_main_heading'),
            main_sub_heading: $t('forms.responses_main_sub_heading'),
            heading_one: $t('forms.responses_heading_one'),
            description_one: $t('forms.responses_description_one'),
            heading_two: $t('forms.responses_heading_two'),
            description_two: $t('forms.responses_description_two'),
            heading_three: $t('forms.responses_heading_three'),
            description_three: $t('forms.responses_description_three'),
          }"
        />
      </template>
    </CRUD>
    <!-- End List view -->
    <!-- AddToCRM Modal start here -->
    <b-modal
      ref="modalContactAddToCRM"
      id="modalContactAddToCRM"
      :title="$t('forms.add_crm')"
      body-bg-variant="soft-light"
      ok-only
      :ok-title="$t('forms.btn_save')"
      ok-variant="primary px-5 "
      scrollable
    >
      <AddToCRM app="forms" :formFields="formFields" />
    </b-modal>
    <!-- Form response sidebar -->
    <div>
      <b-sidebar
        width="70%"
        :visible="sidebarShow"
        @change="toggleSidebar"
        @hidden="hidden"
        right
        shadow
        backdrop
        class="border-left"
        id="form_response"
        title="Form Response"
        header-class="close-btn-right d-flex align-items-center card border-bottom rounded-0
           shadow-none justify-content-between flex-row-reverse mb-0"
        body-class="bg-soft-light rounded-0"
        no-header
        no-header-close
        no-close-on-route-change
      >
        <FormResponse
          :rIndex="rIndex"
          :key="render"
          :schema="form_schema"
          :form_type="form_type"
          :response_json="form_response_json"
          @rowClicked="rowClicked"
          :theme_data="theme_data"
          :response="response"
        ></FormResponse>
      </b-sidebar>
    </div>
    <!-- End Form response sidebar -->
  </div>
  <div v-else>
    <Placeholder heading="No Data Found" />
  </div>
</template>
<script>
  import Bots from "@/js/botup/bots";
  import FormResponse from "./FormResponse";
  import Data from "@/js/form/forms";
  import CRUD from "../../../components/CRUDPagination";
  import EmptyState from "@/components/PlaceholderFull";
  import FireDownload from "@/js/500apps/fire-download";
  import IPAddress from "@/components/ipaddress/IPAddress";
  import Browser from "@/components/Browser";
  import DynamicJS from "@/js/500apps/dynamicjs";
  import AdvanceThemeJS from "../mixins/advance-theme";
  import OperatingSystem from "@/components/OperatingSystem";
  import AddToCRM from "@/components/AddToCRM";
  export default {
    name: "Form",
    components: { CRUD, FormResponse, EmptyState, IPAddress, Browser, OperatingSystem, AddToCRM },
    mixins: [AdvanceThemeJS],
    props: {
      project_id: {
        type: [String, Number],
        required: false,
      },
      data: {
        type: Object,
        required: false,
      },
      save_json: {
        type: Object,
        required: false,
      },
    },
    data() {
      return {
        formFields: [
          { name: "Name", type: "text", column_key: "first_name", value: "" },
          { name: "Email", type: "email", column_key: "email", value: "" },
        ],
        render: 0,
        searchData: "",
        url: "https://api.${region}.500apps.com/v2/forms/domain/forms_responses",
        deleteURL: "https://forms.${region}.500apps.com/v2/form_responses",
        count_url: "https://forms.${region}.500apps.com/v2/aggregate/forms_responses/count?where=project_id=" + this.project_id,
        params: "w=form_id=0",
        dropdown_text: "",
        dropdown_data: [{ id: 0, name: "Please select form", form_json: "", type: "", theme: "" }],
        sidebarShow: false,
        key: "",
        name: "",
        message: "",
        errorClass: "badge badge-soft-success",
        reponse_url: "",
        form_response_json: {},
        form_schema: {},
        form_responses_fields: [
          { key: "isSelected", label: "" },
          { key: "email", label: "Title", sortable: true },
          { key: "ip_address", label: "Location" },
          { key: "browser_type", label: "Browser", thClass: "text-center", tdClass: "responses_browser" },
          { key: "device", label: "device" },
          { key: "created_date", label: "submitted on", data_type: "date", sortable: true },
          { key: "actions", label: "" },
        ],
        form_type: "",
        theme_data: "",
        theme_properties: "",
        response_type: [this.$t("forms.please_select_type"), this.$t("forms.select_type_all"), this.$t("forms.select_type_email"), this.$t("forms.select_type_embed"), "BPM"],
        latest_form_data: "",
        rIndex: 0,
        bulk_options: [
          {
            type: this.$t("botup.bulk_option_delete"),
            action: "delete",
            icon: "fe fe-trash-2",
            event: "bulk_delete",
          },
        ],
      };
    },
    watch: {
      data: {
        immediate: true,
        handler: function(newValue) {
          if (newValue && Object.keys(newValue).length > 0) {
            this.appendData(newValue);
          }
        },
        deep: true,
      },
    },
    mounted() {
      this.getData();
    },
    methods: {
      // Open CRM modal
      openModal(item) {
        this.formFields[0].value = item.email.split("@")[0].split(".")[0];
        this.formFields[1].value = item.email;
      },
      hidden() {
        this.appendTheme("");
      },
      async bulkDelete(data) {
        let ids_string = `(${data.toString()})`;
        let response = await Bots.bulkDelete(ids_string);
        if (response.status == 200) {
          this.$bvModal.hide("control-modal");
          this.$refs.bots.download();
          this.$refs.bots.selected_items = [];
          this.$refs.bots.is_select_all = false; // Reset the selection
        }
      },
      async filterFunction(searchData) {
        let data = await Data.getData(this.project_id, searchData);
        if (data.length != 0) {
          this.changeParams(data[0]);
        } else {
          this.message = this.$t("forms.form_search_status");
          setTimeout(() => {
            this.message = "";
          }, 1500);
        }
      },
      getUpperCase(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
      },
      // export contacts
      exportCSV() {
        if (this.name !== "All") {
          let data = this.$refs.response_list.search.results.map((ele) => {
            return JSON.parse(ele.response);
          });
          // Deleted captcha data
          let modified_data = data.map((property) => {
            if (property?.recaptcha_response_status) {
              delete property.recaptcha_response_status;
              return property;
            }
            return property;
          });
          FireDownload.fireDownloadLink(modified_data, "FormResponse.csv");
        } else {
          this.message = this.$t("forms.export_message");
          setTimeout(() => {
            this.message = "";
          }, 1500);
        }
      },
      delete_row(data) {
        this.$refs.response_list.delete_row(data);
      },
      /**
       * By Invoke, getting form response data
       */
      async getData() {
        Data.disablePCors();
        let obj_keys = Object.keys(this.save_json);
        let params = obj_keys.reduce((tot, el, index) => {
          return (tot += el + "=" + this.save_json[el] + (obj_keys.length - 1 > index ? "&" : ""));
        }, "where=");
        this.save_json.type = "all";
        Data.params = params;
        let result = await Data.get();
        result?.[0] ? this.appendData(result) : undefined;
      },
      // Append static data
      appendData(item) {
        this.latest_form_data = item[0];
        this.changeParams(item[0]);
        this.dropdown_data = [...this.dropdown_data, ...item];
      },
      deleteTheme() {
        DynamicJS.remove("advance_theme_builder");
      },
      // Delete default theme and load new theme
      appendTheme(element) {
        this.deleteTheme();
        let theme_data = JSON.parse(element);
        this.advance_theme_data(theme_data, "preview");
      },
      rowClicked(item, index) {
        this.response = item;
        this.rIndex = index;
        this.render++;
        this.dropdown_data.filter((data) => {
          if (data.id == item.form_id) {
            this.form_schema = data.form_json;
            this.form_type = data.type;
            this.theme_properties = data.theme;
          }
        });
        this.form_response_json = typeof item.response === "string" ? JSON.parse(item.response) : item.response;
        this.sidebarShow = true;
        setTimeout(() => {
          if (this.theme_properties !== '""') this.appendTheme(this.theme_properties);
          this.theme_data = JSON.parse(this.theme_properties);
        }, 100);
      },
      // Select forms for filter
      selectedForms(item) {
        this.latest_form_data = item;
        this.changeParams(item);
      },
      //Select response type
      toggleResponseType(type) {
        this.save_json.type = type;
        this.changeParams(this.latest_form_data);
      },
      // Assign item data w.r.t the variables
      changeParams(item) {
        this.name = item.name;
        let params = item.name.toLowerCase() === "all" ? "w=" : "w=form_id=" + item.id + " and ";
        if (this.save_json.type) {
          params = this.save_json.type.toLowerCase() === "all" ? `${params}type in('email','embed','bpm') and project_id=${this.project_id}` : `${params}type='${this.save_json.type.toLowerCase()}'`;
        }
        this.params = params;
        this.count_url = "https://forms.${region}.500apps.com/v2/aggregate/forms_responses/count?" + params;
        // For refreshing the component with new data
        this.key = item.id + Math.random();
        this.form_schema = item.form_json;
        this.form_type = item.type;
        this.dropdown_text = item.name;
        this.theme_properties = item.theme;
        // this.appendTheme(item);
      },
      // Need to click on multiple items
      toggleSidebar(e) {
        this.sidebarShow = e;
      },
      // Get location from IPAddress component based on condition
      getLocation(value) {
        if (value.country) return { country: value.country, city: value.city };
        return { ip_address: value.ip_address };
      },
    },
  };
</script>
<style>
  .row-cursor-pointer tbody tr {
    cursor: pointer !important;
  }
</style>
