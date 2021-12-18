<template>
    <div id="comment">
        <div class="otherComment">
            <ImageUser /> 
            {{ users_id.username }}
            {{ publications.createdAt }}
            {{ comment.text }}
        </div>
        <div class="user">
            <ImageUser />
            <h1>{{ users_id.username }}</h1>
        </div>
        <input type="text" id="comment" name="comment" placeholder="Votre commentaire" v-model="comment.comment"/>
        <button>Poster</button>
    </div>
</template>

<script>
import ImageUser from '../components/ImageUser.vue'

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
                users_id: ''
            }
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