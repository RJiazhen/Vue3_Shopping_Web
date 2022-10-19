<template>
  <!--楼层-->
  <div class="floor">
    <div class="py-container">
      <div class="title clearfix">
        <!-- 楼层名称 -->
        <h3 class="fl">{{props.floorInfo.name}}</h3>
        <!-- 楼层顶部右侧标签 -->
        <div class="fr">
          <ul class="nav-tabs clearfix">
            <li class="active" v-for="(tab, index) in props.floorInfo.navList" :key="index">
              <a :href="tab.url" data-toggle="tab">{{tab.text}}</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="tab-content">
        <div class="tab-pane">
          <div class="floor-1">
            <!-- 最左侧栏位 -->
            <div class="blockgary">
              <ul class="jd-list">
                <li v-for="(keyword, index) in props.floorInfo.keywords" :key="index">{{keyword}}</li>
              </ul>
              <img :src="props.floorInfo.imgUrl" />
            </div>
            <!-- 轮播图 -->
            <div class="floorBanner">
              <mySwiper :banner-items="props.floorInfo.carouselList"></mySwiper>
            </div>
            <!-- 右侧区域 -->
            <div class="split">
              <span class="floor-x-line"></span>
              <div class="floor-conver-pit">
                <img :src="props.floorInfo.recommendList[0]" />
              </div>
              <div class="floor-conver-pit">
                <img :src="props.floorInfo.recommendList[1]" />
              </div>
            </div>
            <div class="split center">
              <img :src="props.floorInfo.bigImg" />
            </div>
            <div class="split">
              <span class="floor-x-line"></span>
              <div class="floor-conver-pit">
                <img :src="props.floorInfo.recommendList[2]" />
              </div>
              <div class="floor-conver-pit">
                <img :src="props.floorInfo.recommendList[3]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import mySwiper from "@/components/my-swiper/index.vue"

interface floorInfo {
  id: string,
  name: string,
  keywords: Array<string>,
  imgUrl: string,
  navList: Array<object>,
  recommendList: Array<string>,
  bigImg: string,
  carouselList: Array<carouselItem>,
}

const props = defineProps<{
  floorInfo: floorInfo //接受图片地址
}>()

</script>
<style lang="scss">
.floor {
  margin-top: 15px;

  .py-container {
    width: 1000px;
    margin: 0 auto;

    .title {
      .fl {
        float: left;
        color: #c81623;
        font-size: 20px;
        line-height: 30px;
        margin: 9px 0;
        font-weight: 700;
      }

      .fr {
        float: right;

        .nav-tabs {
          margin: 20px 0 0;
          display: inline-block;

          li {
            float: left;
            line-height: 18px;

            a {
              padding-top: 1px;
              font-weight: 400;
              // background-color: #fff;

              &::after {
                content: "|";
                padding: 0 10px;
              }
            }

            &:nth-child(7) {
              a {
                &::after {
                  content: "";
                }
              }
            }
          }
        }
      }
    }

    .tab-content {
      width: 1000px;
      border-top: 2px solid #c81623;
      border-bottom: 1px solid #e4e4e4;

      .tab-pane {
        .floor-1 {
          background-color: #fff;
          height: 360px;
          display: flex;

          .blockgary {
            width: 180px;
            height: 100%;

            // position: relative;

            .jd-list {

              padding: 15px 0;
              overflow: hidden;

              display: flex;
              flex-wrap: wrap;
              justify-content: space-between;

              padding: 0 4px;

              li {
                width: 45%;
                border-bottom: 1px solid #e4e4e4;
                text-align: center;
                line-height: 26px;

                &:nth-child(odd) {
                  margin: 0 4px 0 0;
                }
              }
            }

            img {
              width: 100%;
              transform: translateY(30px);

            }
          }

          .floorBanner {
            width: 330px;
            height: 360px;
          }

          .split {
            width: 160px;
            height: 100%;
            position: relative;

            .floor-x-line {
              background: #e4e4e4;
              width: 160px;
              height: 1px;

              position: absolute;
              top: 50%;
              left: 0;
            }

            .floor-conver-pit {
              width: 160px;
              height: 50%;


              img {
                width: 100%;
                height: auto;
                transition: all 400ms;

                &:hover {
                  opacity: 0.8;
                }
              }
            }
          }

          .center {
            width: 170px;
            border: 1px solid #e4e4e4;

            img {
              width: 100%;
              height: auto;
              transition: all 400ms;

              &:hover {
                opacity: 0.8;
              }
            }
          }
        }
      }
    }
  }
}
</style>
