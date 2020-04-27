<template>
  <div>
    TabMenus replace
    <van-tabbar route v-model="active">
      <van-tabbar-item  to="/index" name="index" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item  :to="{path:'/cagetory',query:{a:890}}" name="cagetory" icon="search">分类</van-tabbar-item>
      <van-tabbar-item  to="/cart" name="cart" icon="friends-o">购物车</van-tabbar-item>
      <van-tabbar-item  to="/myCenter" name="myCenter" icon="setting-o">
        <span>我的</span>
        <img
          slot="icon"
          slot-scope="props"
          :src="props.active ? '../../../static/user-active.png' : icon.inactive"
        >
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
  export default {
    name: "TabMenus",
    data() {
      return {
        active: 'home',
        icon: {
          active: 'im',
          inactive: 'https://img.yzcdn.cn/vant/user-inactive.png'
        }
      }
    }
  }
</script>

<style scoped>

</style>
