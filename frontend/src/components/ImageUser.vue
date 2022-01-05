<template>
    <div>
        <div v-if="user.type === 'employee'">
            <img src="../assets/icon.png" alt="Photo de l'utilisateur" />
        </div>
        <div v-else-if="user.type === 'moderator'">
             <img src="../assets/admin.png" alt="Photo du modérateur" />
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'ImageUser',
    data() {
        return {
            user: {}
        }
    },
    method: {
        getAnUser: function() {
            let token = localStorage.getItem('tokens');
            axios.get('http://localhost:3000/api/auth/getuser', {
                headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token
                }
            })
            .then(function(user) {
                this.user = user
                console.log("user", user)
            })
            .catch(error => {
                console.log("error store user", error)
            });
        }
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