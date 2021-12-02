<template>
    <div>
        <user v-if="user.type === 'employee'">
            <img src="../assets/icon.png" alt="Photo de l'utilisateur" />
        </user>
        <user v-else-if="user.type === 'moderator'">
             <img src="../assets/admin.png" alt="Photo du modérateur" />
        </user>
    </div>
</template>

<script>
export default {
    name: 'ImageUser',
    data() { 
        return {
            user: {
                id: '0',
                username: 'sebastien',
                email: 'sebastien@decorne.com',
                password: 'sebastien',
                type: 'moderator',
                state: 'actif',
                createdAt: '02/12/2021 11:25',
                updatedAt: '02/12/2021 11:25'
            }
        }   
    }
}
</script>

<style lang="scss" scoped>
img {
    border-radius: 100%;
    width: 40px;
    height: 40px;
}
</style>