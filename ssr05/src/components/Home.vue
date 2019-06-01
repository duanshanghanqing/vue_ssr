<template>
  <div class="Home">
    <router-link to="/item/1">to Item</router-link>
    <router-link to="/title/1">to Item</router-link>
    <h1>Home</h1>
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