<template>
  <div id="homenear">
    <div class="shangjia">
      <span @click="userclick" :class="{'sactive':isadd,'stitle':true}">附近商家</span>
      <span @click="userclick" :class="{'sactive':!isadd,'stitle':true}">发现好菜</span>
      <span :class="{'sline':isadd,'moveline':!isadd}"></span>
    </div>
    <div class="home_shangjia">
      <div class="home_center">
        <transition
          :duration="200"
          name="custom-classes-transition"
          enter-active-class="animated fadeInLeft  "
          leave-active-class="animated fadeOutLeft"
        >
          <div class="leftmenu" v-if="isadd">
            <router-link :to="{'path':'/detail','query':{'id':item.id}}" v-for="(item,index) in prolist"
                :key="index">
              <nav-pro
                :src="item.pic_url"
                :name="item.name"
                :score="item.wm_poi_score"
                :num="item.month_sale_num"
                :min="item.mt_delivery_time"
                :sk="item.distance"
              ></nav-pro>
            </router-link>
          </div>
        </transition>
        <transition
          :duration="200"
          name="custom-classes-transition"
          enter-active-class="animated fadeInRight"
          leave-active-class="animated fadeOutRight"
        >
          <div class="rightmenu" v-if="!isadd">组件2321321321</div>
        </transition>
      </div>
    </div>
  </div>
</template>
<script>
import product from "./pro_duct";
import axios from "axios";
export default {
  name: "homenear",
  components: {
    "nav-pro": product
  },
  data() {
    return {
      isadd: true,
      prolist: []
    };
  },
  mounted() {
    axios.get("http://localhost:8080/static/list.json").then(res => {
      this.prolist = res.data.data.poilist;
      console.log(this.prolist);
    });
  },
  methods: {
    userclick() {
      this.isadd = !this.isadd;
    }
  }
};
</script>
<style lang='less'>
.shangjia {
  position: relative;
  padding: 0.6rem 0;
  border-bottom: 1px solid hsl(0, 2%, 88%);
  span.stitle {
    font-family: Georgia, "Times New Roman", Times, serif;
    font-weight: bold;
    font-size: 1.3rem;
  }
  span.stitle:nth-child(2) {
    margin: 0 1rem;
  }
}
.sactive {
  position: relative;
  color: orange;
}
.sline:after {
  content: "";
  position: absolute;
  left: 1.5rem;
  bottom: 0rem;
  width: 2rem;
  border: 0.1rem solid orange;
  transition: all 0.2s linear;
}
.moveline:after {
  content: "";
  position: absolute;
  left: 8rem;
  bottom: 0rem;
  width: 2rem;
  border: 0.1rem solid orange;
  transition: all 0.2s linear;
}
.home_shangjia {
  margin: 0.6rem 0;
  .home_center {
    position: relative;
    width: 100%;
    .leftmenu {
      position: relative;
      top: 0;
      background: #fff;
      z-index: 2;
      width: 100%;
      a{
          color: #000;
          text-decoration: none;
      }
    }
    .rightmenu {
      position: relative;
      top: 0;
      background: #fff;
      z-index: 2;
      width: 100%;
    }
  }
}
</style>