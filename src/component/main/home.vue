<template>
  <div id="home">
    <!-- 上标题组件 -->
    <transition
      :duration="200"
      name="custom-classes-transition"
      enter-active-class="animated fadeIn"
      leave-active-class="animated fadeOut"
    >
      <nav-header v-if="headshow"></nav-header>
    </transition>
    <transition
      :duration="100"
      name="custom-classes-transition"
      enter-active-class="animated fadeOut"
      leave-active-class="animated fadeIn"
    >
      <div v-if="!headshow" class="search_data">
        <div class="back">
          <img @click="backimg" src="../../assets/title/leftbtn.png" alt />
        </div>
        <div class="searbtn">
          <button>搜索</button>
        </div>
      </div>
    </transition>
    <transition
      :duration="100"
      name="custom-classes-transition"
      enter-active-class="animated fadeInRight"
      leave-active-class="animated fadeOutRight"
    >
      <nav-address v-if="isshowaddress"></nav-address>
    </transition>
    <div class="search" :class="{'animateinput':!headshow,'animateinputpos':headshow}">
      <img src="../../assets/title/search.png" alt />
      <input @focus="userchange" type="text" :placeholder="searchtext" />
    </div>
    <template v-if="headshow">
      <div class="home_content">
        <div class="home_history">
          <span
            :class="{'afterline':index!=histinfo.length-1}"
            v-for="(item,index) in histinfo"
            :key="index"
          >{{item.name}}</span>
        </div>
        <div class="banner">
          <nav-banner></nav-banner>
        </div>
        <div class="home_menu">
          <nav-homemenu :arr="homelist"></nav-homemenu>
        </div>
        <div class="home_you">
          <nav-you></nav-you>
        </div>
        <!-- 附近商家 -->
        <div class="home_home">
             <home-ne></home-ne>
        </div>
        <div style="height:3rem;">

        </div>
      </div>
    </template>
    <template v-else>
      <div class="home_content_show">
        <div class="home_find">
          <div class="home_find_left">搜索发现</div>
          <div class="home_find_right">
            换一批
            <img src="../../assets/title/shua.png" alt />
          </div>
        </div>
        <div class="home_hist">
          <span v-for="(item,index) in finddan" :key="index">{{item.name}}</span>
        </div>
        <div class="home_find">
          <div class="home_find_left">历史搜索</div>
          <div class="home_find_right">
            <img src="../../assets/title/shanchu.png" alt />
          </div>
        </div>
        <div class="home_hist">
          <span v-for="(item,index) in finddan" :key="index">{{item.name}}</span>
        </div>
      </div>
    </template>
  </div>
</template>
<script>
import axios from "axios";
import Header from "../smallcomponent/heade";
import banner from "../smallcomponent/banner";
import homemenu from "../smallcomponent/homemenu";
import You from "../smallcomponent/youhui";
import home_ne from "../smallcomponent/home_nhome";
export default {
  name: "home",
  components: {
    "nav-header": Header,
    "nav-banner": banner,
    "nav-homemenu": homemenu,
    "nav-you": You,
    "home-ne":home_ne,
    "nav-address": resolve => {
      require(["../smallcomponent/address"], resolve);
    }
  },
  mounted() {
    axios.post("/searchome").then(res => {
      this.searchtext = res.data.result;
    });
    axios.post("/ranhis").then(res => {
      this.histinfo = res.data.result;
    });
    axios.post("/homemenu").then(res => {
      this.homelist = res.data.result;
    });
  },
  data() {
    return {
      isshowaddress: false,
      searchtext: "",
      headshow: true,
      finddan: [],
      histinfo: [],
      homelist: []
    };
  },
  methods: {
    userchange() {
      this.headshow = false;
      axios.post("/find").then(res => {
        this.finddan = res.data.result;
      });
    },
    backimg() {
      this.headshow = true;
    }
  }
};
</script>
<style lang='less'>
#home {
  padding: 0 1rem;
}
.search {
  position: absolute;
  width: 100%;
  left: 0;
  top: 3rem;
  height: 2rem;
  padding: 0 1rem;
  box-sizing: border-box;
  img {
    position: absolute;
    width: 1.6rem;
    left: 1.5rem;
    top: 0.2rem;
  }
  input {
    box-sizing: border-box;
    padding-left: 2.5rem;
    width: 100%;
    height: 2rem;
    outline: none;
    border-radius: 0.5rem;
    border-style: none;
    background: #eeecec;
    color: #a09999;
  }
}
.search_data {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  padding: 0.3rem 0;
  background: #fff;
  div.back {
    flex: 2;
    display: flex;
    align-items: center;
    img {
      width: 1.6rem;
    }
  }
  div.searbtn {
    flex: 6;
    button {
      float: right;
      margin-right: 1rem;
      border-radius: 0.4rem;
      width: 3.5rem;
      height: 2rem;
      background: orange;
      outline: none;
      border-style: none;
    }
  }
}
.animateinput {
  animation: transscale 0.3s ease-in-out;
  animation-fill-mode: forwards;
}
.animateinputpos {
  animation: transscalepos 0.3s ease-in-out;
  animation-fill-mode: forwards;
}
@keyframes transscalepos {
  from {
    width: 65%;
    left: 3.5rem;
    top: 0.5rem;
  }
  to {
    width: 100%;
    left: 0;
    top: 3rem;
  }
}
@keyframes transscale {
  from {
    width: 100%;
    left: 0;
    top: 3rem;
  }
  to {
    width: 65%;
    left: 3.5rem;
    top: 0.3rem;
  }
}
.home_content {
  position: relative;
  top: 3rem;
}
.home_content_show {
  position: absolute;
  padding: 0 1rem;
  left: 0;
  top: 2rem;
  height: 100%;
  background: #fff;
  z-index: 4;
  margin: 0.5rem 0;
  .home_hist {
    margin: 0.5rem 0;
    span {
      display: inline-block;
      padding: 0.2rem 0.5rem;
      margin: 0.3rem 0.5rem;
      background: #e6e6e6;
      font-size: 0.8rem;
    }
  }
  .home_find {
    margin: 1rem 0;
    display: flex;
    flex-direction: row;
    .home_find_left {
      flex: 1;
      font-size: 0.9rem;
    }
    .home_find_right {
      flex: 1;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      span {
        vertical-align: middle;
        font-size: 0.8rem;
      }
      img {
        margin: 0 0.5rem;
        width: 1.1rem;
        vertical-align: middle;
      }
    }
  }
}
.home_history {
  span {
    position: relative;
    color: grey;
    padding: 0.5rem 0.8rem 0.5rem 0;
    font-size: 0.8rem;
  }
  span.afterline::after {
    content: "";
    position: absolute;
    width: 0;
    right: 0.4rem;
    top: 0.7rem;
    height: 0.6rem;
    border-left: 1px solid silver;
  }
}
.banner {
  margin: 0.5rem 0;
  height: 6rem;
}
.home_menu {
  border-radius: 0.5rem;
  background: #fffefe;
}
.home_home {
  background: #fff;
  border-radius: 0.3rem;
  overflow: hidden;
}
</style>