<template>
  <div id="homemenu">
    <div class="small" v-for="(item,index) in arr" :key="index">
      <router-link class="a_btn" :to="{'path':'/typeinfo','query':{'index':index}}">
        <img :class="index<5?'borderrad':'borderimg'" :src="item.src" alt />
        <p>{{item.name}}</p>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "homemenu",
  props: ["arr"]
};
</script>
<style lang='less' scope>
#homemenu {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.small {
  margin: 0.3rem 1%;
  width: 18%;
  height: auto;
  text-align: center;
  a.a_btn {
    color: #000;
    text-decoration: none;
    p {
      font-size: 0.8rem;
      white-space: nowrap;
    }
    .borderrad {
      border-radius: 50%;
      width: 80%;
    }
    .borderimg {
      width: 50%;
    }
  }
}
</style>