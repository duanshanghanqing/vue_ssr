<template>
  <div id="app">
    <!-- <h1>{{ msg }}</h1>
    <input type="text" v-model="msg"> -->
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "app",
  data() {
    return {
      msg: "hello world"
    };
  },
  created() {},
  mounted() {},
  methods: {},
  watch: {},
  components: {}
};
</script>
<style lang="css">
@import url("./assets/css/reset.css");
#app {
  height: 100%;
}
</style>