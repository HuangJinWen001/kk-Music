import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant';
import 'vant/lib/index.css';
import 'swiper/dist/css/swiper.min.css'
import 'swiper/dist/js/swiper.js'
import './bootstrap/css/bootstrap.css'
import $ from 'jquery'
import './css/iconfont.css'
Vue.prototype.$video = Video
//引入mui样式
// import './mui/css/mui.css'
//引入vant搜索组件
import { Search,SubmitBar} from 'vant';
Vue.use(Search,SubmitBar);
//引入图片轮播组件
import { Swipe, SwipeItem } from 'vant';
//引入vant按钮组件
Vue.use(Swipe).use(SwipeItem);
import { Button } from 'vant';
// 引入商品导航组件
import {
  GoodsAction,
  GoodsActionIcon,
  GoodsActionButton
} from 'vant';

Vue
  .use(GoodsAction)
  .use(GoodsActionIcon)
  .use(GoodsActionButton);
import { SwipeCell } from 'vant';
Vue.use(SwipeCell);
//引入Navbar, TabItem组件
import './css/style.css'
import { Navbar, TabItem,Toast } from 'mint-ui';
Vue.component(Navbar.name, Navbar);
Vue.component(TabItem.name, TabItem);
Vue.use(Button);
import { TabContainer, TabContainerItem } from 'mint-ui';
Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);
import { Sku } from 'vant';
Vue.use(Sku);

//引入video.js
import Video from 'video.js'
import 'video.js/dist/video-js.css'
Vue.prototype.$video = Video

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
