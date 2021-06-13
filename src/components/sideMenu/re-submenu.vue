<template>
  <el-submenu :key="item.path" :index="item.path">
    <template slot="title">
      {{item.title}}b
      {{item.path}}
    </template>
    <template v-for="i in item.children" >
      <re-submenu 
        v-if="i.children" 
        :item="i"
      ></re-submenu>
      <el-menu-item v-else style="padding-left:60px;" :key="i.path" :index="i.path" >
        {{i.title}}-
        {{i.path}}
        <!-- <el-menu-item>{{i.title}}c</el-menu-item> -->
      </el-menu-item>
    </template>
  </el-submenu>
</template>

<script>
export default {
  name: 'reSubmenu',
  props: {
    item: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style>
</style>