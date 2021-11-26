<template>
  <div class="home">
    <img src="../assets/icon-above-font.png" alt="Logo Groupomania">
    <div class="button">
      <ButtonLogin />
      <ButtonSignup />
    </div>
    
  </div>
</template>

<script>
import ButtonLogin from '../components/ButtonLogin.vue'
import ButtonSignup from '../components/ButtonSignup.vue'

export default {
  name: 'Home',
  components: {
    ButtonLogin,
    ButtonSignup
  }
}
</script>


<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 300px;
  }
}

.button {
  display: flex;
}
</style>