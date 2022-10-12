import { reqCategoryList } from '@/api'

// home模块仓库
const state = {
  categoryList:[]
}
const mutations = {
  CATEGORYLIST(state:any, categoryList:any){
    state.categoryList = categoryList
  }
};
const actions = {
  async categoryList({ commit }){
    let result = await reqCategoryList();
    if (result.code === 200) {
      commit('CATEGORYLIST', result.data)
    }
    console.log(result);
  }
};
const getters = {};
export default {
  state,
  mutations,
  actions,
  getters
}
