<template>
  <div class="form-element">
    <div>{{ field.title }}</div>
    <slot :value="field.value" :update="update"></slot>
    <div v-if="empty" class="empty">Must not be empty</div>
  </div>
</template>
<script>
export default {
  props: {
    field: {
      type: Object,
      default: () => {}
    },
  },
  computed: {
    empty() {
     
      if (this.type===0) {
        return this.type
      }
      return true
    }
  },
  methods: {
    update(event) {
      this.type = event.target.value
    }
  }
}
</script>
<style scoped>
.form-element {
  margin-bottom: 1rem
}
.empty {
  color: red
}
</style>