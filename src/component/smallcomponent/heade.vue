<template>
  <div id="headernav">
    <div class="nav-title-left">
      <img class="add" src="../../assets/title/add.png" alt />
      <span @click="userckadd">西部电子社区</span>
      <img class="j_btn" src="../../assets/title/jiantou.png" alt />
    </div>
    <div class="nav-title-right">
      <img class="s_btn" src="../../assets/title/l_s.png" alt />
      <span>20</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "headernav",
  props:{
      'leftcont':String,
      'rightcont':String
  },
  methods:{
      userckadd(){
          this.$parent.isshowaddress=true;
      }
  }
};
</script>
<style lang='less'>
#headernav {
  padding: 0.5rem 0;
  display: flex;
  flex-direction: row;
  .nav-title-left {
    flex: 5;
    img.add {
      width: 1.3rem;
      vertical-align: middle;
    }
    img.j_btn {
      width: 0.7em;
      vertical-align: middle;
    }
    span {
      vertical-align: middle;
      font-size: 1.1rem;
      font-weight: 500;
    }
  }
  .nav-title-right {
    position: relative;
    flex: 1;
    img.s_btn {
      width: 1.4rem;
      float: right;
    }
    span {
      background: red;
      border-radius: 50%;
      position: absolute;
      right: -0.2rem;
      top: -0.2rem;
      z-index: 1;
      font-size: 0.1rem;
      color: #fff;
    }
  }
}
</style>