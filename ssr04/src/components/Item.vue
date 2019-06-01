<template>
    <div class="Item">
        <router-link to="/">Home</router-link>
        <h1>{{ id }}</h1>
    </div>
</template>

<script>
export default {
    name: "Item",
    data() {
        return {
            id: this.$route.params.id
        };
    }
};
</script>