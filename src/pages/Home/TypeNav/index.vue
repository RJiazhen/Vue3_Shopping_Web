<template>
  <!-- 商品分类导航 -->
  <div class="type-nav">
    <div class="container" :class="showText ? 'show-text' : 'not-show-text'">
      <div @click="toSearch" @mouseleave="mouseLeave">
        <a class="text" @mouseenter="toShowTypeNav">全部分类</a>
        <div class="sort focus-heigh" v-show="showTypeNav">
          <div class="all-sort-list2">
            <!-- 一级分类 -->
            <div class="item" v-for="(c1, index) in home.categoryList" :key="c1.categoryId"
              @mouseenter="mouseEnter(c1.categoryId)">
              <h3>
                <a :data-categoryname="c1.categoryName" :data-category1Id="c1.categoryId">{{ c1.categoryName }}</a>
              </h3>
              <div class="item-list clearfix" v-show="hoverId === c1.categoryId"
                @mouseenter="mouseEnter(c1.categoryId)">
                <div class="subitem" v-for="(c2, index) in c1.categoryChild" :key="c2.categoryId">
                  <dl class="fore">
                    <dt>
                      <a :data-categoryname="c1.categoryName" :data-category2Id="c2.categoryId">{{ c2.categoryName
                      }}</a>
                    </dt>
                    <dd>
                      <em v-for="(c3, index) in c2.categoryChild" :key="c3.categoryId">
                        <a :data-categoryname="c1.categoryName" :data-category3Id="c3.categoryId">{{ c3.categoryName
                        }}</a>
                      </em>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
src/pages/Home/TypeNav/index.vue
<script setup lang="ts">
import { onBeforeMount, ref, onMounted } from "vue"
import { useHome } from "@/stores/home"
import _ from "lodash"
import { useRoute, useRouter } from "vue-router"
import { computed } from "@vue/reactivity";

const home = useHome()
const router = useRouter()
const route = useRoute()

// 挂载时获多级菜单内容
onBeforeMount(() => {
  home.getCategoryList()
})

// 控制“全部分类”是否显示
const showText = computed(() => {
  if (route.path !== '/home' && route.path !== '/') {
    return true
  }
  else {
    return false
  }
})


// 控制一级菜单是否显示
let showTypeNav = ref(true)
onMounted(async () => {
  // 注意，在onMounted时router还没处理完初始导航，所以route.path会是默认的"/"
  // 这里使用isReady()等处理完初始导航后再进行后续的处理
  await router.isReady()
  showTypeNav.value = route.path !== '/' ? false : true
})

// 鼠标进入时显示一级菜单
const toShowTypeNav = () => {
  if (route.path != '/') {
    showTypeNav.value = true
  }
}
// 鼠标悬停时显示次级菜单
let hoverId = ref(0)
const mouseEnter = _.debounce((categoryId: number) => {
  hoverId.value = categoryId
}, 100)

// 鼠标离开时
const mouseLeave = _.debounce(() => {
  hoverId.value = 0
  if (route.path != '/') {
    showTypeNav.value = false
  }
}, 300)


// 跳转到Search路由
function toSearch(event) {
  let targetNode = event.target;
  let { categoryname, category1id, category2id, category3id } =
    targetNode.dataset;
  // 只有有categoryname属性才是a标签，才执行后续的跳转
  if (categoryname) {
    var locations = {
      name: "search",
      query: { categoryName: categoryname },
    };
    // 判断是哪一级别的a标签，并且携带对应的categoryid参数
    if (category1id) {
      locations.query.category1Id = category1id;
    } else if (category2id) {
      locations.query.category2Id = category2id;
    } else {
      locations.query.category3Id = category3id;
    }
    //点击商品分类按钮的时候,如果路径当中携带params参数,需要合并传递出去
    if (route.params.keyword) {
      locations.params = route.params;
    }
    router.push(locations);
  }
}

</script>

<style lang="scss">
a {
  cursor: pointer;
}

.type-nav {
  position: absolute;
  top: 0;
  left: 0;


  .container {
    position: absolute;
    width: 1000px;
    top: 10px;
    left: 0;

    .text {
      position: absolute;
      left: 100px;
      top: 97px;

      height: 30px;
      font-size: 15px;
    }

    .sort {

      box-sizing: border-box;
      width: 200px;
      padding: 10px 0;

      background: #fff;
      z-index: 999;

      // 暂时设置一个竖条来填充左侧分类和右侧分类之间的空隙，以防止触发鼠标离开事件
      &::after {
        content: "";
        width: 5px;
        height: 100%;

        position: absolute;
        top: 0;
        right: -5px;
      }

      .all-sort-list2 {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .item {

          h3 {
            text-align: left;
            line-height: 25px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;

              &:hover {
                color: #EA4A36;
              }
            }
          }

          .item-list {
            position: absolute;

            top: -1px; // 只有设置为-1才能和左侧菜单对齐
            left: 200px;

            width: 734px;

            background: #f7f7f7;
            border: 1px solid #ddd;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;

                  a:hover {
                    color: #EA4A36;
                  }

                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;

                    a:hover {
                      color: #EA4A36;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  // 非主页时的显示方式
  .show-text {
    .sort {
      position: absolute;
      left: 30px;
      top: 120px;

      border: 1px solid #ddd;
    }
  }

  // 主页时的显示方式
  .not-show-text {
    .text {
      display: none;
    }

    .sort {
      position: absolute;
      left: 0;
      top: 140px;
    }
  }
}
</style>
