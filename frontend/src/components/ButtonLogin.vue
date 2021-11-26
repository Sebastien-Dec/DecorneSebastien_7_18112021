<template>
    <a href="../views/Login.vue ">
        <button id="login">Se Connecter</button>
    </a>
</template>

<style lang="scss" scoped>
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
</style>

<script>
export default {
    name: 'ButtonLogin',
}
</script>