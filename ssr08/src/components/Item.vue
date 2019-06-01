<template>
    <div class="Item">
        <router-link to="/">Home</router-link>
        <h1>{{ id }}</h1>
    </div>
</template>

<script>
import titleMixin from '../mixin/title'
export default {
    mixins: [titleMixin],
    title () {
        return "Item页面"
    },
    name: "Item",
    data() {
        return {
            id: this.$route.params.id
        };
    }
};
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
.Item{
    color: red;
}
</style>
