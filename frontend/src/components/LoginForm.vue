<template>
    <div id="login">
        <h1>Me Connecter</h1>
        <label for="email">Votre adresse email</label>
        <input type="email" id="email" name="email" placeholder="exemple@groupomania.fr">
        <label for="password">Mot de passe</label>
        <input type="password" id="password" name="password" placeholder="Mon mot de passe">
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
}
</style>