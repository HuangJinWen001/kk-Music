<template>
  <div class="songlist">
    <div>
      <div class="van-doc-nav-bar van-nav-bar van-hairline--bottom">
        <div class="van-nav-bar__left" @click="back">
          <i class="van-icon van-icon-arrow-left van-nav-bar__arrow"></i>
        </div>
        <div class="van-nav-bar__title van-ellipsis">歌单</div>
      </div>
    </div>
    <van-dropdown-menu>
      <van-dropdown-item v-model="value1" :options="option1"/>
      <van-dropdown-item v-model="value2" :options="option2"/>
    </van-dropdown-menu>
    <div class="songList" v-for="(item,i) in songList[0]" :key="i" @click="song(item.id)">
      <div class="song">
        <img :src="item.img" alt>
        <div class="title">{{item.songName}}</div>
      </div>
    </div>
    <div class="bottom">-----------我是有底线的----------</div>
  </div>
  
</template>
<script>
import Vue from "vue";
import { DropdownMenu, DropdownItem } from "vant";
Vue.use(DropdownMenu).use(DropdownItem);
export default {
  data() {
    return {
      songList: [],
      value1: 0,
      value2: "a",
      option1: [
        { text: "推荐", value: 0 },
        { text: "最热", value: 1 },
        { text: "最新", value: 2 }
      ],
      option2: [
        { text: "附近", value: "a" },
        { text: "直播", value: "b" },
        { text: "电台", value: "c" }
      ]
    };
  },
  created() {
    var _this = this;
    $.ajax({
      type: "get",
      url: "http://127.0.0.1:3000/song",
      success: function(data) {
        console.log(data.message);
        _this.songList.push(data.message);
        console.log(_this.songList);
      },
      error: function(err) {
        console.log(err);
      }
    });
  },
  methods: {
    back() {
      this.$store.commit("gdisplay");
    },
    song(item) {
      console.log(item);
      var _this = this;
      $.ajax({
        type: "get", //发送方式为get
        url: "http://127.0.0.1:3000/songUrl", //请求地址
        data: { item }, //传的商品id
        dataType: "json",
        success: function(data) {
          //ajax请求成功后触发的方法
          _this.$store.commit("getUrl", data.message);
          //  _this.$store.state.songDetail=data.message
          //  console.log(_this.$store.state.songDetail[0].url+_this.$store.state.songDetail[0].songName)
        },
        error: function(err) {
          //ajax请求失败后触发的方法
          console.log("错误信息"); //弹出错误信息
        }
      });
    },
  }
};
</script>
<style lang="less" scoped>
.songlist {
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
  .van-dropdown-menu {
    border-bottom: 1px solid #ccc;
  }
  .songList {
    width: 100%;
    .song {
      width: 100%;
      height: 80px;
      border-bottom: 1px solid #ccc;
      position: relative;
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
        margin-left: 90px;
      }
      .songbefore {
        font-size: 28px;
        color: #ccc;
        opacity: 0.8;
        position: absolute;
        left: 26px;
        top: 26px;
      }
    }
  }
  .bottom {
    width: 100%;
    height: 40px;
    line-height: 40px;
    font-size: 10px;
    text-align: center;
    color: #ccc;
    margin-bottom: 60px;
  }
}
</style>
