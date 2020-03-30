<template>
  <div id="youhui">
    <p>美食聚优惠</p>
    <ul class="youhui-menu">
      <li v-for="(item,index) in list" :key="index">
        <router-link :to="{'path':'/activeinfo','query':{'index':index}}">
          <img :src="item.url" alt />
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "youhui",
  mounted() {
    axios.post("/home_you").then(res => {
      this.list = res.data.result;
    });
  },
  data() {
    return {
      list: []
    };
  }
};
</script>
<style lang='less' scope>
#youhui {
  margin: 1rem 0;
  p{
      text-align: center;
      font-size: 1rem;
      margin-bottom: 0.5rem;
      font-family: Verdana, Geneva, Tahoma, sans-serif;
  }
}
ul.youhui-menu {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  li {
    margin: 0.2rem 0;
    list-style: none;
    box-sizing: border-box;
    width: 24%;
    height: 7rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
  li:nth-child(1) {
    width: 49%;
  }
  li:nth-child(2) {
    width: 49%;
  }
}
</style>