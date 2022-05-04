<template>
<div class="row">
  <form>
    <div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3" form-group>
      <label>Quote</label>
      <textarea class="form-control" rows="3" v-model="quote"></textarea>
    </div>
    <div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3" form-group>
     <b-button variant="primary" @click="createNew">Add Quote</b-button>
    </div>
  </form>
  </div>
</template>

<script>
export default {
    name:"NewQuote",
    data(){
        return{
            quote:""
        };
    },
    methods:{
        createNew(){
            this.$emit('quoteAdded,this.quote');
            this.quote = '';
        }
    }
};
</script>

<style>
</style>
© 2022 GitHub, Inc.
