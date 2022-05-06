<template>
  <div class="accordion" role="tablist">
    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab" >
        <b-button block v-b-toggle.accordion-1 variant="info" >user 1 {{i}}</b-button>
      </b-card-header>
      <b-collapse
        id="accordion-1"
        visible
        accordion="my-accordion"
        role="tabpanel">
        <b-card-body>
          <b-card-text>
              <b-form name="form" >
FirstName:<b-form-input type="text" name="fname" placeholder="Enter your FName" required></b-form-input>
LastName:<b-form-input type="text" name="lname" placeholder="Enter your LName" required></b-form-input>
EnterPassword:<b-form-input type="password" name="Epassword" placeholder="Enter your Password" required></b-form-input>
ConfirmPassword:<b-form-input type="password" name="Cpassword" placeholder="Enter your ConfirmPassword" required></b-form-input>
Email:<b-form-input type="Email" name="Email" placeholder="Enter your Email" required></b-form-input>
<b-button size="sm" variant="success" @submit="newTab()">Submit</b-button>
</b-form>
<b-button size="sm" variant="danger" class="float-right" @click="closeTab(i)">
Close Tab
</b-button></b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>
    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-2 variant="info">user 2</b-button>
      </b-card-header>
      <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>name:</b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>
    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-3 variant="info">user3</b-button>
      </b-card-header>
      <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>{{ text }}</b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>
  </div>
</template>
<script>
export default {
    name:"CollApse", 
    data(){
        return{
             tabs: [],
        tabCounter: 0
        }
    },
    methods:{
        closeTab(x) {
        for (let i = 0; i < this.tabs.length; i++) {
          if (this.tabs[i] === x) {
            this.tabs.splice(i, 1)
          }
        }
      },
      newTab() {
        this.tabs.push(this.tabCounter++)
      }
    }
}
</script>

