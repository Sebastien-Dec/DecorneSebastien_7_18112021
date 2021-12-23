<template>
    <router-link to="/">
        <button id="logout" @click="logout">Me déconnecter</button>
     </router-link>
</template>

<script>
export default {
    name: 'ButtonLogout',
    method: {
      logout() {
        localStorage.clear();
      }  
    }
}
</script>

<style lang="scss" scoped>
$colorLogout: whitesmoke;
#logout {
    background-color: $colorLogout;
    border-radius: 5px;
    border-color: transparent;
    margin: 0 10px;
    width: 100px;
    height: 40px;
    font-weight: bold;

    &:hover {
        background-color: darken($colorLogout, 10%);
        cursor: pointer;
    }
}
</style>

