<template>
  <!--楼层-->
  <div class="floor">
    <div class="py-container">
      <div class="title clearfix">
        <h3 class="fl">家用电器</h3>
        <div class="fr">
          <ul class="nav-tabs clearfix">
            <li class="active">
              <a href="#tab1" data-toggle="tab">热门</a>
            </li>
            <li>
              <a href="#tab2" data-toggle="tab">大家电</a>
            </li>
            <li>
              <a href="#tab3" data-toggle="tab">生活电器</a>
            </li>
            <li>
              <a href="#tab4" data-toggle="tab">厨房电器</a>
            </li>
            <li>
              <a href="#tab5" data-toggle="tab">应季电器</a>
            </li>
            <li>
              <a href="#tab6" data-toggle="tab">空气/净水</a>
            </li>
            <li>
              <a href="#tab7" data-toggle="tab">高端电器</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="tab-content">
        <div class="tab-pane">
          <div class="floor-1">
            <div class="blockgary">
              <ul class="jd-list">
                <li>节能补贴</li>
                <li>4K电视</li>
                <li>空气净化器</li>
                <li>IH电饭煲</li>
                <li>滚筒洗衣机</li>
                <li>电热水器</li>
              </ul>
              <img src="./images/floor-1-1.png" />
            </div>
            <div class="floorBanner">
              <mySwiper :banner-items="imgPaths"></mySwiper>
            </div>
            <div class="split">
              <span class="floor-x-line"></span>
              <div class="floor-conver-pit">
                <img src="./images/floor-1-2.png" />
              </div>
              <div class="floor-conver-pit">
                <img src="./images/floor-1-3.png" />
              </div>
            </div>
            <div class="split center">
              <img src="./images/floor-1-4.png" />
            </div>
            <div class="split">
              <span class="floor-x-line"></span>
              <div class="floor-conver-pit">
                <img src="./images/floor-1-5.png" />
              </div>
              <div class="floor-conver-pit">
                <img src="./images/floor-1-6.png" />
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
const imgPaths = [
  {
    img:
      'src/pages/Home/floor/images/floor-1-b01.png',
    link: 'home'
  },
  {
    img:
      'src/pages/Home/floor/images/floor-1-b02.png',
    link: 'home'
  },
  {
    img:
      'src/pages/Home/floor/images/floor-1-b03.png',
    link: 'home'
  },
]
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
