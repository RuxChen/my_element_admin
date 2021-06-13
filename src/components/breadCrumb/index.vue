<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item>首页</el-breadcrumb-item>
      <el-breadcrumb-item
        v-for="(item, index) in levelList" :key="index"
      >
        <router-link 
          :to="{ path: item.path }"
        >
          {{item.meta.title}}
        </router-link>
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
  
export default {
  name: 'breadCrumb',
  data() {
    return {
      levelList: []
    }
  },
  watch: {
    $route() {
      console.log('breadcrumb', this.$route.matched)
      this.getBreadcrumb()
    }
  },
  mounted() {
    this.getBreadcrumb()
  },
  methods: {
    getBreadcrumb() {
      this.levelList = []
      let matched = this.$route.matched.filter(item => item.meta && item.meta.title)
      const first = matched[0]
      matched.shift()

      console.log('getBreadcrumb', matched)
      matched.forEach(item => {
        this.levelList.push({
          path: item.path,
          meta: {
            title: item.meta.title
          }
        })
      });
      
    }
  },
};
</script>

<style lang="less" scoped>

</style>