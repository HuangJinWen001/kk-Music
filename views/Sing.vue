<template>
  <div class="sing">
    <div class="list" v-show="this.$store.state.isgood">
      <div class="shop" v-for="(item,i) in shopList" :key="i" @click="shop(item.id)">
        <div class="left">
          <img :src="item.shopImg" alt>
        </div>
        <div class="mid">
          <p class="name">{{item.shopName}}</p>
          <div>
            <p class="content">{{item.shopContent}}</p>
            <div class="ooo">...</div>
          </div>
        </div>
        <div class="car" @click.stop="car(i)">
          <span class="glyphicon glyphicon-shopping-cart"></span>
        </div>
      </div>
      <div class="bottom">
        -----------我是有底线的----------
      </div>
    </div>
    <div v-show="this.$store.state.isgooded">
      <shops></shops>
    </div>
    
  </div>
</template>
<script>
import shops from "../components/shops"
export default {
  data() {
    return {
      shopList: []
    };
  },
  components:{
        shops
    },
  methods: {
    car:function(i) {
          document.querySelectorAll(".shop .car span")[i].style.color =
            "#659ee9";
          this.$store.commit("addCar")
    },
    shopCar(){
      console.log("oooo")
    },
    shop(item){
        console.log(item)
        this.$store.commit("gdisplay");
        var _this=this
        $.ajax({
            type: "get",//发送方式为get
            url:"http://127.0.0.1:3000/shopDetail",//请求地址
            data:{item},//传的商品id
            dataType: "json",
            success: function (data) {//ajax请求成功后触发的方法
               console.log(data)
               _this.$store.state.shopDetail=data.message
               console.log(_this.$store.state.shopDetail)
            },
            error: function (err) {//ajax请求失败后触发的方法
                console.log("错误信息");//弹出错误信息
            }
        })
    }
  },
  created() {
    var _this = this;
    $.ajax({
      type: "get",
      url: "http://127.0.0.1:3000/shop",
      success: function(result) {
        _this.shopList = result.message;
      },
      error: function(err) {
        console.log(err);
      }
    });
  }
};
</script>
<style lang="less" scoped>
.shop {
  width: 100%;
  height: 100px;
  border-bottom: 1px solid #ccc;
  .left {
    width: 100px;
    height: 100px;
    float: left;
    img {
      width: 80px;
      height: 80px;
      margin: 10px;
    }
  }
  .mid {
    height: 100px;
    float: left;
    .name {
      width: 100px;
      height: 30px;
      line-height: 30px;
      font-size: 20px;
      margin-top: 20px;
      margin-left: 20px;
      color: #333;
      overflow: hidden;
    }
    .content {
      width: 140px;
      height: 20px;
      line-height: 20px;
      font-size: 14px;
      margin-left: 20px;
      color: rgb(179, 175, 175);
      overflow: hidden;
      display: block;
      float: left;
    }
    .ooo {
      width: 10px;
      height: 20px;
      line-height: 20px;
      font-size: 14px;
      color: rgb(179, 175, 175);
      display: block;
      float: left;
    }
  }
  .car {
    width: 80px;
    height: 100px;
    float: right;
    text-align: center;
    line-height: 100px;
    span {
      font-size: 20px;
      color: #5e6063;
    }
  }
}
.bottom{
    width: 100%;
    height: 40px;
    line-height: 40px;
    font-size: 10px;
    text-align: center;
    color: #ccc;
    margin-bottom: 60px;
}
</style>

