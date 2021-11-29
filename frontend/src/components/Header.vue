<template>
    <header id="header" >
        <nav class='navbar' id="connectionBar">
            <router-link to="/" class='header-logo'>
                <img src="../assets/icon.png" class='logo' alt="Logo Groupomania">
                <span class='text-logo'>Groupomania</span>
            </router-link>
            <router-link to="/signup">
                <button id="signup">S'inscrire</button>
            </router-link>
            <router-link to="/login">
                <button id="login">Se Connecter</button>
            </router-link>
        </nav>
        <nav class='navbar' id="connectedBar" >
            <router-link to="/" class="header-logo">
                <img src="../assets/icon.png" class='logo' alt="Logo Groupomania">
                <span class='text-logo'>Groupomania</span>
            </router-link>
            <section v-if="'type' === 'employee'">
                <img src="../assets/icon.png" class="userImage" alt="Photo de l'utilisateur" />
            </section>
            <section v-else-if="'type' === 'moderator'">
                <img src="../assets/admin.png" class="userImage" alt="Photo du modérateur" />
            </section>
            <router-link to="/newpost">
                <button id="new-post">Nouvelle Publication</button>
            </router-link>
        </nav>
    </header>
</template>

<script>

export default {
    name: 'Header',
    component: {
      
    }
}
</script>

<style lang="scss" scoped>
.navbar {
    display: flex;
    justify-content: center;
    margin: 20px;
}

$colorLogo: #fd2d01;

.header-logo {
    text-align: center;
    margin-right: 30px;
}

.logo {
    width: 2.3rem;
    height: 2.3rem;
}
.text-logo {
    color: $colorLogo;
    font-size: 2rem;
    font-weight: bold;
}

a {
    text-decoration: none;
    display:flex;
}

#signup {
    background-color: whitesmoke;
    border-radius: 5px;
    border-color: transparent;
    margin: 0 10px;
    width: 100px;
    height: 40px;
    font-weight: bold;
}

$colorLogin: #FF3D1D;
#login {
    background-color: $colorLogin;
    border-radius: 5px;
    border-color: transparent;
    margin: 0 10px;
    width: 100px;
    height: 40px;
    color: whitesmoke;
    font-weight: bold;
}

.userImage {
    border-radius: 100%;
    width: 40px;
    height: 40px;
}

#new-post {
    background-color: whitesmoke;
    border-radius: 5px;
    border-color: transparent;
    margin: 0 10px;
    width: 100px;
    height: 40px;
    font-weight: bold;
}
</style>