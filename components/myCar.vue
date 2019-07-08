<template>
  <div class="car">
    <div>
      <div class="van-doc-nav-bar van-nav-bar van-hairline--bottom">
        <div class="van-nav-bar__left" @click="back">
          <i class="van-icon van-icon-arrow-left van-nav-bar__arrow"></i>
        </div>
        <div class="van-nav-bar__title van-ellipsis">我的购物车</div>
        
      </div>
      <div class="carlist" v-for="(item,i) in cardList[0]" :key="i" v-show="item.isDel">
        <div class="left">
          <van-checkbox
            v-model="item.isCheck"
            class="check"
            @click="noCheck(i,item.price,item.num,item.isCheck)"
          ></van-checkbox>
        </div>
        <div class="mid">
          <div class="img">
            <img :src="item.shopImg" alt>
          </div>
        </div>
        <div class="right">
          <div class="title">{{item.shopName}}</div>
          <div class="color">银色</div>
          <div class="buttom">
            <div class="price">￥{{item.price}}</div>
            <div class="num">
              <div class="del" @click="subtract(item.id,item.price,i)">-</div>
              <div class="thisNum">{{item.num}}</div>
              <div class="add" @click="add(item.id,item.price),aNum(i)">+</div>
            </div>
          </div>
          <span class="glyphicon glyphicon-trash" @click="del(item.id,i,item.price,item.num)"></span>
        </div>
      </div>
      <div class="bottom">-----------我是有底线的----------</div>
      <div class="pay">
        <div class="van-submit-bar__bar">
          <!-- <div role="checkbox" tabindex="0" aria-checked="true" class="van-checkbox">
          <div class="van-checkbox__icon van-checkbox__icon--round van-checkbox__icon--checked">
            <i class="van-icon van-icon-success">
            </i>
          </div>
          <span class="van-checkbox__label">全选</span>
          </div>-->
          <van-checkbox v-model="checked" class="check" @click="noAll">全选</van-checkbox>
          <div class="van-submit-bar__text">
            <span>合计：</span>
            <span class="van-submit-bar__price" v-if="fn">¥ {{lastPrice}}</span>
          </div>
          <button
            class="van-button van-button--danger van-button--large van-button--square van-submit-bar__button"
          >
            <span class="van-button__text">提交订单</span>
          </button>
        </div>
      </div>
    </div>
    <!-- <div v-if="this.$store.state.ischeck">
      <shop></shop>
    </div> -->
  </div>
