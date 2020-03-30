<template>
  <div id="footer-menu">
    <ul class="footer-ulmenu">
      <li v-for="(item,index) in menu" :key="index" @click="userck(index)">
        <router-link :to="item.action">
          <template v-if="!item.isck">
            <img :src="item.img" alt />
          </template>
          <template v-else>
            <img :src="item.ckimg" alt />
          </template>
          <p :class="{'ckcolor':item.isck}">{{item.name}}</p>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "footer-menu",
  created() {
    //请求数据
    if (this.footerupdate) {
      axios
        .post("/footer")
        .then(res => {
          this.footerupdate = false;
          this.menu = res.data.result;
        })
        .catch(err => {
          throw err;
        });
    }
  },
  data() {
    return {
      footerupdate: true,
      menu: []
    };
  },
  methods: {
    userck(index) {
      this.menu.map((val, arrindex) => {
        index == arrindex ? (val.isck = true) : (val.isck = false);
      });
    }
  }
};
</script>
<style lang='less'>
#footer-menu {
  position: fixed;
  z-index: 99999;
  left: 0;
  bottom: 0;
  padding: 0.5rem 0;
  width: 100%;
  height: auto;
  border-top: 1px solid #d8d6d6;
  background: #fff;
  .footer-ulmenu {
    display: flex;
    flex-direction: row;
    li {
      list-style: none;
      flex: 1;
      display: flex;
      justify-content: center;
      a {
        color: #000;
        font-size: 0.9rem;
        text-decoration: none;
        img {
          width: 1.8rem;
        }
      }
    }
  }
}
.ckcolor {
  color: #ffa600b0;
}
</style>