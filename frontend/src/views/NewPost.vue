<template>
    <div class="new-post">
        <form>
            <h1>Ajouter une publication</h1>
            <label for="title">Titre de la publication</label>
            <input type="text" id="title" name="title" placeholder="Titre de votre publication" />
            <label for="gifUrl">Lien URL du Gif</label>
            <input type="link" id="gifUrl" name="gifUrl" placeholder="https://www.gif.com" />
            <div class="button">
                <ButtonNewPost text="Ajouter une publication" />
            </div>
        </form>
    </div>
</template>

<script>
import ButtonNewPost from '../components/ButtonNewPost.vue'

export default {
    name:'NewPost', 
    components: {
        ButtonNewPost
    }
}

</script>

<style lang="scss" scoped>
$colorText: #FF3D1D;
.new-post {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

h1 {
    text-align: center;
    font-size: 1.8rem;
    color: $colorText;
}

form {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    width: 300px;
    padding: 10px;
    font-size: 1.2rem;

    label, input {
        margin: 5px;
    }
}

.button {
    display: flex;
    justify-content: center;
    margin-top: 10px;
}
</style>