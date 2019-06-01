<template>
    <div id="app">
        <h1>{{ msg }}</h1>
        <input type="text" v-model="msg">
    </div>
</template>
<script>
export default {
    name: "app",
    data() {
        return {
            msg:'hello world'
        }
    },
    created() {
       
    },
    mounted() {
        
    },
    methods: {},
    watch: {},
    components: {
       
    }
};
</script>
