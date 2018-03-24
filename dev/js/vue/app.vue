<template>
    <div >
        <p>hello world</p>
        <router-link to="/game-detail">Go to Foo heelo </router-link>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'app',
    data() {
        return {
            msg: 'Welcome to Your Vue.js App'
        };
    }
};
</script>

