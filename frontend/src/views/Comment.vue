<template>
    <div id="comment">
        <div class="otherComment" v-for="comment in comments" :key="comment">
            <ImageUser /> 
            {{ comment.users_id }}
            {{ comment.publications_id }}
            {{ comment.text }}
        </div>
        <div class="user" v-for="comment in comments" :key="comment">
            <ImageUser />
            <h1>{{ comment.users_id }}</h1>
        </div>
        <input type="text" id="comment" name="comment" placeholder="Votre commentaire" v-model="comments.comment"/>
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
            comments: {
                id: '',
                comment: '',
                publications_id: '',
                users_id: '',
                createdAt: '',
                updatedAt: ''
            }
        }   
    },
    methods: {
        getComment() {
            let token = localStorage.getItem('tokens')
            axios.get('http://localhost:3000/api/comments/', {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + token
                }
            })
            .then(comments => {
                this.comments = comments;
                console.log('comments', comments);
                return;
            })
            .catch(error => console.log(error));
        },
        postComment() {
            let token = localStorage.getItem("tokens")
            axios.post('http://localhost:3000/api/comments/', this.comments, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + token
                }
            })
            .then(response => {
                console.log('response', response.data)
            })
            .catch(error => console.log(error.response));
        }
    },
    beforeMount() {
        this.getComment();
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