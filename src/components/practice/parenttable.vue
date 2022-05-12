<template>
<div>
  <button @click="toggleComplete">Complete All</button>
  <form @submit.prevent="submitModal">
    <childform
      v-for="taskList in myChecklist.tasks.data"
      :key="taskList.id"
      :taskDetails="taskList"
      :marked="markAll"
      @update-form-data="
        this.myChecklist.tasks.data.find((task) => task.id === $event.id)[
          $event.property
        ] = $event.value">
    </childform>
    <div class="">
      <button class="" type="submit">Submit</button>
    </div>
  </form>
</div>
</template>
<script>
import childform from "./childform.vue";
export default {
  name: "App",
  components: {
    childform,
  },
  data() {
    return {
      markAll: false,
      myChecklist: {
        success: true,
        name: "Checklist 1",
        roomId: 1,
        notes: "Notes about the checklist",
        tasks: {
          data: [
            {
              id: 1,
              name: "Task 1",
              frequency: "D",
              status: null,
              comment: null,
              reason: null,
              updated_at: "2021-08-09",
            },
            {
              id: 2,
              name: "Task 2",
              frequency: "M",
              status: null,
              comment: null,
              reason: null,
              updated_at: "2021-08-09",
            },
            {
              id: 3,
              name: "Task 3",
              frequency: "Y",
              status: null,
              comment: null,
              reason: null,
              updated_at: "2021-08-09",
            },
          ],
        },
      },
    };
  },
  methods: {
    toggleComplete() {
      this.markAll = !this.markAll;
    },
    submitModal() {
      console.log("inside");
    },
  },
};
</script>

<style>
</style>