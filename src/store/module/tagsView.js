const state = {
  visitedViews: [],
  cachedViews: []
}

const getters = {

}

const actions = {
  addVisitedViews({commit}, view) {
    commit('ADD_VISITED_VIEWS', view)
  },
  delVisitedViews({commit, state}, view) {
    return new Promise((resolve) => {
      commit('DEL_VISITED_VIEWS', view)
      // commit是同步的，所以可以通过resolve返回改变后的state
      resolve([...state.visitedViews])
    })
  }
}

const mutations = {
  ADD_VISITED_VIEWS: (state, view) => {
    // 
    if(state.visitedViews.some(v => v.path === view.path)) return
    // 
    state.visitedViews.push(Object.assign({}, view, {
      title: view.meta.title || 'no-name'
    }))
    // 
    if(!view.meta.noCache) {
      state.cachedViews.push(view.name)
    }
  },
  DEL_VISITED_VIEWS: (state, view) => {
    for(const [i, v] of state.visitedViews.entries()) {
      if(v.path === view.path) {
        state.visitedViews.splice(i, 1)
        break
      }
    }

    for(const i of state.cachedViews) {
      if(i === view.name) {
        const index = state.cachedViews.indexOf(i) 
        state.cachedViews.splice(index, 1)
        break
      }
    }
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}