<template>
    <div class="signup">
        <ConnectionBar />
        <SignupForm />
    </div>
</template>

<script>
import ConnectionBar from '../components/ConnectionBar.vue'
import SignupForm from '../components/SignupForm.vue'

export default {
    name:'Signup',
    components: {
        ConnectionBar,
        SignupForm
    }
}
</script>