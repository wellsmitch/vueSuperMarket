<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view :class="transitionAction"/>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        transitionName: '',
        transitionAction: 'transitionAction',
        backHistory: false //路由是否返回
      }
    },
    mounted() {
      if (window.history && window.history.pushState) {
        // history.pushState(null, null, document.URL);
        window.addEventListener('popstate', this.cancel, false);
      }
    },
    methods: {
      cancel() {
        this.transitionName = 'slide-right';
        this.backHistory = true;
        // console.log("cancel执行了");
      }
    },
    watch: {
      '$route'(to, from) {
        let indexArr = ["cart", "cagetory", "myCenter","index"];
        if (this.backHistory) { //路由返回
          if(from.name === "index") { // index 的返回
            this.transitionName = 'fade';
            this.$router.replace({
              path: "/index",
              name: "index"
            }).catch(function () {});
            this.backHistory = false;
          }else {
            console.log(indexArr.indexOf(from.name));
            if (indexArr.indexOf(from.name) > -1) { // 从首页tab返回index
              this.transitionName = 'fade';
              this.$router.replace({
                path: "/index",
                name: "index"
              }).catch(function () {});
              this.backHistory = false;
            } else { // 从非首页tab返回首页tab
              this.transitionName = 'slide-right';
              this.backHistory = false;
            }
          }
        } else { // 路由前进
          // 首页菜单来回跳转
          if (indexArr.indexOf(to.name) > -1) { // 首页路由前进
            this.transitionName = 'fade';
          } else { //非首页路由前进
            this.transitionName = 'slide-left';
          }
        }
        // console.log("isHastory:"+ this.backHistory);

        /* let isBack = this.$router.isBack;
         // alert(isBack)
         if (isBack) {
           this.transitionName = 'slide-right';
         } else{
           // alert(window.slider)
           //  if(window.slider){
           //  this.transitionName = 'slide-right';
           //  window.slider = false;
           //  }else{
           this.transitionName = 'slide-left';
           //  }
         }
         this.$router.isBack = false*/
      }
    }
  }
</script>

<style lang="scss">
  @import "base/css/base";

  .transitionAction {
    position: absolute;
    height: 100%;
    width: 100%;
    transition: all .5s cubic-bezier(.55, 0, .1, 1);
  }

  .slide-right-enter, .slide-left-leave-active {
    /*opacity: 0;*/
    -webkit-transform: translate(-100vw, 0);
    transform: translate(-100vw, 0);
  }

  .slide-left-enter, .slide-right-leave-active {
    -webkit-transform: translate(100vw, 0);
    transform: translate(100vw, 0);
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }

  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
  {
    opacity: 0;
  }
</style>
