<template>
  <!-- 商品分类导航 -->
  <div class="type-nav">
    <div class="container ">
      <div class="sort focus-heigh">
        <div class="all-sort-list2">
          <div class="item" v-for="(c1, index) in categoryList" :key:number="c1.categoryId">
            <h3>
              <a href="">{{c1.categoryName}}</a>
            </h3>
            <div class="item-list clearfix">
              <div class="subitem" v-for="(c2, index) in c1.categoryChild" :key="c2.categoryId">
                <dl class="fore">
                  <dt>
                    <a href="">{{c2.categoryName}}</a>
                  </dt>
                  <dd>
                    <em v-for="(c3, index) in c2.categoryChild" :key="c3.categoryId">
                      <a href="">{{c3.categoryName}}</a>
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
<script lang="ts">
import { mapState, mapActions } from "vuex";
export default {
  name: "TypeNav",
  mounted() {
    this.$store.dispatch("categoryList");
    console.log(this.h);
  },
  // h为该区域的高度
  props: ['h'],
  computed: {
    ...mapState({
      categoryList: function (state: any): any {
        return state.home.categoryList
      }
    }),
  },
};
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
            display: none;
            position: absolute;
            top: 0;
            left: 210px;

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

          &:hover {
            .item-list {
              display: block;
            }
          }
        }
      }
    }
  }
}
</style>
