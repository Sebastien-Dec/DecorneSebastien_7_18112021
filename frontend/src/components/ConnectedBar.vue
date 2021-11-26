<template>
    <div>
        <HeaderLogo />
        <ImageUser />
        <ButtonNewPost />
    </div>
</template>

<script>
import HeaderLogo from '../components/HeaderLogo.vue'
import ImageUser from '../components/ImageUser.vue'
import ButtonNewPost from '../components/ButtonNewPost.vue'

export default {
    name: 'ConnectedBar',
    components: {
        HeaderLogo,
        ImageUser,
        ButtonNewPost
    }
}
</script>