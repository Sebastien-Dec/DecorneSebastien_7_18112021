<template>
    <div>
        <div v-if="users.type === 'employee'">
            <img src="../assets/icon.png" alt="Photo de l'utilisateur" />
        </div>
        <div v-else-if="users.type === 'moderator'">
             <img src="../assets/admin.png" alt="Photo du modérateur" />
        </div>
    </div>
</template>

<script>
import axios from'axios'

export default {
    name: 'ImageUser',
    data() { 
        return {
            users: {
                id: '',
                username: '',
                email: '',
                password: '',
                type: '',
                state: '',
                createdAt: '',
                updatedAt: ''
            },
        }   
    },
    method: {
        users(){
            axios.get('http://localhost:3000/', this.users, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(response => {
                console.log('response',response.data);
            })
            .catch(error => console.log(error));
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