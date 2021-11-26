<template>
    <div>
        <h1>Ajouter une publication</h1>
        <label for="title">Titre de la publication</label>
        <input type="text" id="title" name="title" placeholder="Titre de votre publication" />
        <label for="gifUrl">Lien URL du Gif</label>
        <input type="link" id="gifUrl" name="gifUrl" placeholder="https://www.gif.com" />
        <label for="text">Votre message</label>
        <input type="text" id="text" name="text" placeholder="Votre message" />
        <button>Ajouter une publication</button>
    </div>
</template>

<script>
export default {
    name: 'NewPost'
}
</script>