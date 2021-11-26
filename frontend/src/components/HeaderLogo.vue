<template>
    <div class='header-logo'>
        <a href="../views/home">
            <img src="../assets/icon.png" class='logo' alt="Logo Groupomania">
            <span class='text-logo'>Groupomania</span>
        </a>
    </div>
</template>

<style lang="scss" scoped>
$colorLogo: #fd2d01;

.header-logo {
    text-align: center;
}

.logo {
    width: 2.3rem;
    height: 2.3rem;
}
.text-logo {
    color: $colorLogo;
    font-size: 2rem;
    font-weight: bold;
}

a {
    text-decoration: none;
    display:flex;
}
</style>

<script>
export default {
    name: 'HeaderLogo',
}

</script>
