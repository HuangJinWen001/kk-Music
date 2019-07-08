<template>
  <div id="app">
      
        <!-- <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="./assets/yy1.png" alt>
          </div>
          <div class="swiper-slide">
            <img src="./assets/yy3.png" alt>
          </div>
          <div class="swiper-slide">
            <img src="./assets/yy4.png" alt>
          </div>
          <div class="swiper-slide">
            <img src="./assets/yy2.png" alt>
            <van-button type="info" @click="add" class="btn">进入体验</van-button>
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div> -->
    <div id="nav">
      <div class="navTop">
        <router-link to="/about">我</router-link>
        <router-link to="/home">听</router-link>
        <router-link to="/watch">看</router-link>
        <router-link to="/sing">购</router-link>
      </div>
      <div class="search">
        <div class="van-search">
          <div class="van-search__content van-search__content--square radius">
            <div class="van-cell van-cell--borderless van-field">
              <div class="van-field__left-icon">
                <i class="van-icon van-icon-search"></i>
              </div>
              <div class="van-cell__value van-cell__value--alone">
                <div class="van-field__body">
                  <input type="search" placeholder="请输入搜索关键词" class="van-field__control" v-model="searchInp">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="play" v-if="this.$store.state.isplay">
        <audio controls name="media" v-if="fn">
          <source :src="this.$store.state.songDetail[0].url" type="audio/mpeg">
        </audio>
      </div>
      <transition mode="out-in">
        <router-view/>
      </transition>
    </div>
  </div>
</template>
<script>
import Swiper from "swiper";
export default {
  data() {
    return {
      url: this.$store.state.songDetail[0],
      searchInp:"",
      fn:true,
      flag:false
    };
  },
  watch: {
    "url":function(val,oldval){
      console.log(val)
      console.log(oldval)
      this.fn=false
      setTimeout(()=>{
        this.fn=true
      },10)
    }
  },
  mounted() {
    new Swiper(".swiper-container", {
      pagination: {
        el: ".swiper-pagination"
      },
      on:{
        slideChangeTransitionStart:()=>{
          this.flag=false
        },
        slideChangeTransitionEnd:()=>{
          this.flag=true
        }
      }
    });
  },
  beforeUpdate() {
    this.url= this.$store.state.songDetail[0]
  },
};
</script>
<style lang="less">
#nav {
  width: 100%;
  height: 100px;
  background-color: #659ee9;
  .navTop {
    width: 100%;
    height: 50px;
    background-color: #659ee9;
    padding-top: 10px;
    a {
      color: #5e6063;
      font-size: 20px;
      height: 50px;
      line-height: 50px;
      text-decoration: none;
      display: block;
      width: 25%;
      float: left;
      text-align: center;
      &.router-link-exact-active {
        color: #f5efef;
        font-size: 26px;
        line-height: 50px;
      }
    }
  }
  .van-search {
    background-color: #659ee9;
  }
  .van-search__content {
    background-color: #659ee9;
    width: 100%;

    .van-icon-search {
      color: #f5efef;
    }
    ::-webkit-input-placeholder {
      /* WebKit browsers */
      color: #f5efef;
      text-align: center;
      opacity: 0.7;
    }
  }
  .radius {
    border-radius: 20px;
    border: 1px solid #f5efef;
  }
  .play {
    width: 100%;
    height: 60px;
    z-index: 1000;
    position: fixed;
    bottom: 0;
    audio {
      width: 100%;
      position: fixed;
      bottom: 0;
      background-color: #fff;
    }
  }
  .v-enter {
    opacity: 0;
    transform: translateX(100%);
  }
  .v-leave-to {
    opacity: 0;
    transform: translateX(100%);
  }
  .v-enter-active,
  .v-leave-active {
    transition: all 0.5s ease;
  }
}
</style>
