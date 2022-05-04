<template>
  <div>
    <FormElement :field="name">
      <template v-slot="{value, update}">
        <input :value="value" @input="update">
      </template>
    </FormElement>
    <FormElement :field="description">
      <template v-slot="{value, update}">
        <textarea :value="value" @input="update"/>
      </template>
    </FormElement>
  </div>
</template>

<script>
import FormElement from './FormElement';
export default {
  components: {
    FormElement
  },
  props: {
    msg: String
  },
  data() {
    return {
      name: {
        title: 'Name',
        value: ''
      },
      description: {
        title: 'Job description',
        value: ''
      },
    }
  }
}
</script>