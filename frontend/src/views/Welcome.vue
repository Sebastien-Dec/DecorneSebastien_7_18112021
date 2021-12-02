<template>
  <div class="welcome">
    <img src="../assets/icon-above-font.png" alt="Logo Groupomania">
    <div class="button">
      <router-link to="/login">
        <button id="login">Se Connecter</button>
      </router-link>
      <router-link to="/signup">
        <button id="signup">S'inscrire</button>
      </router-link>
    </div>
    
  </div>
</template>

<script>

export default {
  name: 'Welcome',
}
</script>


<style lang="scss" scoped>
.welcome {
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

$colorLogin: #FF3D1D;
#login {
    background-color: $colorLogin;
    border-radius: 5px;
    border-color: transparent;
    margin: 0 10px;
    width: 100px;
    height: 40px;
    color: whitesmoke;
    font-weight: bold;
}

#signup {
    background-color: whitesmoke;
    border-radius: 5px;
    border-color: transparent;
    margin: 0 10px;
    width: 100px;
    height: 40px;
    font-weight: bold;
}
</style>