<template>
  <div class="home">
    <ConnectionBar />
    <LoginForm />

  </div>
</template>

<script>
// @ is an alias to /src
import ConnectionBar from '../components/ConnectionBar.vue'
import LoginForm from '../components/LoginForm.vue'

export default {
  name: 'Home',
  components: {
    ConnectionBar,
    LoginForm
    
  }
}
</script>
