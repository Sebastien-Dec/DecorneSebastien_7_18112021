<template>
    <div id="signup">
        <h1>Créer votre compte</h1>
        <form>
            <label for="username">Votre Pseudonyme</label>
            <input type="text" id="username" name="username" placeholder="Pseudo" />
            <label for="email">Votre email</label>
            <input type="email" id="email" name="email" placeholder="exemple@groupomania.fr">
            <label for="password">Votre mot de passe</label>
            <input type="password" id="password" name="password" placeholder="Votre mot de passe"/>
            <label for="confirmPassword">Confirmer votre mot de passe</label>
            <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Votre mot de passe" />
            <div class="type">
                <p>Qui êtes-vous ?</p>
                <input type="radio" id="employee" name="type" />
                <label for="employee">Salarié</label>
                <input type="radio" id="moderator" name="type" />
                <label for="moderator">Modérateur</label>
            </div>
            <button>Créer mon compte</button>
        </form>
        <router-link to="/login" class="link-login">J'ai déjà un compte !</router-link>
    </div>
</template>

<script>
export default {
    name: 'SignupForm'
}
</script>

<script>
export default {
    name: "LoginForm",
}
</script>

<style lang="scss" scoped>
#signup {
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    h1 {
        text-align: center;
        color: #FF3D1D;
    }
}

.link-login {
    text-align: center;
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

    button {
        background-color: #FF3D1D;
        border-radius: 5px;
        border-color: transparent;
        margin: 20px 5px;
        color: whitesmoke;
        font-weight: bold;
        font-size: 1.2rem;
        height: 40px;
    }
}

.margin-form {
    margin: 5px;
    font-size: 1.2rem;
}
</style>