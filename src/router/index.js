import Vue from 'vue'
import Router from 'vue-router'

const homePage = r => require.ensure([], () => r(require('@/view/homePage')), 'homePage');
//测试
const testPage = r => require.ensure([], () => r(require('@/view/testPage/testPage')), 'homePage');
//DAXB
const daxb = r => require.ensure([], () => r(require('@/view/DAXB/daxb')), 'DAXB');
//写着玩
const test1 = r => require.ensure([], () => r(require('@/view/testPage/test1')), 'adf');

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'homePage',
      component: homePage
    },
    {
      path: '/DAXB',
      name: 'daxb',
      component: daxb
    },
    {
      path: '/testPage',
      name: 'testPage',
      component: testPage
    },
    {
      path: '/test1',
      name: 'test1',
      component: test1
    },

  ]
})
