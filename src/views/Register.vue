<template>
  <div class="auth-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text xs-center">Sign Up</h1>
          <p class="text xs-center">
            <router-link :to="{ name: 'Home' }">Need an account?</router-link>
          </p>
          VALIDATION ERRORS

          <form @submit.prevent="onSubmit" action="">
            <fieldset class="form-group">
              <input type="text" class="from-control from-control-lg" placeholder="Username">
            </fieldset>

            <fieldset class="form-group">
              <input type="text" class="from-control from-control-lg" placeholder="Email">
            </fieldset>

            <fieldset class="form-group">
              <input type="password" class="from-control from-control-lg" placeholder="Password">
            </fieldset>

            <button class="btn btn-lg btn-primary pull-xs-right">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
    Register page
  </div>
</template>

<script>
export default {
  name: "McvRegister",
  methods: {
    onSubmit() {
      console.log('Submitted form')
    }
  }
}
</script>

<style scoped>

</style>