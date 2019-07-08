<template>
  <div class="newAdress">
    <div class="van-doc-nav-bar van-nav-bar van-hairline--bottom">
      <div class="van-nav-bar__left" @click="back">
        <i class="van-icon van-icon-arrow-left van-nav-bar__arrow"></i>
      </div>
      <div class="van-nav-bar__title van-ellipsis">我的地址</div>
      <div class="van-nav-bar__right">
          <span>添加</span>
      </div>
    </div>
    <!-- <div class="adressList" v-for="(item,i) in this.$store.state.adress" :key="i">
        <div class="top">
            <div class="name">{{item.name}}</div>
            <div class="tel">{{item.tel}}</div>
        </div>
        <div class="bottom">{{item.content}}</div>
    </div> -->
    <div class="addAdress">
    </div>
    <van-address-list
  v-model="chosenAddressId"
  :list="list"
  :disabled-list="disabledList"
  disabled-text="以下地址超出配送范围"
  @add="onAdd"
  @edit="onEdit"
/>
  </div>
</template>
<script>
import Vue from 'vue'
import { AddressList } from 'vant';
Vue.use(AddressList);
export default {
  data() {
    return {
      chosenAddressId: '1',
      list: [
        {
          id: '1',
          name: '张三',
          tel: '13000000000',
          address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室'
        },
        {
          id: '2',
          name: '李四',
          tel: '1310000000',
          address: '浙江省杭州市拱墅区莫干山路 50 号'
        }
      ],
      disabledList: [
        {
          id: '3',
          name: '王五',
          tel: '1320000000',
          address: '浙江省杭州市滨江区江南大道 15 号'
        }
      ]
    }
  },
  methods: {
    back() {
      this.$store.commit("Address");
    },
     onAdd() {
      Toast('新增地址');
    },

    onEdit(item, index) {
      Toast('编辑地址:' + index);
    }
  }
};
</script>
<style lang="less" scoped>
.van-address-list{
  margin-bottom: 100px;
}
.newAdress {
  width: 100%;
  height: 100%;
  // position: absolute;
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
    span {
      color: #f5efef;
      font-size: 12px;
    }
  }
  .adressList{
      width: 100%;
      height: 100px;
      border-bottom: 1px solid #ccc;
      padding: 15px 0;
      .top{
          width: 100%;
          font-size: 18px;
          height: 30px;
          .name{
              width: 50%;
              text-align: left;
              float: left;
              padding-left: 20px;
          }
          .tel{
              width: 50%;
              float: left;
              text-align: right;
              padding-right: 20px;
          }
      }
      .bottom{
          clear: both;
          width: 100%;
          height: 50px;
          padding: 5px 20px;
          overflow: hidden;
          font-size: 14px;
          color: rgb(151, 148, 148);
      }
  }
}
</style>
