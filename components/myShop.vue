
<template>
  <div class="myShop">
    <div v-show="this.$store.state.iscared">
      <div class="van-doc-nav-bar van-nav-bar van-hairline--bottom">
        <div class="van-nav-bar__left" @click="back">
          <i class="van-icon van-icon-arrow-left van-nav-bar__arrow"></i>
        </div>
        <div class="van-nav-bar__title van-ellipsis">我的商城</div>
      </div>
      <div class="header">
        <div class="headerImg">
          <img src="../assets/1.jpg" alt>
        </div>
        <div class="headerContent">
          <p class="name">雯女神</p>
        </div>
        <div class="letter">
          <span class="glyphicon glyphicon-envelope"></span>
        </div>
      </div>
      <div class="mypay">
        <span>我的订单</span>
        <i>全部订单 ></i>
      </div>
      <div class="row logo" style="width:100%;margin:0 ;">
        <div class="col-xs-3 tac" @click="car">
          <span class="iconfont icon-gouwuche"></span>
          <p>购物车</p>
        </div>
        <div class="col-xs-3 tac">
          <span class="iconfont icon-xinyongqia"></span>
          <p>待支付</p>
        </div>
        <div class="col-xs-3 tac">
          <span class="iconfont icon-wuliu"></span>
          <p>待收货</p>
        </div>
        <div class="col-xs-3 tac">
          <span class="iconfont icon-fankui"></span>
          <p>评价</p>
        </div>
      </div>
      <div class="oo"></div>
      <div class="list" @click="newAdress">
        <span>地址管理</span>
        <i>></i>
      </div>
      <div class="list">
        <span>会员中心</span>
        <i>></i>
      </div>
      <div class="list">
        <span>服务之家</span>
        <i>></i>
      </div>
      <div class="list">
        <span>更多功能</span>
        <i>></i>
      </div>
    </div>
    <div v-if="this.$store.state.iscar">
        <mycar v-if="this.$store.state.iscar"></mycar>
    </div>
    <div v-if="this.$store.state.isAdress">
        <newAdress></newAdress>
    </div>
  </div>
</template>
<script>
import newAdress from "../components/newAdress"
import mycar from "../components/myCar";
export default {
  data() {
    return {};
  },
  components: {
    mycar,
    newAdress
  },
  methods: {
    back() {
      this.$store.commit("myShop");
    },
    car() {
        this.$store.commit("myCar");
    },
    newAdress(){
      this.$store.commit("Address");
    }
  }
};
</script>
<style lang="less" scoped>
.myShop {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 999;
  background-color: #fff;
  .van-doc-nav-bar {
    background-color: #659ee9;
    i {
      color: #f5efef;
    }
    .van-nav-bar__title {
      color: #f5efef;
    }
  }
  .header {
    width: 100%;
    height: 90px;
    border-bottom: 1px solid #dddcdc;
    .headerImg {
      height: 90px;
      width: 90px;
      float: left;
      margin-left: 10px;
      img {
        width: 70px;
        height: 70px;
        border-radius: 50%;
        margin: 10px;
      }
    }
    .headerContent {
      height: 90px;
      float: left;
      p {
        color: rgb(168, 165, 165);
        padding-left: 20px;
      }
      .name {
        color: rgb(209, 179, 9);
        font-size: 20px;
        margin-top: 20px;
      }
    }
    .letter {
      width: 80px;
      height: 90px;
      float: right;
      text-align: center;
      span {
        line-height: 90px;
        font-size: 30px;
        color: rgb(128, 122, 122);
      }
    }
  }
  .mypay {
    width: 100%;
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #dddcdc;
    span {
      color: #333;
      font-size: 16px;
      margin-left: 20px;
    }
    i {
      float: right;
      margin-right: 20px;
      color: rgb(192, 184, 184);
    }
  }
  .logo {
    height: 100px;
    .tac {
      height: 100px;
      text-align: center;
      color: #333;
      span {
        font-size: 30px;
        line-height: 50px;
        margin-top: 15px;
      }
      p {
        line-height: 20px;
      }
    }
  }
  .oo {
    width: 100%;
    height: 10px;
    background-color: #f7f7f7;
  }
  .list {
    width: 100%;
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #dddcdc;
    span {
      color: rgb(82, 80, 80);
      font-size: 14px;
      margin-left: 20px;
    }
    i {
      float: right;
      margin-right: 20px;
      color: #ccc;
    }
  }
}
</style>
