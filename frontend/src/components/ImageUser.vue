<template>
    <div>
        <section v-if="'type' === 'employee'">
            <img src="../assets/icon.png" alt="Photo de l'utilisateur" />
        </section>
        <section v-else-if="'type' === 'moderator'">
             <img src="../assets/admin.png" alt="Photo du modérateur" />
        </section>
    </div>
</template>

<script>
export default {
    name: 'ImageUser'
}
</script>

<style lang="scss" scoped>
img {
    border-radius: 100%;
    width: 40px;
    height: 40px;
}
</style>