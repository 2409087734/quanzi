import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Login from '@/views/Login'
import Zhuce from '@/views/Zhuce'
import Quanzi from '@/views/Quanzi'
import My from '@/views/My'
import Xinxi from '@/views/my/Xinxi'
import Myping from '@/views/my/Myping'
import Shoucang from '@/views/my/Shoucang'
import Change from '@/views/my/Change'
import Shou from '@/views/my/Shou'
import Taren from '@/views/my/Taren'
import Bianji from '@/views/my/Bianji'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path:"/",
      redirect:"/login",
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/zhuce',
      name: 'Zhuce',
      component: Zhuce
    }, 
    {
      path: '/home',
      name: 'Home',
      component: Home,
      redirect:"/home/quanzi",
      children:[
        {
          path: 'quanzi',
          name: 'Quanzi',
          component: Quanzi
        },
        {
          path: 'my',
          name: 'My',
          component: My,
        }
      ]
    },
    {
      path: '/xinxi',
      name: 'Xinxi',
      component: Xinxi
    }, 
    {
      path: '/myping',
      name: 'Myping',
      component: Myping,
      redirect:"/myping/shou",
      children:[
        {
          path:"shou",
          component:Shou
        },
        {
          path:"taren",
          component:Taren
        }
      ]
    }, 
    {
      path: '/shoucang',
      name: 'Shoucang',
      component: Shoucang
    }, 
    {
      path: '/change',
      name: 'Change',
      component: Change
    }, 
    {
      path: '/bianji',
      name: 'Bianji',
      component: Bianji
    }, 
   

  ]
})
