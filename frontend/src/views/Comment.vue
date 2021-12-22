<template>
    <div id="comment">
        <div class="otherComment">
            <ImageUser /> 
            {{ comment.users_id.username }}
            {{ comment.publications_id.createdAt }}
            {{ comment.text }}
        </div>
        <div class="user">
            <ImageUser />
            <h1>{{ comment.users_id.username }}</h1>
        </div>
        <input type="text" id="comment" name="comment" placeholder="Votre commentaire" v-model="comment.comment"/>
        <button @click="postComment">Poster</button>
    </div>
</template>

<script>
import ImageUser from '../components/ImageUser.vue'
import axios from 'axios'

export default {
    name: 'Comment',
    components: {
        ImageUser
    },
    data() {
        return {
            comment: {
                comment: '',
                publications_id: '',
                users_id: '',
                createdAt: '',
                updatedAt: ''
            }
        }   
    },
    method: {
        postComment() {
            axios.post('hrrp://localhost:3000/comments', this.comment, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer" + " " + localStorage.getItem("tokens")
                }
            })
            .then(response => {
                console.log('response', response.data)
            })
            .catch(error => console.log(error.response));
        }
    }
}
</script>

<style lang="scss" scoped>
$colorButton: #FF3D1D;

#comment {
    display: flex;
    flex-direction: column;
    width: 300px;
    margin: 0 auto;
}

.user {
    display: flex;
    font-size: 0.5rem;

    h1 {
        margin-left: 10px;
    }
}

button {
    margin: 10px auto;
    background-color: $colorButton;
    color: whitesmoke;
    border-radius: 5px;
    border-color: transparent;
    width: 100px;
    height: 40px;
    font-weight: bold;

    &:hover {
        background-color: darken($colorButton, 10%);
        cursor: pointer;
    }
}
</style>