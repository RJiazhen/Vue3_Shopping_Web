<template>
  <!-- 商品分类导航 -->
  <div class="type-nav">
    <div class="container ">
      <div class="sort focus-heigh">
        <div class="all-sort-list2" @click="toSearch">
          <!-- 一级分类 -->
          <div class="item" v-for="(c1, index) in home.categoryList" :key="c1.categoryId"
            v-on:mouseenter="mouseEnter(c1.categoryId)" v-on:mouseleave="mouseLeave()">
            <h3>
              <a :data-categoryname="c1.categoryName" :data-category1Id="c1.categoryId">{{ c1.categoryName }}</a>
            </h3>
            <div class="item-list clearfix" v-show="hoverId === c1.categoryId"
              v-on:mouseenter="mouseEnter(c1.categoryId)" v-on:mouseleave="mouseLeave()">
              <div class="subitem" v-for="(c2, index) in c1.categoryChild" :key="c2.categoryId">
                <dl class="fore">
                  <dt>
                    <a :data-categoryname="c1.categoryName" :data-category2Id="c2.categoryId">{{ c2.categoryName }}</a>
                  </dt>
                  <dd>
                    <em v-for="(c3, index) in c2.categoryChild" :key="c3.categoryId">
                      <a :data-categoryname="c1.categoryName" :data-category3Id="c3.categoryId">{{ c3.categoryName }}</a>
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
</template>
src/pages/Home/TypeNav/index.vue
<script setup lang="ts">
import { onBeforeMount, ref } from "vue"
import { useHome } from "@/stores/home"
import _ from "lodash"
import {useRoute, useRouter} from "vue-router"

const home = useHome()

// 挂载时获取轮播图内容
onBeforeMount(() => {
  home.getCategoryList()
})

// 鼠标悬停显示菜单
let hoverId = ref(0)
const mouseEnter = _.debounce((categoryId: number) => {
  hoverId.value = categoryId
}, 100)
const mouseLeave = _.debounce(() => {
  hoverId.value = 0
}, 100)

// 跳转到Search路由
const router = useRouter()
const route = useRoute()
function toSearch(event) {
  let targetNode = event.target;
  console.log(targetNode.dataset);
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
.type-nav {

  .container {
    width: 1000px;
    margin: 0 auto;
    position: relative;

    .sort {
      position: absolute;
      left: 0;

      box-sizing: border-box;
      width: 200px;
      padding: 10px 0;

      background: #fff;
      z-index: 999;

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
            top: 0;
            left: 200px;

            width: 734px;
            min-height: var(--h);

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

          // &:hover {
          //   .item-list {
          //     display: block;
          //   }
          // }
        }
      }
    }
  }
}
</style>
