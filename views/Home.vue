<template>
  <div class="home">
    <div v-show="this.$store.state.isgood">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="https://imgessl.kugou.com/commendpic/20190619/20190619175131857155.jpg" alt>
          </div>
          <div class="swiper-slide">
            <img src="https://imgessl.kugou.com/commendpic/20190620/20190620112118632481.jpg" alt>
          </div>
          <div class="swiper-slide">
            <img src="https://imgessl.kugou.com/commendpic/20190619/20190619234727919213.jpg" alt>
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
      <div class="row" style="width:100%;margin:0 ;margin-bottom:10px;">
        <div class="col-xs-4 tac" @click="songPaper">
          <span class="glyphicon glyphicon-headphones ico"></span>
          <div>乐库</div>
        </div>
        <div class="col-xs-4 tac" @click="songPaper">
          <span class="glyphicon glyphicon-list-alt ico"></span>
          <div>歌单</div>
        </div>
        <div class="col-xs-4 tac" @click="songPaper">
          <span class="glyphicon glyphicon-sound-stereo ico"></span>
          <div>电台</div>
        </div>
        <div class="col-xs-4 tac" @click="songPaper">
          <span class="glyphicon glyphicon-heart-empty ico"></span>
          <div>猜你喜欢</div>
        </div>
        <div class="col-xs-4 tac" @click="songPaper">
          <span class="glyphicon glyphicon-calendar ico"></span>
          <div>每日推荐</div>
        </div>
        <div class="col-xs-4 tac" @click="songPaper">
          <span class="glyphicon glyphicon-option-horizontal ico"></span>
          <div>更多</div>
        </div>
      </div>
      <div class="oo"></div>
      <mt-navbar v-model="selected">
        <mt-tab-item id="1" class="mint-tab-item-label">新歌</mt-tab-item>
        <mt-tab-item id="2">直播</mt-tab-item>
        <mt-tab-item id="3">歌单</mt-tab-item>
      </mt-navbar>

      <!-- tab-container -->
      <mt-tab-container v-model="selected">
        <mt-tab-container-item id="1">
          <div class="songList" v-for="(item,i) in songList[0]" :key="i" @click="song(item.id)">
            <div class="song">
              <img :src="item.img" alt>
              <div class="title">{{item.songName}}</div>
              <div class="heart" @click.stop="nike(i)">
                <span class="glyphicon glyphicon-heart"></span>
              </div>
            </div>
          </div>
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
          <div class="songList" v-for="(item,i) in this.$store.state.watchList" :key="i">
            <div class="song">
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
    </div>
    <div v-show="this.$store.state.isgooded">
        <songpaper></songpaper>
    </div>
    <div class="bottom">-----------我是有底线的----------</div>
  </div>
</template>

<script>
import Swiper from "swiper";
import songpaper from "../components/songlist"
export default {
  data() {
    return {
      selected: "1",
      songList: [],
      watchList: []
    };
  },
  components:{
    songpaper
  },
  methods: {
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
    songPaper() {
      this.$store.commit("gdisplay");
    },
    nike:function(i) {
          document.querySelectorAll(".heart span")[i].style.color =
            "#e9573f";
          // this.$store.commit("addCar")
          var _this = this;
          var data=this.songList[0][i]
    $.ajax({
      type: "get",
      url: "http://127.0.0.1:3000/addGoods",
      data:{data},
      success: function(data) {
        
      },
      error: function(err) {
        console.log(err);
      }
    });
    },
  },
  mounted() {
    new Swiper(".swiper-container", {
      pagination: {
        el: ".swiper-pagination"
      },
      loop: true,
      autoplay: {
        delay: 2000,
        stopOnLastSlide: false,
        disableOnInteraction: true
      }
    });
  },
  created() {
    var _this = this;
    $.ajax({
      type: "get",
      url: "http://127.0.0.1:3000/song",
      success: function(data) {
        // console.log(data.message);
        _this.songList.push(data.message);
        // console.log(_this.songList)
      },
      error: function(err) {
        console.log(err);
      }
    });
   
    // $.ajax({
    //   type: "get",
    //   url: "http://127.0.0.1:3000/watch",
    //   success: function(result) {
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
.bottom {
  width: 100%;
  height: 40px;
  line-height: 40px;
  font-size: 10px;
  text-align: center;
  color: #ccc;
  margin-bottom: 60px;
}
.oo {
  width: 100%;
  height: 10px;
  background-color: #f7f7f7;
}
.swiper-container {
  width: 100%;
  height: auto;
  background-color: #659ee9;
  .swiper-pagination {
    bottom: 5px;
  }
}
img {
  width: 96%;
  height: auto;
  display: block;
  margin: 0 auto;
  border-radius: 5px;
  padding-bottom: 5px;
}
.tac {
  text-align: center;
  margin-top: 10px;
  .ico {
    font-size: 20px;
    color: #659ee9;
    margin: 10px 0;
  }
}
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
    img {
      width: 60px;
      height: 60px;
      margin: 10px;
      float: left;
      display: block;
    }
    .title {
      height: 80px;
      width: 60%;
      line-height: 80px;
      float: left;
    }
    .heart{
      width: 10%;
      height: 80px;
      float: left;
      line-height: 80px;
      text-align: center;
      span{
        font-size: 20px;
        color: #ccc;
      }
    }
  }
}

</style>
