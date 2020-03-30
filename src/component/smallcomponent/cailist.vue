<template>
  <div id="cai">
    <div class="c_left">
      <div class="c_par">
        <ul class="leftul">
          <li
            @click="userck(index)"
            :class="{'act':useckeck==index,'leftmenuli':true}"
            v-for="(item,index) in list"
            :key="index"
          >{{item.name}}</li>
        </ul>
      </div>
    </div>
    <div ref="crightpar" class="c_right">
      <div ref="scrollpar" class="c_par" @scroll="elescroll">
        <ul ref="rightmenu" class="rightmenu" v-for="(item,index) in list" :key="index">
          <li v-for="(it,id) in item.spus" :key="id">
            <div>
              <img :src="it.picture" alt />
            </div>
            <div>
              <p>
                <b>{{it.name}}</b>
              </p>
              <p>{{it.description}}</p>
              <p>
                <span>月售{{it.month_saled}}</span>
                <span>{{it.praise_content}}</span>
              </p>
              <p>{{it.min_price}}￥</p>
            </div>
            <div class="number">
              <button @click="userjian(item.spus,id)" v-show="showarray[id]?true:false">-</button>
              <span v-show="showarray[id]?true:false">{{showarray[id]?showarray[id].num:0}}</span>
              <button @click="useradd(item.spus,id)">+</button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "cai",
  props: {
    list: {
      type: Array
    }
  },
  data() {
    return {
      showarray: [],
      useckeck: 0,
      arrtop: []
    };
  },
  mounted() {
    console.log(this.list);
  },
  methods: {
    elescroll(e) {
      //，滑动事件
      let myself = this.$refs.scrollpar;
      if (this.arrtop.length == 0) {
        let ulmenu = this.$refs.rightmenu;
        let offtop = this.$refs.crightpar.offsetTop;
        ulmenu.map((val, index) => {
          this.arrtop.push(val.offsetTop - offtop);
        });
      }
      for (let i = 0; i <= this.arrtop.length; i++) {
        if (i == this.arrtop.length - 1) {
          this.useckeck = i;
          break;
        }
        if (
          myself.scrollTop >= this.arrtop[i] &&
          myself.scrollTop < this.arrtop[i + 1]
        ) {
          this.useckeck = i;
          break;
        }
      }
    },
    userck(index) {
      this.useckeck = index;
      let offset =
        this.$refs.rightmenu[index].offsetTop - this.$refs.crightpar.offsetTop;
      this.$refs.scrollpar.scrollTop = offset + 10;
    },
    userjian(item, childindex) {
      //先遍历
      this.showarray.map((itval, index) => {
        if (itval && itval.name == item[childindex].name) {
          itval.num--;
          if (itval.num <= 0) {
            this.showarray[childindex] = null;
            return;
          }
        }
      });

      console.log(this.showarray);
    },
    useradd(item, childindex) {
      if (!this.showarray[childindex]) {
        //添加到购物车
        this.showarray[childindex] = {
          index: childindex,
          name: item[childindex].name,
          price: item[childindex].min_price,
          num: 0
        };
      }
      //存在
      this.showarray.map((itval, index) => {
        if (itval && itval.name == item[childindex].name) {
          itval.num++;
        }
      });
      console.log(this.showarray);
      //强制渲染
      this.$nextTick(() => {
        this.showarray = [...this.showarray];
      });
    }
  }
};
</script>
<style lang='less'>
#cai {
  display: flex;
  flex-direction: row;
  .c_left {
    flex: 1;
    height: 30rem;
    overflow: hidden;
    border-right: 1px solid #000;
  }
  .c_right {
    flex: 4;
    overflow: hidden;
  }
}
.c_par {
  width: 110%;
  height: 30rem;
  overflow-y: scroll;
}
.leftmenuli {
  list-style: none;
  padding: 1rem 0 1rem 0.5rem;
  box-sizing: border-box;
  font-size: 0.9rem;
  border-bottom: 1px solid #000;
}
.rightmenu {
  border-bottom: 1px solid #ebe9e9;
  display: flex;
  flex-direction: column;
  padding-right: 3rem;
  li {
    position: relative;
    list-style: none;
    display: flex;
    flex-direction: row;
    margin: 0.5rem 0;
    div:nth-child(1) {
      flex: 1;
      box-sizing: border-box;
      padding: 1rem;
      img {
        width: 100%;
      }
    }
    div:nth-child(2) {
      flex: 3;
      padding-left: 0.5rem;
      p {
        margin: 0.2rem 0;
        font-size: 0.9rem;
      }
    }
  }
}
.number {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 6rem;
  text-align: right;
  span {
    vertical-align: middle;
    display: inline-block;
    width: 2rem;
    text-align: center;
  }
  button {
    width: 1.5rem;
    height: 1.5rem;
    border: 1px solid silver;
    border-radius: 50%;
    background: #fff;
    font-size: 1.3rem;
    vertical-align: middle;
    outline: none;
  }
}
.act {
  background: #fae0e4;
}
</style>