<template>
  <div class="layout_wrapper">
    <el-container class="layout_outer">
      <el-header class="header_wrapper">
        Header
      </el-header>
      <el-container>
        <el-aside class="aside_wrapper" width="250px">
          <sideMenu :routerList="route"></sideMenu>
        </el-aside>
        <el-container>
          <el-main class="main_wrapper">
            <div style="background-color: #fff; border: 1px solid #eee; padding: 10px;">
              <bread-crumb></bread-crumb>
            </div>
            <div style="background-color: #fff; border: 1px solid #eee;">
              <tags-view></tags-view>
            </div>
            <appMain></appMain>
            <div style="display:block; height: 100%; background-color: #fff;">
            </div>
            <!-- <router-view></router-view> -->
          </el-main>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import sideMenu from '@/components/sideMenu/index'
import tagsView from '@/components/tabs/tagsView'
import breadCrumb from '@/components/breadCrumb/index'
import appMain from './appMain'

export default {
  components: {
    sideMenu,
    appMain,
    tagsView,
    breadCrumb
  },
  data() {
    return {
      route: [
        {
          path: '/index',
          title: '首页',
          name: '0',
        },
        {
          path: '/menu',
          meta: { title: '1111' },
          title: '菜单1',
          name: 'a2',
          children: [
            {
              path: '/menu/b',
              meta: { title: '1111' },
              title: '1-1',
              name: 'b',
            },
            {
              path: '/menu/c',
              meta: { title: '2222' },
              title: '1-2',
              name: 'c'
            }
          ]
        },
        {
          path: '/d',
          meta: { title: '1111' },
          title: '菜单2',
          name: '菜单2'
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
  .layout_wrapper {
    height: 100%;;

    .header_wrapper{
      height: 200px;
    }
  }
  .layout_outer {
    height: 100%;
  }
  * {
    padding: 0;
    margin: 0;
  }
  .el-header, .el-footer {
    height: 100%;
    background-color: #304156;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    height: 100%;
  background-color: #304156;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    height: 100%;
    padding: 0;
    background-color: #304156;
    color: #333;
  }

</style>