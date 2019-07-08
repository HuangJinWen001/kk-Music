<template>
  <div class="goods">
    <div class="van-doc-nav-bar van-nav-bar van-hairline--bottom">
      <div class="van-nav-bar__left" @click="back">
        <i class="van-icon van-icon-arrow-left van-nav-bar__arrow"></i>
      </div>
      <div class="van-nav-bar__title van-ellipsis">我的收藏</div>
      
    </div>
    <div class="list">
      <div class="songList" v-for="(item,i) in goodsList[0]" :key="i"  >
        <div class="song" v-if="item.isgood">
          <img :src="item.img" alt>
          <div class="title">{{item.goodName}}</div>
          <div class="like glyphicon glyphicon-heart" @click="nolike(i)"></div>
        </div>
      </div>
    </div>
    <div class="bottom">
        -----------我是有底线的----------
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      goodsList: []
    };
  },
  methods: {
    back() {
      this.$store.commit("gdisplay");
    },
    nolike(i){
      
          // document.querySelectorAll(".like")[i].style.color =
          //   "#5e6063";
        this.goodsList[0][i].isgood=false
      
    }
  },
  created() {
    var _this = this;
    $.ajax({
      type: "get",
      url: "http://127.0.0.1:3000/goods",
      success: function(result) {
        console.log(result.message);
        _this.goodsList.push(result.message);
        console.log(_this.goodsList);
      },
      error: function(err) {
        console.log(err);
      }
    });
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
  .songList {
    width: 100%;
    .song {
      width: 100%;
      height: 80px;
      border-bottom: 1px solid #ccc;
      img {
        width: 60px;
        height: 60px;
        margin: 10px;
        float: left;
        display: block;
      }
      .title {
        height: 80px;
        line-height: 80px;
        margin-left: 10px;
        float: left;
      }
      .like{
          height: 80px;
          width: 80px;
          float: right;
          color: #e9573f;
          text-align: center;
          line-height: 80px;
          font-size: 18px;
      }
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

