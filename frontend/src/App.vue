<template>
  <div id="app">
    <HeaderLogo />
    <ButtonLogin/>
    <ButtonSignup />
  </div>
</template>

<script>
import HeaderLogo from './components/HeaderLogo.vue'
import ButtonLogin from './components/ButtonLogin.vue'
import ButtonSignup from './components/ButtonSignup.vue'

export default {
  name:'App',
  components: {
    HeaderLogo,
    ButtonLogin,
    ButtonSignup
  }
}
</script>

<style lang="scss" scoped>
#app {
  display: flex;
  justify-content: space-evenly;
}
</style>