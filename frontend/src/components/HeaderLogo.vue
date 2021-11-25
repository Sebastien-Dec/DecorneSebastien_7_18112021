<template>
    <a href="../views/Home.vue">
        <img src="../assets/icon.png" alt="Logo Groupomania" />
        <span class="header-logo">Groupomania</span>
    </a>
</template>

<script>
export default {
    name: 'HeaderLogo',
}
</script>

<style scoped lang="scss">
    $logoColor: #fd2d01;
    .header-logo {
        color: $logoColor;
    }
    a {
        text-decoration: none;
        display: flex;
        justify-content: space-evenly;
    }
</style>