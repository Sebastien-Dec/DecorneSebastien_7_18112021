<template>
    <div id="login">
        <h1>Me Connecter</h1>
        <form>
            <label for="email" class="margin-form">Votre adresse email</label>
            <input type="email" id="email" class="margin-form" name="email" placeholder="exemple@groupomania.fr">
            <label for="password" class="margin-form">Mot de passe</label>
            <input type="password" id="password" class="margin-form" name="password" placeholder="Mon mot de passe">
            <button type="submit">Connexion</button>
        </form>
    </div>
</template>

<script>
export default {
    name: "LoginForm",
}
</script>

<style lang="scss" scoped>
#login {
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    h1 {
        text-align: center;
        color: #FF3D1D;
    }
}

form {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    width: 300px;
    padding: 10px;

    button {
        background-color: #FF3D1D;
        border-radius: 5px;
        border-color: transparent;
        margin: 10px 5px;
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