<template>
    <div id='app'>
        <HeaderLogo />
        <ButtonSignup />
        <ButtonLogin />
    </div>
</template>

<script>
import HeaderLogo from './HeaderLogo.vue'
import ButtonSignup from './ButtonSignup.vue'
import ButtonLogin from './ButtonLogin.vue'

export default {
    name:'ConnectionBar',
    components: {
        HeaderLogo,
        ButtonSignup,
        ButtonLogin
    }
}
</script>

<style lang="scss" scoped>
#app {
    display: flex;
    justify-content: center;
    margin: 20px;
}
</style>