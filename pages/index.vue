<template>
    <section class="container">
        <h1 class="title mt-3">
            <i class="fa fa-user"></i>
            USERS
        </h1>
        <ul class="users">
            <li v-for="(user, index) in users" :key="index" class="user">
                <nuxt-link :to="{ name: 'id', params: { id: index }}">
                    {{ user.name }}
                </nuxt-link>
            </li>
        </ul>
    </section>
</template>

<script>
    import axios from '~/plugins/axios'

    export default {
        async asyncData() {
            let {data} = await axios.get('/api/users')
            return {users: data}
        },
        head() {
            return {
                title: 'Users'
            }
        }
    }
</script>

<style scoped>
</style>
