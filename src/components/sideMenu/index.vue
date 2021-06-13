<template>
  <div style="width:100%;">
    <el-menu width="300" router unique-opened>
      <template v-for="item in routerList">
        <re-submenu 
          v-if="item.children" 
          :item="item"
        ></re-submenu>
        <el-menu-item v-else :key="item.path" :index="item.path">
          <span slot="title">
            {{item.title}}a
            {{item.path}}
          </span>
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<script>
import reSubmenu from './re-submenu.vue'
export default {
  name: 'sideMenu',
  components: {
    reSubmenu
  },
  props: {
    routerList: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style>

</style>