</template>
<script>
import shop from "./shops";
import Vue from "vue";
import { SwipeCell } from "vant";
Vue.use(SwipeCell);
import { Checkbox, CheckboxGroup } from "vant";
Vue.use(Checkbox).use(CheckboxGroup);
import { Toast } from "vant";
Vue.use(Toast);
import { Dialog } from "vant";
export default {
  data() {
    return {
      cardList: [],
      lastPrice: 0,
      fn: true,
      checked: true
    };
  },
  components: {
    shop
  },
  watch: {
    cardList: function(val, oldval) {
      console.log(val);
      console.log(oldval);
      this.fn = false;
      setTimeout(() => {
        this.fn = true;
      }, 10);
    }
  },
  methods: {
    back() {
      this.$store.commit("myCar");
    },
    noAll() {
      if (this.checked != false) {
        for (var i = 0; i < this.cardList[0].length; i++) {
          this.cardList[0][i].isCheck = false;
          this.lastPrice = 0;
        }
      } else {
        for (var i = 0; i < this.cardList[0].length; i++) {
          this.cardList[0][i].isCheck = true;
          // this.lastPrice=0
          this.lastPrice +=
            parseInt(this.cardList[0][i].price) *
            parseInt(this.cardList[0][i].num);
        }
      }
    },
    noCheck(i, price, num, isCheck) {
      if (this.cardList[0][i].isCheck != false) {
        this.lastPrice -= parseInt(price) * parseInt(num);
        this.cardList[0][i].isCheck != this.cardList[0][i].isCheck;
        this.checked = false;
      } else {
        this.lastPrice += parseInt(price) * parseInt(num);
        this.cardList[0][i].isCheck != this.cardList[0][i].isCheck;
      }
    },
    del(id, i, price, num) {
      Dialog.confirm({
        title: "删除",
        message: "是否确认删除"
      })
        .then(() => {
          $.ajax({
            type: "get", //发送方式为get
            url: "http://127.0.0.1:3000/delCar", //请求地址
            dataType: "json",
            data: { id }
          });
          this.cardList[0][i].isDel = false;
          this.lastPrice -= parseInt(price) * parseInt(num);
        })
        .catch(() => {
          // on cancel
        });
    },
    add(id, price) {
      console.log(id);
      // this.$$store.commit("addCar",id)
      $.ajax({
        type: "get", //发送方式为get
        url: "http://127.0.0.1:3000/addNum", //请求地址
        dataType: "json",
        data: { id }
      });
      this.lastPrice += price;
    },
    aNum(i) {
      this.cardList[0][i].num++;
    },
    subtract(id, price, i) {
      console.log(id);
      // this.$$store.commit("addCar",id)
      if (this.cardList[0][i].num == 1) {
        Toast("当前数量以为最小值");
        return;
      } else {
        $.ajax({
          type: "get", //发送方式为get
          url: "http://127.0.0.1:3000/delNum", //请求地址
          dataType: "json",
          data: { id }
        });
        this.lastPrice -= price;
        this.cardList[0][i].num--;
      }
    }
  },
  created() {
    var _this = this;
    $.ajax({
      type: "get", //发送方式为get
      url: "http://127.0.0.1:3000/card", //请求地址
      dataType: "json",
      success: function(data) {
        //ajax请求成功后触发的方法
        console.log("购物车数据");
        console.log(data.message);
        _this.cardList.push(data.message);
        console.log(_this.cardList);
        for (var i = 0; i < _this.cardList[0].length; i++) {
          _this.lastPrice +=
            parseInt(_this.cardList[0][i].price) *
            parseInt(_this.cardList[0][i].num);
          console.log(_this.lastPrice);
        }
      },
      error: function(err) {
        console.log("错误信息");
      }
    });
  }
};
</script>
<style lang="less" scoped>
.car {
  width: 100%;
  height: 100%;
  // position: absolute;
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
    span {
      color: #f5efef;
      font-size: 12px;
    }
  }
  .carlist {
    width: 100%;
    height: 100px;
    border-bottom: 1px solid #ccc;
    position: relative;
    .left {
      width: 10%;
      height: 100px;
      float: left;
      text-align: center;
      line-height: 100px;
      .check {
        text-align: center;
      }
      .van-checkbox {
        margin-top: 40px;
        margin-left: 10px;
      }
    }
    .mid {
      width: 25%;
      height: 100px;
      float: left;
      .img {
        width: 70px;
        height: 70px;
        position: relative;
        margin: 15px auto;
        img {
          position: absolute;
          width: 100%;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          margin: 0 auto;
        }
      }
    }
    .right {
      width: 60%;
      height: 100px;
      float: left;
      position: relative;
      .title {
        margin-left: 15px;
        margin-top: 18px;
        font-size: 14px;
      }
      .color {
        margin-left: 15px;
        line-height: 100px;
        font-size: 12px;
        position: absolute;
        top: 0;
        color: #ccc;
      }
      .buttom {
        margin-top: 26px;
        margin-left: 15px;
        font-style: 14px;
        height: 30px;
        width: 100%;
        line-height: 30px;
        .price {
          width: 30%;
          float: left;
          color: orangered;
        }
        .num {
          width: 50%;
          float: right;
          height: 28px;
          text-align: center;
          margin-top: 1px;
          .del {
            width: 26px;
            height: 26px;
            border: 1px solid #ccc;
            float: left;
            display: block;
            text-align: center;
            line-height: 26px;
            font-size: 16px;
          }
          .thisNum {
            width: 26px;
            height: 26px;
            border: 1px solid #ccc;
            float: left;
            display: block;
            text-align: center;
            line-height: 26px;
            font-size: 16px;
          }
          .add {
            width: 26px;
            height: 26px;
            border: 1px solid #ccc;
            float: left;
            display: block;
            text-align: center;
            line-height: 26px;
            font-size: 16px;
          }
        }
      }
    }
    .glyphicon-trash {
      font-size: 16px;
      color: rgb(182, 177, 177);
      position: absolute;
      top: 36px;
      right: 20px;
    }
  }
  .bottom {
    width: 100%;
    height: 40px;
    line-height: 40px;
    font-size: 10px;
    text-align: center;
    color: #ccc;
    margin-bottom: 120px;
  }
  .pay {
    position: fixed;
    bottom: 54px;
    width: 100%;
    background-color: #fff;
  }
}
</style>

