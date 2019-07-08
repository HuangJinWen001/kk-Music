import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isplay:true,
    isMyShop:false,
    isAdress:false,
    ischeck:false,
    ischecked:true,
    isgood:true,
    isgooded:false,
    iscar:false,
    iscared:true,
    newshop:false,
    watchList:[{
      watchName:"十七岁",
      img:"https://p2.music.126.net/fPgII_A81NULgOPjO1nPKw==/40681930245657.jpg?param=130y130",
      url:require("./media/17.mp4"),
      author:"刘德华",
      content:"《17岁》是刘德华演唱的一首歌曲，由刘德华和徐继宗作词，徐继宗作曲的一首歌，编曲为Billy Chan，收录在专辑《如果有一天》中。",
      time:"2004年02月",
      longtime:"3分17秒",
      id:"0"
    },
    {
      watchName:"怪你过分美丽",
      img:"https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2205964636,3733471544&fm=58",
      url:require("./media/guofenmeili.mp4"),
      author:"张国荣",
      content:"《怪你过分美丽》是香港著名歌手张国荣的一首歌，收录在他的音乐专辑《红》中。他在跨越97演唱会上唱过这首歌，其现场效果相比专辑收录的版本有过之而无不及，歌迷们称：听一万遍都不够。 Chan，收录在专辑《如果有一天》中。",
      time:"1996年11月26日",
      longtime:"4分17秒",
      id:"1"
    },
    {
      watchName:"明天你好",
      img:"http://p2.music.126.net/LQ2iUKlZwqGMysGkeCR4ww==/27487790697969.jpg",
      url:require("./media/tomorrow.mp4"),
      author:"咖啡牛奶",
      content:"《明天你好》是由中视传媒、强视传媒、晟喜华视联合出品的都市时尚励志剧，由王鸣飞导演，张睿、杨蓉、郑凯、夏花、李宜儒等领衔主演。该剧讲述了张睿饰演的草根创业男孙梦翔和杨蓉饰演的富家千金陈墨墨在创业路上勇敢追求、永不服输最终实现梦想的故事，而中间穿插着感人的亲情、动人的爱情和真挚的友情。 Chan，收录在专辑《如果有一天》中。",
      time:"2015年",
      longtime:"4分14秒",
      id:"2"
    },
    {
      watchName:"分分钟需要你",
      img:"http://p2.music.126.net/7PXc4Jv9uH59J5SAYEZOjQ==/78065325572830.jpg",
      url:require("./media/fenfenzhongxuyaoni.mp4"),
      author:"林子祥",
      content:"《分分钟需要你》是由郑国江填词，林子祥作曲并演唱的一首歌曲。该歌曲于1980年发行。1997年，《分分钟需要你》获得第二十届十大中文金曲颁奖音乐会金曲奖。",
      time:"1980年",
      longtime:"03:01",
      id:"3"
    },
    {
      watchName:"祝君好",
      img:"https://p3fx.kgimg.com/mvhdpic/240/20160504/20160504081235940065.jpg",
      url:require("./media/zhujunhao.mp4"),
      author:"张智霖",
      content:"《祝君好》是张智霖演唱的一首歌曲，由周礼茂填词，Cho Kyu Man作曲，黄丹仪编曲、监制。收录于2000年11月23日由新艺宝发行的专辑《十指紧扣》中。该歌曲是TVB电视剧《十月初五的月光》主题曲。",
      time:"2000年11月23日",
      longtime:"4分14秒",
      id:"4"
    },
    {
      watchName:"一双手",
      img:"https://p3fx.kgimg.com/mvhdpic/240/20160215/20160215165724790964.jpg",
      url:require("./media/onehand.mp4"),
      author:"林奕匡",
      content:"《一双手》是林奕匡演唱的歌曲，由陈咏谦作词、林奕匡作曲，收录于2015年11月13日发行的专辑《有人共鸣》中。2017年1月，该歌曲荣获Billboard Radio China 2016年度最佳粤语十大金曲。",
      time:"2015-11-13",
      longtime:"03：31",
      id:"5"
    },
    {
      watchName:"一路上有你",
      img:"https://p3fx.kgimg.com/mvhdpic/240/20160426/20160426184644195108.jpg",
      url:require("./media/yiluyouni.mp4"),
      author:"张学友",
      content:"《一路上有你》是由谢明训作词，片山圭司作曲，张学友演唱的一首歌曲。收录于张学友1993年3月5日发行的专辑《吻别》中 。",
      time:"1993年3月5日",
      longtime:"4分48秒",
      id:"6"
    },
    {
      watchName:"饿狼传说",
      img:"https://p3fx.kgimg.com/mvhdpic/240/20160501/20160501105541724344.jpg",
      url:require("./media/elangchuanshuo.mp4"),
      author:"张学友",
      content:"《饿狼传说》是由潘伟源填词，刘诺生谱曲和编曲，张学友演唱的一首歌曲，收录于1994年5月20日发行的同名专辑《饿狼传说》中。",
      time:"1994年5月20日",
      longtime:"4分33秒",
      id:"7"
    },
    {
      watchName:"一千个伤心的理由",
      img:"https://p3fx.kgimg.com/mvhdpic/240/20160503/20160503033124691763.jpg",
      url:require("./media/yiqiangeshangxindeliyou.mp4"),
      author:"张学友",
      content:"《一千个伤心的理由》是张学友演唱的歌曲，由李偲菘作曲，邢增华作词，赵增熹编曲，收录于1995年3月16日发行的专辑《真爱 新曲+精选》中",
      time:"1995年3月16日",
      longtime:"4分36秒",
      id:"8"
    },
    {
      watchName:"讲不出再见",
      img:"https://p3fx.kgimg.com/mvhdpic/240/20170322/20170322173624498023.jpg",
      url:require("./media/goobay.mp4"),
      author:"谭咏麟",
      content:"这首《讲不出再见》或许是传唱最广的粤语歌之一了，作为谭咏麟1994年专辑《梦幻的笑容》中的招牌曲目，它几乎已经成为了谭氏情歌的代表作。在香港各大高校的毕业典礼上，这首歌都被当作毕业歌曲演唱。它在中国大陆和海外华人区亦颇具知名度，堪称一曲象征着九十年代华丽与浪漫的骊歌。",
      time:"1994 2.17",
      longtime:"04：56",
      id:"9"
    }],
    shopDetail:[],
    songDetail:[{
      url:"https://webfs.yun.kugou.com/201906221037/dfedbaa89437c7e66d2cb29b484b9a8b/G126/M00/05/09/HocBAFxLAoeAT3BzAD1nWyW7V5M814.mp3",
      id:"",
      songName:"",
      img:""
    }],
    watchDetail:{},
    adress:[
      {
        name:"黄锦雯",
        tel:"13640481799",
        content:"广东省广州市黄埔区光谱西路TCL文化园粤嵌众创中心"
      }
    ]
  },
  mutations: {
    Address(state){
      this.state.iscared=!this.state.iscared
      this.state.isAdress=!this.state.isAdress
    },
    display(state){
      this.state.ischeck=!this.state.ischeck
      this.state.ischecked=!this.state.ischecked
    },
    gdisplay(state){
      this.state.isgood=!this.state.isgood
      this.state.isgooded=!this.state.isgooded
    },
    getUrl(state,item){
      console.log(item)
      this.state.songDetail=item
      console.log(this.state.songDetail)
    },
    play(state){
      this.state.isgood=!this.state.isgood
      this.state.isgooded=!this.state.isgooded
      this.state.isplay=!this.state.isplay
    },
    myShop(state){
      this.state.isgood=!this.state.isgood
      this.state.isMyShop=!this.state.isMyShop
    },
    myCar(state){
      this.state.iscar=!this.state.iscar
      this.state.iscared=!this.state.iscared
    },
    addCar(state){
      
      var carDetail=this.state.shopDetail[0]
      console.log(carDetail)
      $.ajax({
            type: "get",//发送方式为get
            url:"http://127.0.0.1:3000/addCard",//请求地址
            data:{carDetail},//传的商品信息
            dataType: "json",
            success: function (data) {//ajax请求成功后触发的方法
              console.log("购物车加入成功")
            },
            error: function (err) {//ajax请求失败后触发的方法
                console.log("错误信息");//弹出错误信息
            }
        })
    },
    watchDetail(state,item){
      console.log(item)
      this.state.watchDetail=this.state.watchList[item]
      console.log(this.state.watchDetail)
      
    }
  },
  actions: {

  }
})
