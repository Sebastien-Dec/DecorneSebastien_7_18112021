<template>
    <div>
        <ConnectedBar />
        <NewPost />
    </div>
</template>

<script>
import ConnectedBar from '../components/ConnectedBar.vue'
import NewPost from '../components/NewPostForm.vue'

export default {
    name:'NewPost',
    components: {
        ConnectedBar,
        NewPost
    }    
}
</script>