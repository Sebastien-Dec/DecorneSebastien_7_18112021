<template>
    <header id="header" >
        <nav class='navbar' id="connectionBar">
            <HeaderLogo />
            <ButtonLogin />
            <ButtonSignup />
        </nav>
        <nav class='navbar' id="connectedBar" >
            <HeaderLogo />
            <ImageUser />
            <ButtonNewPost />
        </nav>
    </header>
</template>

<script>
import HeaderLogo from'./HeaderLogo.vue'
import ButtonLogin from './ButtonLogin.vue'
import ButtonSignup from './ButtonSignup.vue'
import ButtonNewPost from './ButtonNewPost.vue'
import ImageUser from './ImageUser.vue'

export default {
    name: 'Header',
    components: {
      HeaderLogo,
      ButtonLogin,
      ButtonSignup,
      ButtonNewPost,
      ImageUser
    }
}
</script>

<style lang="scss" scoped>
.navbar {
    display: flex;
    justify-content: center;
    margin: 20px;
}
</style>