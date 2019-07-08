<template>
  <div class="guide">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="../assets/yy1.png" alt>
        </div>
        <div class="swiper-slide">
          <img src="../assets/yy3.png" alt>
        </div>
        <div class="swiper-slide">
          <img src="../assets/yy4.png" alt>
        </div>
        <div class="swiper-slide">
          <img src="../assets/yy2.png" alt>
          <van-button type="info" @click="add" class="btn">进入体验</van-button>
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>
<script>
import Swiper from "swiper";
export default {
    data(){
        return{
        }
    },
    methods:{
        add(){
            this.$router.push("/home")
        }
    },
    created() {
        if(localStorage.one){
            this.$router.push("/gg")
        }else{
            localStorage.one=true
        }
    },
}
</script>
<style lang="less" scoped>
.guide {
  width: 100%;
  height: 100%;
  z-index: 9911111999;
  position: fixed;
  top: 0;
  .swiper-slide {
  text-align: center;
  width: 100%;
  position: relative;
  img {
    width: 100%;
    height: auto;
  }
  .btn {
    width: 100px;
    height: 40px;
    position: absolute;
    bottom: 50px;
    left: 50%;
    margin-left: -50px;
    border-radius: 20px;
    opacity: 0.6;
  }
}
}

</style>

