<template>
  <div>
 <b-form name="form" >
FirstName:<b-form-input type="text" name="fname" placeholder="Enter your FName" required></b-form-input>
LastName:<b-form-input type="text" name="lname" placeholder="Enter your LName" required></b-form-input>
EnterPassword:<b-form-input type="password" name="Epassword" placeholder="Enter your Password" required></b-form-input>
ConfirmPassword:<b-form-input type="password" name="Cpassword" placeholder="Enter your ConfirmPassword" required></b-form-input>
Email:<b-form-input type="Email" name="Email" placeholder="Enter your Email" required></b-form-input>
<b-button size="sm" variant="success" @submit="newTab()">Submit</b-button>
</b-form>
  </div>
</template>

<script>
export default {
name:"DroP",
data(){
    return{

    }
}
}
</script>

<style>

</style>