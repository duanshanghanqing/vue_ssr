<template>
  <div>{{ item.title }}</div>
</template>

<script>
import titleMixin from "../mixin/title";
export default {
  mixins: [titleMixin],
  title() {
    return "动态标题";
  },
  name: "Title",
  //该方法在服务器端运行
  asyncData({ store, route }) {
    // 触发 action 后，会返回 Promise
    return Promise.all([store.dispatch("fetchItem", route.params.id)]);
  },
  computed: {
    // 从 store 的 state 对象中的获取 item。
    item() {
      return this.$store.state.items[this.$route.params.id];
    }
  }
};
</script>