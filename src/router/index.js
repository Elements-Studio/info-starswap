import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

export const constantRoutes = [
  {
    path: '/', // 主页
    component: () => import('@/views/home/index'),
    hidden: true,
  },
  {
    path: '/test', // 测试
    component: () => import('@/views/test/index'),
    hidden: true,
  },
  {
    path: '/home', // 主页
    component: () => import('@/views/home/index'),
    hidden: true,
  },
  {
    path: '/pools', // pools
    component: () => import('@/views/home/pools'),
    hidden: true,
  },
  {
    path: '/poolsDetail', // poolsDetail
    component: () => import('@/views/home/poolsDetail'),
    hidden: true,
  },
  {
    path: '/tokensDetail', // poolsDetail
    component: () => import('@/views/home/tokensDetail'),
    hidden: true,
  },
  {
    path: '/tokens', // token
    component: () => import('@/views/home/tokens'),
    hidden: true,
  },
  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true,
  },
  {
    path: '/',
    component: Layout,
    redirect: '/page1',
    children: [
      {
        path: 'page1',
        name: 'page1name',
        component: () => import('@/views/dashboard/page1'),
      },
    ],
  },

  // 统一用户管理
  {
    path: '/admin',
    component: Layout,
    redirect: '/admin',
    name: '统一用户管理',
    meta: { title: '统一用户管理', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'user',
        name: '用户管理',
        component: () => import('@/views/admin/user/index'),
        meta: { title: '用户管理', icon: 'table' },
      },
      {
        path: 'role',
        name: '角色管理',
        component: () => import('@/views/admin/role/index'),
        meta: { title: '角色管理', icon: 'tree' },
      },
    ],
  },
  // 用户管理-查看
  // {
  //   path: '/admin/user',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'view',
  //       name: 'viewUser',
  //       component: () => import('@/views/admin/user/check'),
  //     },
  //   ],
  // },
  // 用户管理-编辑
  {
    path: '/admin/user',
    component: Layout,
    children: [
      {
        path: 'edit',
        name: 'viewUser',
        component: () => import('@/views/admin/user/edit'),
      },
    ],
  },
  // {
  //   path: 'external-link',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'https://panjiachen.github.io/vue-element-admin-site/#/',
  //       meta: { title: 'External Link', icon: 'link' }
  //     }
  //   ]
  // },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true },
]

const createRouter = () =>
  new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes,
  })

const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
