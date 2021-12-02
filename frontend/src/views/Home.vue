<template>
    <div>
        <section id="userId">
            <ImageUser />
            <h1>{{ user.username }}</h1>
            <h2>{{ user.createdAt }}</h2>
        </section>
        <section id="publication">
            <span>{{ title }}</span>
            <span>{{ gif }}</span>
            <span>{{ text}}</span>
        </section>
        <section id="comments">
            <span>{{ numberOfComments }} commentaires</span>
        </section>
    </div>
</template>

<script>
import ImageUser from '../components/ImageUser.vue'

export default {
    name: 'Home',
    component:  {
        ImageUser,
    },
    data() { 
        return {
            user: {
                id: '0',
                username: 'sebastien',
                email: 'sebastien@decorne.com',
                password: 'sebastien',
                type: 'moderator',
                state: 'actif',
                createdAt: '02/12/2021 11:25',
                updatedAt: '02/12/2021 11:25'
            }
        }   
    }
}
</script>