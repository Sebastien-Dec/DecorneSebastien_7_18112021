<template>
    <div id="comment">
        <ImageUser />
        <h1>{{ username }}</h1>
        <span>{{ commentOfAnUser }}</span>
        <input type="text" id="comment" name="comment" placeholder="Votre commentaire" />
        <button>Poster</button>
    </div>
</template>

<script>
import ImageUser from '../components/ImageUser.vue'

export default {
    name: 'Comment',
    components: {
        ImageUser
    }    
}
</script>