<template>
    <div class="login">
        <ConnectionBar />
        <LoginForm />
    </div>
</template>

<script>
import ConnectionBar from '../components/ConnectionBar.vue'
import LoginForm from '../components/LoginForm.vue'

export default {
    name: 'Login',
    components: {
        ConnectionBar,
        LoginForm
    }
}

</script>