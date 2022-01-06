<template>
    <div id='home'>
        <section id="userId" v-for="publication in publications" :key="publication">
            <div class="id">
                <div v-for="user in users" :key="user">
                    <div v-if="publication.users_id === user.id">
                        <div class="header-of-publication" v-if="user.type === 'employee'">
                            <img src="../assets/icon.png" alt="Photo de l'utilisateur" />
                            <div>
                                <h1>{{ user.username }}</h1>
                                <h2>{{ publication.createdAt }}</h2>
                            </div>
                        </div>
                        <div class="header-of-publication" v-else-if="user.type === 'moderator'">
                            <img src="../assets/admin.png" alt="Photo du modérateur" />
                            <div>
                                <h1>{{ user.username }}</h1>
                                <h2>{{ publication.createdAt }}</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h1>{{ publication.title }}</h1>
                <img class="image" :src="publication.gifUrl" alt="Gif de la publication">
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
import Modale from '../components/Modale.vue'
import axios from 'axios'

export default {
    name: 'Home',
    components:  {
        'modale' : Modale,
    },
    data() { 
        return {
            publications: {},
            users: {},
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
                    this.publications = publications.data;
                    console.log("publications", publications.data);
                    return;
                })
                .catch(error => console.log(error));
        },
        getAllUsers() {
            let token = localStorage.getItem('tokens');
            axios.get('http://localhost:3000/api/auth/getusers', {
                headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token
                }
            })
            .then(users => {
                this.users = users.data;
                console.log("users", users.data);
                return;
            })
            .catch(error => {
                console.log(error)
            });
        }
    },
    beforeMount() {
        this.getAllPublications()
        this.getAllUsers()
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

.image {
    width: 300px;
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
    margin-left: 10px;
    img{
        border-radius: 100%;
        width: 40px;
        height: 40px;
        background-color: whitesmoke;
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

.header-of-publication {
    display: flex;
    align-items: center;
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