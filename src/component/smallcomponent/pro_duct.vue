<template>
  <div id="production">
    <div class="proleft">
      <img :src="src" alt />
    </div>
    <div class="proright">
      <p>
        <b>{{name}}</b>
      </p>
      <p>
        <img class="star" src="../../assets/icon/fullstar.png" />
        <span class="score">{{score}}</span>
        <span class="m_s">月售{{num}}</span>
        <span class="m_d">
          <span class="min">{{min}}</span>
          <span class="ms">{{sk}}</span>
        </span>
      </p>
      <p class="mon">
        <span>起送￥15</span>
        <span>配送￥2</span>
        <span>人均￥21</span>
      </p>
      <p class="pe_son">高新区人气榜第1名</p>
      <div class="man">
        <p class="manjian">
          <span>30减19</span>
          <span>50减25</span>
          <span>80减49</span>
          <span>0.17折起</span>
          <span>按时送达</span>
          <span>支持自取</span>
        </p>
        <img src="../../assets/title/down.png" alt />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "production",
  props: {
     'src':String,
     'name':String,
     'score':Number,
     'num':Number,
     'min':String,
     'sk':String
  }
};
</script>
<style lang='less'>
#production {
  position: relative;
  padding: 0.2rem 0.5rem;
  display: flex;
  flex-direction: row;
  .proleft {
    flex: 1;
    img {
      width: 100%;
    }
  }
  .proright {
    padding-left: 0.5rem;
    flex: 4;
  }
}
.star {
  width: 0.8rem;
}
.score {
  color: orange;
  font-size: 0.7rem;
}
.m_s {
  font-size: 0.8rem;
  color: silver;
  margin: 0 0.5rem;
}
.min {
  font-size: 0.8rem;
  color: silver;
}
.ms {
  font-size: 0.8rem;
  color: silver;
}
.m_d {
  float: right;
}
.mon {
  font-size: 0.8rem;
  color: silver;
  margin: 0 0.5rem;
}
.pe_son {
  display: inline-block;
  padding: 0.1rem 0.5rem;
  background: #f7d9de;
  color: rgb(219, 147, 13);
  margin: 0.2rem 0;
  font-size: 0.9rem;
}
.man {
  position: relative;
  margin: 0.2rem 0;

  img {
    position: absolute;
    width: 1.2rem;
    right: 0;
    top: 0;
  }
}
.manjian {
  position: relative;
  margin: 0.2rem 0;
  width: 80%;
  span {
    display: inline-block;
    border: 1px solid #dbd8d8;
    color: #e99905;
    padding: 0.1rem 0.2rem;
    font-size: 0.8rem;
    margin: 0.2rem 0;
  }
}
</style>