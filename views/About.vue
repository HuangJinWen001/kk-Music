<template>
  <div class="about">
    <div v-show="this.$store.state.isgood">
      <div class="header">
        <div class="headerImg">
          <img src="../assets/1.jpg" alt>
        </div>
        <div class="headerContent">
          <p class="name">雯女神</p>
          <p>点击完善个人资料></p>
        </div>
        <div class="letter">
          <span class="glyphicon glyphicon-envelope"></span>
        </div>
      </div>
      <div class="row logo" style="width:100%;margin:0 ;">
        <div class="col-xs-3 tac">
          <span class="glyphicon glyphicon-folder-open" style="color:#f6bb42"></span>
          <p>本地音乐</p>
        </div>
        <div class="col-xs-3 tac" @click="goods">
          <span class="glyphicon glyphicon-heart" style="color:#e9573f"></span>
          <p>我的收藏</p>
        </div>
        <div class="col-xs-3 tac">
          <span class="glyphicon glyphicon-download-alt"></span>
          <p>下载</p>
        </div>
        <div class="col-xs-3 tac">
          <span class="glyphicon glyphicon-time" style="color:#434a54"></span>
          <p>最近播放</p>
        </div>
      </div>
      <div class="oo"></div>
      <div class="list">
        <span>音乐圈</span>
        <i>></i>
      </div>
      <div class="list">
        <span>k歌圈</span>
        <i>></i>
      </div>
      <div class="list" @click="myShop">
        <span>我的商城</span>
        <i>></i>
      </div>
    </div>
    <div v-show="this.$store.state.isgooded">
      <goods></goods>
    </div>
    <div v-if="this.$store.state.isMyShop">
      <myShop></myShop>
    </div>
  </div>
</template>
<script>
import goods from "../components/goods"
import myShop from '../components/myShop'
export default {
  data() {
    return {};
  },
  components:{
        goods,myShop
    },
  methods: {
    goods() {
      this.$store.commit("gdisplay");
    },
    myShop() {
      this.$store.commit("myShop");
    }
  }
};
</script>
<style lang="less" scoped>
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
.logo {
  height: 100px;
  .tac {
    height: 100px;
    text-align: center;
    color: #337ab7;
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
</style>
