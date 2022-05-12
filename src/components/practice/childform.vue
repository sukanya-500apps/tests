<template>
  <div class="flex justify-center items-center">
    <div
      class="border border-gray-200 w-11/12 bg-white rounded-lg shadow-sm hover:shadow-2xl duration-500 px-2 py-4 my-1">
      <div class="flex flex-col m-auto w-11.5/12">
        <div class="">
          <div class="text-xl font-semibold">
            {{ taskDetails.name }}
          </div>
          <div class="pb-2 sm-pb-0">
            <p>Due: <strong>Today</strong></p>
          </div>
          <!-- Yes Button -->
          <div class="yesClass flex justify-center-0 pb-2">
            <input
              @change="disableSelect()"
              type="radio"
              :checked="marked"
              :name="taskDetails.id"
              :id="taskDetails.id + 'yes'"
              class=""/>
            <label
              :for="taskDetails.id + 'yes'"
              class="yesClass border text-center border-orange-400 rounded-2xl w-full py-0.5 hover:bg-green-400 hover:text-white hover:border-green-200">
              <span>Yes</span>
            </label>
          </div>
          <!-- No Button -->
          <div class="noClass flex justify-center pb-2">
            <input
              @change="enableSelect()"
              type="radio"
              :name="taskDetails.id"
              :id="taskDetails.id + 'no'"
              class=""
            />
            <label
              :for="taskDetails.id + 'no'"
              class="border text-center border-orange-400 rounded-2xl w-full py-0.5 label-checked:bg-green-200 hover:bg-red-800 hover:text-white hover:border-red-200"
            >
              <span>No</span>
            </label>
          </div>
          <!-- Reason Dropdown -->
          <p>Reason:</p>
          <div class="disabled flex justify-center">
            <br />
            <select
              :disabled="!notCompletedToggle"
              name="reason"
              id="reasons"
              class="w-full mt-1 rounded-lg py-0.5 my-0.5"
              :class="[notCompletedToggle ? 'bg-red-500' : '']"
              ref="selectedItem"
              @change="customEventToggle($event)"
            >
              <option value="reason_1" :selected="!notCompletedToggle">
                Select Reason
              </option>
              <option value="reason_1">Reason 1</option>
              <option value="reason_2">Reason 2</option>
              
              <option value="other">Other</option>
            </select>
          </div>
          <div
            class="flex justify-center my-0.5"
            :class="{ hidden: !customReasonToggle }"
          >
          <div>
             <label>Reason1:</label> 
             </div>
             <input
              type="text"
              placeholder="enter reason 1"
              value="reason_1"
              class="bg-gray-200 w-full rounded-md mt-1 py-0.5"
              v-model="customReason"
            />
          </div>
          <div
            class="flex justify-center my-0.5"
            :class="{ hidden: !customReasonToggle }"
          >
          <div>
             <label>Reason2:</label> 
             </div>
             <input
              type="text"
              placeholder="enter reason 2"

              value="reason_2"
              class="bg-gray-200 w-full rounded-md mt-1 py-0.5"
              v-model="customReason"
            />
          </div>
          <div
            class="flex justify-center my-0.5"
            :class="{ hidden: !customReasonToggle }"
          >
          <div>
           <label>other:</label> 
          </div>
           <input
              type="text"
              placeholder="enter other reason"

              value="reason_2"
              class="bg-gray-200 w-full rounded-md mt-1 py-0.5"
              v-model="customReason"
            />
          </div>
        </div>
        <div class="">
          <div class="flex items-end justify-start text-grey">
            <label>Comment:</label>
          </div>
          <div class="flex items-end justify-center">
            <textarea
              type="text"
              class="bg-gray-200 rounded-lg w-full h-16"
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    name:"ChildForm",
  components: {},
  emits: ["custom-event-toggle"],
  props: ["taskDetails", "marked"],
  data() {
    return {
      notCompletedToggle: false,
      customReasonToggle: false,
      customReason: "",
    };
  },
  methods: {
    updateData(property, value) {
      this.$emit("update-form-data", {
        id: this.taskDetails.id,
        property,
        value,
      });
    },
    customEventToggle(event) {
      this.updateData("reason", event.target.value);
      if (event.target.value === "other") {
        this.customReasonToggle = true;
      } else {
        this.customReasonToggle = false;
      }
    },
    disableSelect() {
      this.updateData("status", "YES");
      this.notCompletedToggle = false;
      this.customReasonToggle = false;
    },
    enableSelect() {
      this.updateData("status", "NO");
      this.notCompletedToggle = true;
    },
    setComment(event) {
      this.updateData("comment", event.target.value);
    },
}
};
</script>

<style scoped>
input[type="radio"] {
  display: none;
}
.yesClass input[type="radio"]:checked + label {
  background-color: #78be20;
  color: white;
}
.noClass input[type="radio"]:checked + label {
  background-color: #da291c;
  color: white;
}
</style>
