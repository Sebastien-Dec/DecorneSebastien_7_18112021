<template>
    <div id='home'>
        <section id="userId">
            <ImageUser />
            <div class="id">
                <h1>{{ user.username }}</h1>
                <h2>{{ user.createdAt }}</h2>
            </div>
            
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
    components:  {
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

<style lang="scss" scoped>
#home {
    display: flex;
    flex-direction: column;
    width: 300px;
    margin: 50px auto;
}
#userId {
    display: flex;
    align-items: center;  
}

.id {
    margin-left: 10px;

    h1 {
        font-size: 1rem;
        margin: 0;
    }

    h2 {
        font-size: 0.5rem;
        margin: 0;
    }
}
</style>