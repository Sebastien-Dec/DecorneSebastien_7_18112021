<template>
    <div id='home'>
        <section id="userId" v-for="publication in publications" :key="publication">
            <div class="id">
                <ImageUser />
                <div class="id__margin-left">
                    <h1>{{ $store.state.user.username }}</h1>
                    <h2>{{ publication.createdAt }}</h2>
                </div>
            </div>
            <div>
                <h1>{{ publication.title }}</h1>
                <img :src="publication.gifUrl" alt="Gif de la publication">
                <p>{{ publication.text }}</p>
            </div>
            <div class="comment">
                <modale :revele="revele" :toggleModale="toggleModale"></modale>
                <div>
                    <button @click="toggleModale"> commentaires</button>
                </div>
                
            </div>
            
        </section>
    </div>
</template>

<script>
import ImageUser from '../components/ImageUser.vue'
import Modale from '../components/Modale.vue'
import axios from 'axios'

export default {
    name: 'Home',
    components:  {
        ImageUser,
        'modale' : Modale,
    },
    data() { 
        return {
            publications: [],
            revele: false
        }
    },
    methods: {
        toggleModale: function() {
            this.revele = !this.revele
        },
        getAllPublications() {
            let token = localStorage.getItem("tokens")
            axios.get('http://localhost:3000/api/publications', {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + token
                }
            })
                .then(publications => {
                    this.publications = publications;
                    console.log("publications", publications);
                    return;
                })
                .catch(error => console.log(error));
        }
    },
    beforeMount() {
        this.getAllPublications()
    }
}
</script>

<style lang="scss" scoped>
$colorHome: whitesmoke;

#home {
    display: flex;
    flex-direction: column;
    width: 300px;
    margin: 50px auto;
}
#userId {
    display: flex;
    flex-direction: column;
    width: 300px; 
    margin: 25px 0;
    border: solid $colorHome;
    border-radius: 10px;

    h1 {
        font-weight: bold;
        text-align: center;
    }
}

.id {
    display: flex;
    align-items: center;
    border-bottom: solid $colorHome;
    padding: 5px 0 0 5px;

    &__margin-left {
        margin-left: 10px;
    }

    h1 {
        font-size: 1rem;
        margin: 0;
    }

    h2 {
        font-size: 0.5rem;
        margin: 0;
    }
}

.comment {
    border-top: solid $colorHome;
    button {
        margin: 10px;
        border: solid $colorHome;
        border-radius: 5px;
        background-color: $colorHome;

        &:hover {
            background-color: darken($colorHome, 10%);
            cursor: pointer;
        }
    }
}
</style>