<template>
  <div class="tags-view-container">
    <scroll-pane class="tags-view-wrapper">
      <router-link 
        ref="tag" class="tags-view-item"
        v-for="tag in Array.from(visitedViews)" :key="tag.path"
        :to="tag.path" :class="isActive(tag) ? 'tagActive' : ''"
      >
        {{tag.meta.title}}
        <span
          class="el-icon-close"
          @click.prevent.stop="closeSelectedTag(tag)"
        ></span>
      </router-link>
    </scroll-pane>
  </div>
</template>

<script>
import scrollPane from '@/components/tabs/scrollPane'

export default {
  name: 'tags-view',
  components: {
    scrollPane
  },
  data() {
    return {
      
    };
  },
  computed: {
    visitedViews() {
      return this.$store.state.tagsView.visitedViews
    }
  },
  watch: {
    $route() {
      this.addViewTags()
    }
  },
  mounted() {
    this.addViewTags()
  },
  methods: {
    generateRoute(){
      if(this.$route.name) {
        return this.$route
      }
      return false
    },
    addViewTags() {
      const route = this.generateRoute()
      // console.log('iiii', route)
      if(!route) {
        return false
      }
      this.$store.dispatch('addVisitedViews', route)
    },
    isActive(route) {
      return route.path === this.$route.path
    },
    closeSelectedTag(view) {
      console.log('closeSelectedTag_0')
      this.$store.dispatch('delVisitedViews', view).then(views => {
        console.log('closeSelectedTag_1')
        const latestView = views.slice(-1)[0]
        if (latestView) {
          this.$router.push(latestView)
        } else {
          this.$router.push('/')
        }
      })
    }
  },
};
</script>

<style lang="less" scoped>
  .tags-view-container {
    position: relative;
    width: 100%;
    height: 40px;

    .tags-view-wrapper {
      position: relative;
      top: 50%;
      transform: translateY(-50%);

      .tags-view-item {
        display: absolute;
        width: 100%;
        height: 100%;
        margin: 0 5px;
        padding: 5px;
        border: 1px solid green;
      }
    }

    .tagActive {
      border: 1px solid blue;
      background-color: #fff;
      color: red;
    }
  }
</style>