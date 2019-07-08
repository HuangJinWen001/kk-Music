<template>
  <div class="goods">
    <div v-show="this.$store.state.iscared">
      <div class="van-doc-nav-bar van-nav-bar van-hairline--bottom">
        <div class="van-nav-bar__left" @click="back">
          <i class="van-icon van-icon-arrow-left van-nav-bar__arrow"></i>
        </div>
        <div class="van-nav-bar__title van-ellipsis">商品详情</div>
        
      </div>
      <div class="shopList">
        <div class="shopimg">
          <img :src="this.$store.state.shopDetail[0].shopImg" alt>
        </div>
        <div class="title">
          <p class="name">{{this.$store.state.shopDetail[0].shopName}}</p>
          <p class="price">￥{{this.$store.state.shopDetail[0].price}}</p>
        </div>
        <div class="content">
          <p>{{this.$store.state.shopDetail[0].shopContent}}</p>
        </div>
        <div class="oo"></div>
        <div class="bottom">-----------宝贝详情----------</div>
        <div class="long">
          <img :src="this.$store.state.shopDetail[0].shopImgs" alt>
        </div>
        <div class="line">-----------我是有底线的----------</div>
      </div>
      <van-goods-action class="buttomNav">
        <van-goods-action-icon icon="chat-o" text="客服"/>
        <van-goods-action-icon icon="cart-o" text="购物车" @click="tocard"/>
        <van-goods-action-button type="warning" text="加入购物车" @click="card"/>
        <van-goods-action-button type="danger" text="立即购买"/>
      </van-goods-action>
    </div>
    <div v-if="this.$store.state.iscar">
      <myCar></myCar>
    </div>
  </div>
</template>
<script>
import { Toast } from "mint-ui";
import myCar from "../components/myCar";
export default {
  data() {
    return {
      shopDetail: this.$store.state.shopDetail[0]
    };
  },
  components: {
    myCar
  },
  methods: {
    back() {
      this.$store.commit("gdisplay");
    },
    card() {
      console.log("shop");
      this.$store.commit("addCar");
      let instance = Toast({
        message: "加入成功",
        iconClass: "glyphicon glyphicon-ok"
      });
      setTimeout(() => {
        instance.close();
      }, 2000);
    },
    tocard() {
      this.$store.commit("myCar");
    }
  }
};
</script>
<style lang="less" scoped>
.goods {
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
  .shopList {
    width: 100%;
    .shopimg {
      width: 100%;
      height: auto;
      img {
        width: 100%;
        height: auto;
      }
    }
    .title {
      width: 100%;
      height: auto;
      .name {
        width: 50%;
        height: auto;
        font-size: 25px;
        color: #333;
        margin: 5px 0;
        display: block;
        padding-left: 20px;
        float: left;
        word-wrap: break-word;
        word-break: break-all;
        overflow: hidden;
      }
      .price{
        width: 50%;
        height: auto;
        text-align: right;
        font-size: 20px;
        color: orangered;
        margin: 5px 0;
        display: block;
        padding-right: 50px;
        float: left;
        word-wrap: break-word;
        word-break: break-all;
        overflow: hidden;
      }
    }
    .content {
      width: 100%;
      height: auto;
      border-bottom: 1px solid #ccc;
      margin-top: 10px;
      clear: both;
      p {
        padding-left: 20px;
        padding-right: 20px;
        display: block;
        font-size: 16px;
        color: #5c6064;
        word-wrap: break-word;
        word-break: break-all;
        overflow: hidden;
      }
    }
    .oo {
      width: 100%;
      height: 10px;
      background-color: #f7f7f7;
    }
    .shopNav {
      width: 100%;
      height: 100px;
    }
    .bottom {
      width: 100%;
      height: 40px;
      line-height: 40px;
      font-size: 10px;
      text-align: center;
      color: #ccc;
    }
    .long {
      width: 100%;
      height: auto;
      img {
        width: 100%;
        height: auto;
      }
    }
    .line {
      width: 100%;
      height: 40px;
      line-height: 40px;
      font-size: 10px;
      text-align: center;
      color: #ccc;
      margin-bottom: 104px;
    }
  }
  .van-goods-action {
    position: fixed;
    bottom: 54px;
    // margin-bottom: 60px;
  }
}
</style>

