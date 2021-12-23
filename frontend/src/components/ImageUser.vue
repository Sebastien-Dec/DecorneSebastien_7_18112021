<template>
    <div>
        <div v-if="$store.state.user.type === 'employee'">
            <img src="../assets/icon.png" alt="Photo de l'utilisateur" />
        </div>
        <div v-else-if="$store.state.user.type === 'moderator'">
             <img src="../assets/admin.png" alt="Photo du modérateur" />
        </div>
    </div>
</template>

<script>
//import axios from 'axios'

export default {
    name: 'ImageUser',
    /*data() {
        return {
            user: {
                type :''
            }
        }
    },
    method: {
        getAnUser: function() {
        axios.get('http://localhost:3000/api/auth/getuser', this.user)
            .then(data => {
            this.user = data
            })
            .catch(error => {
            console.log(error)
            });
        }
    }*/
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