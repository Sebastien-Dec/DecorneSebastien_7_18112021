<template>
    <div>
        <router-link to="">
            <button id="new-post">Nouvelle Publication</button>
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'ButtonNewPost'
}
</script>

<style lang="scss" scoped>
#new-post {
    background-color: whitesmoke;
    border-radius: 5px;
    border-color: transparent;
    margin: 0 10px;
    width: 100px;
    height: 40px;
    font-weight: bold;
}
</style>