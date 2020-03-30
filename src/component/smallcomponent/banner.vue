<template>
  <div id="banner">
    <mt-swipe :auto="3000">
      <mt-swipe-item v-for="(item,index) in imglist" :key="index">
        <router-link :to="item.action">
          <img class="itemimg" :src="item.url" alt />
        </router-link>
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>
<script>
import { Swipe, SwipeItem } from "mint-ui";
import axios from "axios";
export default {
  name: "banner",
  components: {
    "mt-swipe": Swipe,
    "mt-swipe-item": SwipeItem
  },
  data() {
    return {
      imglist: []
    };
  },
  mounted() {
    axios.post("/banner").then(res => {
      this.imglist = res.data.result;
    });
  }
};
</script>
<style lang='less'>
#banner,
.itemimg {
  width: 100%;
  height: 100%;
}
</style>