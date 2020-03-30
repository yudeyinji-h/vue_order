<template>
  <div id="pro_name">
    <template v-if="shopinfo">
      <nav-header :proname="detail.poi_info.name"></nav-header>
      <div class="info" :style="backimage">
          <img :src="detail.poi_info.pic_url" alt="">
          <p class="infoname">{{detail.poi_info.name}}</p>
      </div>
      <nav-cai :list="detail.food_spu_tags"></nav-cai>
      <div class="cart">
          <div class="cart_left"></div>
          <div class="cart_right">
              去结算
          </div>
      </div>
    </template>
  </div>
</template>
<script>
import axios from "axios";
import header from "../smallcomponent/detailheader";
import caidan from '../smallcomponent/cailist'
export default {
  name: "pro_name",
  components: {
    "nav-header": header,
    'nav-cai':caidan
  },
  created() {
    axios.get("http://localhost:8080/static/food.json").then(res => {
      this.detail = res.data.data;
      
      console.log(res);
      this.shopinfo=true;
      this.backimage['background-image']=`url(${this.detail.poi_info.poi_back_pic_url})`;
    });
  },
  data() {
    return {
      detail: [],
      shopinfo:false,
      backimage:{
        'background-image':"url()"
      }
    };
  }
};
</script>
<style lang='less'>
#pro_name {
  position: relative;
  background: #fff;
}
.info{
    width: 100%;
    height: 12rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-size: 100%;
    img{
        width: 5rem;
        height: 5rem;
        border-radius: 50%;
    }
}
.infoname{
    color: #fff;
}
.cart{
    position: fixed;
    width: 100%;
    height: 3rem;
    background: #fff;
    bottom: 0;
    display: flex;
    flex-direction: row;
    .cart_left{
        flex: 3;
    }
    .cart_right{
        flex: 1;
        background: red;
        color: #fff;
        text-align: center;
        line-height: 3rem;
    }
}
</style>