<template>
  <div>
    <b-row>
      <b-col lg="3">
        <b-card v-if="response">
          <div class="d-flex align-items-center justify-content-between border-bottom p-3 font-size-13px">
            <div>
              <p class="mb-0">Title</p>
            </div>
            <div>
              <p class="text-muted float-right mb-0">{{ response.email ? response.email : "Form Response" }}</p>
            </div>
          </div>
          <div class="d-flex align-items-center justify-content-between border-bottom p-3 font-size-13px">
            <div>
              <p class="mb-0">Location</p>
            </div>
            <div>
              <template>
                <p v-if="response.ip_address" class="mb-1 mr-2">
                  <IPAddress :key="response.ip_address.id" :ip_address="response.ip_address" />
                </p>
              </template>
            
            </div>
          </div>
          <div class="d-flex align-items-center justify-content-between border-bottom p-3 font-size-13px">
            <div>
              <p class="mb-0">Browser</p>
            </div>
            <template>
              <Browser :browser="response.browser_type" class="ml-7" />
            </template>
            <div>
              <p class="text-muted float-right mb-0 ">{{ response.browser_type }}</p>
            </div>
          </div>
          <div class="d-flex align-items-center justify-content-between border-bottom p-3 font-size-13px">
            <div>
              <p class="mb-0">Device</p>
            </div>
            <template>
              <OperatingSystem :operatingSystem="response.device" class="ml-7" />
            </template>
            <div>
              <p class="text-muted float-right mb-0 ">{{ response.device }}</p>
            </div>
          </div>
          <div class="d-flex align-items-center justify-content-between border-bottom p-3 font-size-13px">
            <div>
              <p class="mb-0">submitted on</p>
            </div>
            <div>
              <span
                class="text-muted float-right"
                v-b-tooltip:hover
                :title="
                  moment
                    .utc(response.created_date)
                    .local()
                    .format('YYYY-MM-DD HH:mm:ss')
                "
              >
              </span>
              <VueMomentsAgo
                prefix=""
                :key="response.created_date"
                :date="
                  moment
                    .utc(response.created_date)
                    .local()
                    .format('YYYY-MM-DD HH:mm:ss')
                "
                lang="en"
              />
            </div>
          </div>
          <div class="d-flex align-items-center justify-content-between border-bottom p-3 font-size-13px">
            <div>
              <p class="mb-0">Type</p>
            </div>
            <div>
              <div class="float-right">
                <badge v-if="response.type == 'Email'" class="badge-soft-secondary badge mb-0 mr-2 rounded badge-soft-warning">{{ response.type }}</badge>
                <badge v-else-if="response.type == 'Embed'" class="badge mb-0 mr-2 rounded badge-soft-danger">{{ response.type }}</badge>
                <badge v-else class="badge mb-0 mr-2 rounded badge-soft-primary">{{ response.type }}</badge>
                <badge v-if="response.type == 'BPM'" class="badge-soft-secondary badge mb-0 mr-2 rounded badge-soft-warning">{{ response.type }}</badge>
              </div>
            </div>
          </div>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>
<script>
  import VueMomentsAgo from "@/components/crud/VueMoment";
  import IPAddress from "@/components/ipaddress/IPAddress";
  import OperatingSystem from "@/components/OperatingSystem";
  import Browser from "@/components/Browser";
  export default {
    name: "FormSidebar",
    components: {
      VueMomentsAgo,
      IPAddress,
      OperatingSystem,
      Browser,
    },
    props: {
      response: { type: [String, Object] },
    },
  };
</script>
