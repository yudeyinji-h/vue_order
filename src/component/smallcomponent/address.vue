<template>
  <div id="nav-address">
    <div class="nav-par">
      <div class="nav-title-left">
        <img class="add" @click="addback" src="../../assets/title/leftback.png" alt />
        <span class="line">|</span>
        <span class="address">选择收货地址</span>
      </div>
      <div class="nav-title-right">
        <span>新增地址</span>
      </div>
    </div>
    <div class="address-menu">
      <div class="address-name">
        <img src="../../assets/title/address.png" alt />
        <span>西安</span>
        <img src="../../assets/title/down.png" alt />
      </div>
      <div class="user-search">
        <img class="sear_btn" src="../../assets/title/search.png" alt />
        <input
          @focus="userinput"
          @keyup="userkeyup"
          type="text"
          v-model="userText"
          placeholder="请输入收货地址"
        />
        <img
          v-show="showclose"
          @click="userclosebtn"
          class="close_btn"
          src="../../assets/title/close.png"
          alt
        />
        <button v-show="showsearch">搜索</button>
      </div>
    </div>
    <div class="ceng" @click="userhide" v-show="showsearch"></div>
    <div class="address_pos">
      <div class="addressname">
        <span>西部电子社区</span>
      </div>
      <div class="startaddress">
        <img src="../../assets/title/dingwei.png" alt />
        <span>重新定位</span>
      </div>
    </div>
    <div class="useritem">
      <div class="user_myaddress">
        <div class="user_myaddress_icon">
          <img src="../../assets/title/home 2.png" alt />
        </div>
        <div class="user_myaddress_info">
          <div class="user_myaddress_info_title">
            <span>我的收货地址</span>
          </div>
          <div class="addresslist" @click="gohome(item.address)" v-for="(item,index) in userlist" :key="index">
            <p>{{item.address}}</p>
            <p>
              <span>{{item.name}}</span>
              <span>{{item.tel}}</span>
            </p>
          </div>
        </div>
      </div>
      <div class="user_myaddress">
        <div class="user_myaddress_icon">
          <img src="../../assets/title/address.png" alt />
        </div>
        <div class="user_myaddress_info">
          <div class="user_myaddress_info_title">
            <span>附近地址</span>
          </div>
          <div class="addresslist"  @click="gohome(item.name)" v-for="(item,index) in fadd" :key="index">
            <p>{{item.name}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "nav-address",
  data() {
    return {
      scwidth: 0,
      showsearch: false,
      showclose: false,
      userText: "",
      userlist: [],
      fadd: []
    };
  },
  created() {
    this.scwidth = screen.availWidth;
  },
  mounted() {
    axios
      .post("/useradd")
      .then(res => {
        this.userlist = res.data.result;
      })
      .catch(() => {});
    axios.post("/fadd").then(res => {
      this.fadd = res.data.result;
    });
  },
  methods: {
    addback() {
      this.$parent.isshowaddress = false;
    },
    userinput() {
      this.showsearch = true;
    },
    userkeyup() {
      if (!this.showclose) {
        this.showclose = true;
      }
    },
    userclosebtn() {
      this.userText = "";
      this.showclose = false;
    },
    userhide() {
      this.showsearch = false;
    },
    gohome(name){
        console.log(name);
        this.addback();
    }
  }
};
</script>
<style lang='less'>
#nav-address {
  position: absolute;
  overflow: hidden;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  height: 100%;
  background: #fff;
  display: flex;
  flex-direction: column;
  padding: 0 0.6rem;
  box-sizing: border-box;
  .useritem {
    width: 110%;
    height: 36rem;
    overflow-y: scroll;
    .user_myaddress {
      margin-top: 1rem;
      display: flex;
      flex-direction: row;
      .user_myaddress_icon {
        flex: 1;
        height: 1.3rem;
        display: flex;
        align-items: center;
        img {
          width: 1.1rem;
          height: 1.1rem;
        }
      }
      .user_myaddress_info {
        flex: 10;
        display: flex;
        flex-direction: column;
        div.user_myaddress_info_title {
          span {
            color: #b6b3b3;
            font-size: 0.9rem;
          }
        }
        div.addresslist {
          width: 90%;
          margin-top: 0.7rem;
          border-bottom: 1px solid #e2dfdf;
          p:nth-child(1) {
            font-size: 0.9rem;
            margin: 0.4rem 0;
          }
          p:nth-child(2) {
            margin: 0.4rem 0;
            font-size: 0.8rem;
            color: #b6b3b3;
            span {
              display: inline-block;
              margin-right: 1rem;
            }
          }
        }
      }
    }
  }

  .address_pos {
    display: flex;
    align-items: center;
    //   border: 1px solid transparent;
    //   border-color: #ebe8e8 transparent #ebe8e8 transparent;
    height: 3rem;
    flex-direction: row;
    justify-content: space-between;
    div.addressname {
      width: 6rem;
      font-size: 1rem;
      span {
        vertical-align: middle;
      }
    }
    div.startaddress {
      text-align: right;
      width: 6rem;
      font-size: 0.9rem;
      color: orange;
      img {
        width: 1.5rem;
        vertical-align: middle;
      }
      span {
        vertical-align: middle;
      }
    }
  }
  .ceng {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 6rem;
    background: rgba(39, 38, 38, 0.5);
  }
  .address-menu {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 3rem;
    div.address-name {
      flex: 1.2;
      img {
        width: 1.3rem;
        vertical-align: middle;
      }
      span {
        vertical-align: middle;
      }
    }
    div.user-search {
      position: relative;
      flex: 4;
      img.sear_btn {
        position: absolute;
        width: 1.7rem;
        left: 0.5rem;
        top: 0.2rem;
      }
      img.close_btn {
        position: absolute;
        width: 1.5rem;
        right: 3rem;
        top: 0.3rem;
      }
      input {
        width: 100%;
        height: 2rem;
        background: #f8f8f8;
        border-style: none;
        outline: none;
        padding-left: 2.6rem;
        padding-right: 3rem;
        box-sizing: border-box;
        vertical-align: middle;
        border-radius: 0.1rem;
        font-size: 1rem;
        color: #c9c4c4;
      }
      button {
        position: absolute;
        top: 0;
        right: 0;
        color: orange;
        border-style: none;
        outline: none;
        background: #fff;
        font-size: 0.9rem;
        width: 3rem;
        height: 2rem;
      }
    }
  }
  div.nav-par {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 3rem;
    padding: 0.7rem 0;
    box-sizing: border-box;
    .nav-title-left {
      flex: 5;
      img.add {
        width: 1.6rem;
        vertical-align: middle;
      }
      span.line {
        vertical-align: middle;
        font-size: 0.8rem;
        font-weight: 500;
        margin: 0 0.5rem;
        color: silver;
      }
      span.address {
        vertical-align: middle;
        font-size: 1rem;
        font-weight: 500;
      }
    }
    .nav-title-right {
      flex: 3;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      span {
        vertical-align: middle;
        font-size: 0.8rem;
        font-weight: 500;
      }
    }
  }
}
</style>