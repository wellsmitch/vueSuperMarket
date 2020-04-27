import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Router.prototype.goBack = function () {
  this.isBack = true;
  window.history.go(-1)
};

Vue.use(Router);


let router = new Router({
  routes: [
        {
          path: '/',
          name: 'HelloWorld',
          component: HelloWorld
        },
    {
      path: '/index',
      name: 'index',
      component: (resolve) => require(['@/components/index'], resolve)
    },
    {
      path: '/cagetory',
      name: 'cagetory',
      component: (resolve) => require(['@/components/cagetory'], resolve)
    },
    {
      path: '/list',
      name: 'list',
      component: (resolve) => require(['@/components/list'], resolve)
    },
    {
      path: '/cart',
      name: 'cart',
      component: (resolve) => require(['@/components/cart'], resolve)
    },
    {
      path: '/myCenter',
      name: 'myCenter',
      component: (resolve) => require(['@/components/myCenter'], resolve)
    },
    {
      path: '*',
      redirect: '/index'
    }
  ]
});

router.beforeEach((to, from, next) => {
  next()
});


export default router;
