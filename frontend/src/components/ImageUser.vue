<template>
    <div>
        <div v-if="type === 'employee'">
            <img src="../assets/icon.png" alt="Photo de l'utilisateur" />
        </div>
        <div v-else-if="type === 'moderator'">
             <img src="../assets/admin.png" alt="Photo du modérateur" />
        </div>
    </div>
</template>

<script>

export default {
    name: 'ImageUser',
    data() {
        return {
            type: ''
        }
    },
    methods: {
        getType() {
            const type = localStorage.getItem("type");
            this.type = type;
            console.log("type", type);
            return;
        }
    },
    beforeMount() {
        this.getType()
    }
}
</script>

<style lang="scss" scoped>
img {
    border-radius: 100%;
    width: 40px;
    height: 40px;
    background-color: whitesmoke;
}
</style>