<template>
    <div id="signup">
        <h1>Créer votre compte</h1>
        <form>
            <label for="username">Votre Pseudonyme</label>
            <input type="text" id="username" name="username" placeholder="Pseudo" v-model="user.username"/>
            <label for="email">Votre email</label>
            <input type="email" id="email" name="email" placeholder="exemple@groupomania.fr" v-model="user.email"/>
            <label for="password">Votre mot de passe</label>
            <input type="password" id="password" name="password" placeholder="Votre mot de passe" v-model="user.password" />
            <label for="confirmPassword">Confirmer votre mot de passe</label>
            <input type="password" id="confirmPassword" nae="confirmPassword" placeholder="Saisissez de nouveau votre mot de passe" v-model="user.confirmPassword">
            <div class="type">
                <p>Qui êtes-vous ?</p>
                <input type="radio" id="employee" name="type" value="employee" v-model="user.type"/>
                <label for="employee">Salarié</label>
                <input type="radio" id="moderator" name="type" value="moderator" v-model="user.type"/>
                <label for="moderator">Modérateur</label>
            </div>
            <button @click.prevent="createUser">Créer mon compte</button>
        </form>
        <router-link to="/login" class="link-login">J'ai déjà un compte !</router-link>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name:'Signup',
    data() {
        return {
            user: {
                username: '',
                email: '',
                password: '',
                confirmPassword: '',
                type: '',
                state: ''
            } 
        }
    },
    methods: {
        //check the email format
        validateEmail(email){
            let emailRegExp = new RegExp('^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$','g');
            return emailRegExp.test(email);
        },
        //check the password format
        validatePassword(password){
            let passwordRegExp = new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$');
            return passwordRegExp.test(password);
        },
        createUser: function() {
            //check the form data
            if(!this.user.username) {
                alert("Veuillez indentique votre pseudo !");
                return;
            } else if(!this.validateEmail(this.user.email)){
                alert("Ceci n'est pas un email !");
                return;
            } else if(!this.validatePassword(this.user.password)) {
                alert("Votre mot de passe doit contenir au moins 8 caractères avec au moins 1 majuscule, 1 minuscule, 1 chiffre et 1 des caractères spéciaux");
                return;
            } else if(this.user.password != this.user.confirmPassword) {
                alert("Votre saisie ne correspond pas à votre mot de passe !");
                return;
            } else if(!this.user.type){
                alert("Veuillez indiquer si vous êtes un employé ou un moderateur");
                return;
            }
            //send the information entered to the database
            axios.post('http://localhost:3000/api/auth/signup', this.user, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(response => {
                console.log('response',response.data);
                window.location.href='http://localhost:8080/login';
            })
            .catch(error => console.log(error.response));
        }
    }
}
</script>

<style lang="scss" scoped>
$colorText: #FF3D1D;

#signup {
    margin-top: 100px;
    
    h1 {
        text-align: center;
        color: $colorText;
    }
}

.link-login {
    display: flex;
    justify-content: center;
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
        background-color: $colorText;
        border-radius: 5px;
        border-color: transparent;
        margin: 20px 5px;
        color: whitesmoke;
        font-weight: bold;
        font-size: 1.2rem;
        height: 40px;

        &:hover {
        background-color: darken($colorText, 10%);
        cursor: pointer;
        }
    }
}

.margin-form {
    margin: 5px;
    font-size: 1.2rem;
}
</style>