<template>
<div >
    <h1 align="center">scrollspy with visible</h1>
  <b-container fluid >
    <b-row>
      <b-col cols="6">
        <b-list-group v-b-scrollspy:listgroup-ex  v-b-visible="handleVisibility">
          <b-list-group-item href="#list-item-1">Item 1</b-list-group-item>
          <b-list-group-item href="#list-item-2">Item 2</b-list-group-item>
          <b-list-group-item href="#list-item-3">Item 3</b-list-group-item>
          <b-list-group-item href="#list-item-4">Item 4</b-list-group-item>
          <b-list-group-item href="#list-item-5">Item 5</b-list-group-item>
        </b-list-group>
      </b-col>

      <b-col cols="6">
        <div id="listgroup-ex" style="position:relative; overflow-y:auto; height:100px" :class="[isVisible ? 'bg-info' : 'bg-light', 'border','p-2', 'text-center']">
          <h4 id="list-item-1">Item 1</h4>
          <p>{{ text }}</p>
          <h4 id="list-item-2">Item 2</h4>
          <p>{{ text1 }}</p>
           
          <h4 id="list-item-3">Item 3</h4>
          <p v-b-visible="handleVisibility"></p>
          <p >{{ text }}</p>
         
          <h4 id="list-item-4">Item 4</h4>
          <p>{{ text }}</p>
          <h4 id="list-item-5">Item 5</h4>
          <p>{{ text1 }}</p>
        </div>
      </b-col>
    </b-row>
  </b-container>
   <p class="mt-2">
      Visible: {{ isVisible }}
    </p>
</div>
</template>

<script>
  export default {
      name:"ScrollSpy",
    data() {
      return {
           isVisible: false,
        text: `
          Quis magna Lorem anim amet ipsum do mollit sit cillum voluptate ex nulla
          tempor. Laborum consequat non elit enim exercitation cillum aliqua
          consequat id aliqua. Esse ex consectetur mollit voluptate est in duis
          laboris ad sit ipsum anim Lorem. Incididunt veniam velit elit elit veniam
          Lorem aliqua quis ullamco deserunt sit enim elit aliqua esse irure. Laborum
          nisi sit est tempor laborum mollit labore officia laborum excepteur
          commodo non commodo dolor excepteur commodo. Ipsum fugiat ex est consectetur
          ipsum commodo tempor sunt in proident.`,
          text1:`
          A function reference that will be called whenever visibility changes.
        The callback is passed a single boolean argument.
        true indicates that the element is intersecting (partially or entirely visible) 
            in the viewport,
             or false if the element is not visible/intersecting with the viewport.
            The callback will be called each time the element's visibility changes (except when the`
      }
    },
     methods: {
      handleVisibility(isVisible) {
        this.isVisible = isVisible
      }
    }
  }
</script>