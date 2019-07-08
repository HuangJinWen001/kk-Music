<template>
  <div class="watchTv">
    <div class="van-doc-nav-bar van-nav-bar van-hairline--bottom">
      <div class="van-nav-bar__left" @click="back">
        <i class="van-icon van-icon-arrow-left van-nav-bar__arrow"></i>
      </div>
      <div class="van-nav-bar__title van-ellipsis">{{this.$store.state.watchDetail.watchName}}</div>
      
    </div>
      <video  controls autoplay class="video" name="media">
        <source :src="url.url"  type="video/mp4" >
      </video>
      
      <div class="date">
        <div class="time">时长：{{this.$store.state.watchDetail.longtime}}</div>
        <div class="longtime">发布：{{this.$store.state.watchDetail.time}}</div>
      </div>
      <div class="content">
        <span class="s1">简介：</span><span class="s2">{{this.$store.state.watchDetail.content}}</span>
      </div>
      <p>------演唱者：{{this.url.author}}------</p>
  </div>
</template>
<script>
export default {
  data() {
    
    return {
      fn:true,
      url: this.$store.state.watchDetail
    };
  },
  created() {
    
  },
  methods: {
    back() {
      this.$store.commit("play");
    },
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
  }
};
</script>
<style lang="less" scoped>
.watchTv {
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
  .video{
      width: 100%;
      height: auto;
    }
    p{
      text-align: center;
      margin-top: 20px;
      margin-bottom: 30px;
      font-size: 14px;
      color: rgb(185, 180, 180);
    }
    .date{
      width: 100%;
      padding: 20px 20px;
      padding-bottom: 10px;
      .time{
        width: 100%;
        padding-bottom: 10px;
      }
      .longtime{
        width: 100%;
      }
    }
    .content{
      width: 100%;
      height: auto;
      padding: 0 20px;
      .s1{
        font-size: 20px;
        color: #333;
      }
      .s2{
        font-size: 14px;
        line-height: 30px;
      }
    }
}
</style>

