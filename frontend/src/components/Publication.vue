<template>
    <div>
        <section id="userId">
            <ImageUser />
            <h1>{{ username }}</h1>
            <h2>{{ PublicationTimeStamp }}</h2>
        </section>
        <section id="publication">
            <span>{{ title }}</span>
            <span>{{ gif }}</span>
        </section>
        <section id="comments">
            <span>{{ numberOfComments }} commentaires</span>
        </section>
    </div>
</template>

<script>
import ImageUser from './ImageUser.vue'

export default {
    name: 'Publication',
    components: {
        ImageUser,
    }    
}
</script>