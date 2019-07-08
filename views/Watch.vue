<template>
  <div>
    <div v-if="this.$store.state.isgood">
      <mt-navbar v-model="selected">
        <mt-tab-item id="1" class="mint-tab-item-label">新歌</mt-tab-item>
        <mt-tab-item id="2">MV</mt-tab-item>
        <mt-tab-item id="3">歌单</mt-tab-item>
      </mt-navbar>

      <!-- tab-container -->
      <mt-tab-container v-model="selected">
        <mt-tab-container-item id="1">
          <div class="songList" v-for="(item,i) in songList[0]" :key="i" @click="song(item.id)">
            <div class="song">
              <img :src="item.img" alt>
              <div class="title">{{item.songName}}</div>
            </div>
          </div>
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
          <div class="songList" v-for="(item,i) in this.$store.state.watchList" :key="i" @click="watch(item.id)">
            <div class="song">
              <span class="songbefore glyphicon glyphicon-play-circle"></span>
              <img :src="item.img" alt>
              <div class="title">{{item.watchName}}</div>
            </div>
          </div>
        </mt-tab-container-item>
        <mt-tab-container-item id="3">
          <div class="songList" v-for="(item,i) in songList[0]" :key="i">
            <div class="song">
              <img :src="item.img" alt>
              <div class="title">{{item.songName}}</div>
            </div>
          </div>
        </mt-tab-container-item>
      </mt-tab-container>
      <div class="bottom">-----------我是有底线的----------</div>
    </div>
    <div v-if="this.$store.state.isgooded">
      <watchTv></watchTv>
    </div>
  </div>
</template>
<script>
import watchTv from '../components/watchTv'
export default {
  data() {
    return {
      selected: "1",
      songList: []
    };
  },
  components:{
        watchTv
    },
  methods: {
    watch(item) {
      console.log(item);
      this.$store.commit("play");
      this.$store.commit("watchDetail",item)
    },
    song(item){
      console.log(item)
      var _this=this
        $.ajax({
            type: "get",//发送方式为get
            url:"http://127.0.0.1:3000/songUrl",//请求地址
            data:{item},//传的商品id
            dataType: "json",
            success: function (data) {//ajax请求成功后触发的方法
            _this.$store.commit("getUrl",data.message)
              //  _this.$store.state.songDetail=data.message
              //  console.log(_this.$store.state.songDetail[0].url+_this.$store.state.songDetail[0].songName)
            },
            error: function (err) {//ajax请求失败后触发的方法
                console.log("错误信息");//弹出错误信息
            }
        })
    },
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
    // $.ajax({
    //   type: "get",
    //   url: "http://127.0.0.1:3000/watch",
    //   success: function(result) {
    //     console.log(result);
    //     _this.watchList.push(result);
    //     console.log(_this.watchList);
    //   },
    //   error: function(err) {
    //     console.log(err);
    //   }
    // });
  }
};
</script>
<style lang="less" scoped>
.mint-navbar {
  margin-top: 10px;
}
.mint-tab-item {
  text-decoration: none;
  color: #a8acac;
}

.mint-navbar .mint-tab-item.is-selected {
  border-bottom: 2px solid #26a2ff;
  color: #464747;
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
</style>
