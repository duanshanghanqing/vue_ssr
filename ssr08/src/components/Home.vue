<template>
  <div class="Home">
    <router-link to="/item/1">to Item</router-link>
    <router-link to="/title/1">to Item</router-link>
    <h1>Home</h1>
    <img src="../assets/images/bg.png">
    <video src="../assets/media/movie.ogg" controls="controls">您的浏览器不支持 video 标签。</video>
  </div>
</template>

<script>
import titleMixin from "../mixin/title";
export default {
  mixins: [titleMixin],
  title() {
    return "首页";
  },
  name: "Home",
  data() {
    return {};
  }
};
</script>
<style lang="css" scoped>
.Home {
  color: rebeccapurple;
}
</style>