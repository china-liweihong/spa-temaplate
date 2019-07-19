<template>
 <div class="page home">
   <router-view></router-view>
   <van-tabbar
     v-model="active"
     active-color="#ff873e"
     inactive-color="#666"
     class="home-nav-bar">
     <van-tabbar-item
       to="/index"
       name="index"
       class="nav-bar-item">
       <van-icon slot="icon" name="home-o" class="nav-bar-icon"/>
       <span>首页</span>
     </van-tabbar-item>
     <van-tabbar-item
       to="/mall"
       name="mall"
       class="nav-bar-item">
       <van-icon
         slot="icon"
         name="cart-o"
         class="nav-bar-icon"
       />
       <span>商城</span>
     </van-tabbar-item>
     <van-tabbar-item
       to="/CBD"
       name="CBD"
       class="nav-bar-item">
       <van-icon
         slot="icon"
         name="shop-o"
         class="nav-bar-icon"
       />
       <span>商圈</span>
     </van-tabbar-item>
     <van-tabbar-item
       to="/member"
       name="member"
       class="nav-bar-item">
       <van-icon
         slot="icon"
         name="user-o"
         class="nav-bar-icon"/>
       <span>我的</span>
     </van-tabbar-item>
   </van-tabbar>
 </div>
</template>

<script>
  export default {
    name: "Home",
    data(){
      return  {
        active: 'index',
      };
    },
    created() {
      this.active = this.$route.name;
    }
  };
</script>

<style lang="less" scoped>
  .page.home{
    .home-nav-bar{
      height: 90px;
      border-top: 1PX solid #f0f0f0;
      .nav-bar-item{
        cursor: pointer;
        /deep/ .van-tabbar-item__icon{
          font-size: .5rem
        }
      }
    }
  }
</style>
