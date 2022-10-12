import { createStore } from "vuex";

// 引入各个小仓库
import home from './home'
import search from './search'

export default createStore({
  modules: {
    home,
    search
  }
});
