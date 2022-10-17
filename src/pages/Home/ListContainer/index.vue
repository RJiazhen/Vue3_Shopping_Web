<template>
  <!--列表-->
  <div class="list-container ">
    <div class="sortList clearfix focus-heigh">
      <div class="center">
        <mySwiper :banner-items="imgPaths"></mySwiper>
      </div>
      <div class="right">
        <div class="news">
          <h4>
            <em class="fl">京东快报</em>
            <span class="fr tip">更多 ></span>
          </h4>
          <div class="clearix"></div>
          <ul class="news-list unstyled">
            <li>
              <span class="highlight">热门</span><a>重新定义旗舰处理器，AMD锐龙9 7950X究竟有多强</a>
            </li>
            <li>
              <span class="highlight">最新</span><a>备战开学季 全民半价购数码</a>
            </li>
            <li>
              <span class="highlight">热评</span>备战开学季 全民半价购数码
            </li>
            <li>
              <span class="highlight">HOT</span>备战开学季 全民半价购数码
            </li>
          </ul>
        </div>
        <ul class="lifeservices">
          <li class=" life-item ">
            <i class="list-item"></i>
            <span class="service-intro">话费</span>
          </li>
          <li class=" life-item ">
            <i class="list-item"></i>
            <span class="service-intro">机票</span>
          </li>
          <li class=" life-item ">
            <i class="list-item"></i>
            <span class="service-intro">电影票</span>
          </li>
          <li class=" life-item ">
            <i class="list-item"></i>
            <span class="service-intro">游戏</span>
          </li>
          <li class=" life-item">
            <i class="list-item"></i>
            <span class="service-intro">彩票</span>
          </li>
          <li class=" life-item">
            <i class="list-item"></i>
            <span class="service-intro">加油站</span>
          </li>
          <li class=" life-item">
            <i class="list-item"></i>
            <span class="service-intro">酒店</span>
          </li>
          <li class=" life-item">
            <i class="list-item"></i>
            <span class="service-intro">火车票</span>
          </li>
          <li class=" life-item ">
            <i class="list-item"></i>
            <span class="service-intro">众筹</span>
          </li>
          <li class=" life-item">
            <i class="list-item"></i>
            <span class="service-intro">理财</span>
          </li>
          <li class=" life-item">
            <i class="list-item"></i>
            <span class="service-intro">礼品卡</span>
          </li>
          <li class=" life-item">
            <i class="list-item"></i>
            <span class="service-intro">白条</span>
          </li>
        </ul>
        <div class="ads">
          <img src="./images/ad1.png" />
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
      'src/pages/Home/listContainer/images/banner1.jpg',
    link: 'home'
  },
  {
    img:
      'src/pages/Home/listContainer/images/banner2.jpg',
    link: 'home'
  },
  {
    img:
      'src/pages/Home/listContainer/images/banner3.jpg',
    link: 'home'
  },
  {
    img:
      'src/pages/Home/listContainer/images/banner4.jpg',
    link: 'home'
  }
]
</script>

<style lang="scss">
.list-container {
  width: 1000px;
  margin: 0 auto;

  .sortList {
    padding-left: 200px;
    display: flex;
    flex-wrap: nowrap;

    .center {
      box-sizing: border-box;
      width: 590px;
      height: 100%;

      margin-left: 10px;

      .slide-img {
        width: 590px;

        img {
          object-fit: cover;
          width: 100%;
          height: 100%;

        }
      }

    }

    .right {
      width: 190px;
      height: 100%;
      margin-left: 10px;
      background-color: #fff;

      .news {
        border: 1px solid #e4e4e4;
        height: 145px;

        h4 {
          border-bottom: 1px solid #e4e4e4;
          padding: 5px 10px;
          margin: 5px 5px 0;
          line-height: 22px;
          overflow: hidden;
          font-size: 14px;

          .fl {
            float: left;
          }

          .fr {
            float: right;
            font-size: 12px;
            font-weight: 400;
          }
        }

        .news-list {
          padding: 5px 15px;
          line-height: 26px;

          li {
            height: 25px;
            width: 170px;

            // 多的文字变成省略号
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;

            .highlight {
              margin-right: 5px;
              background-color: #FDEEED;
              color: #E62588;
              border: #FDEEED 3px solid;
            }
          }
        }
      }

      .lifeservices {
        height: 200px;
        border-right: 1px solid #e4e4e4;
        overflow: hidden;
        display: flex;
        flex-wrap: wrap;

        .life-item {
          border-left: 1px solid #e4e4e4;
          border-bottom: 1px solid #e4e4e4;
          margin-right: -1px;
          height: 64px;
          text-align: center;
          position: relative;
          cursor: pointer;
          width: 25%;

          .list-item {
            background-image: url(./images/icons.png);
            width: 100%;
            height: 40px;
            display: block;
          }

          .service-intro {
            line-height: 22px;
            width: 100%;
            display: block;
          }

          &:nth-child(1) {
            .list-item {
              background-position: -5px -5px;
            }
          }

          &:nth-child(2) {
            .list-item {
              background-position: -70px -5px;
            }
          }

          &:nth-child(3) {
            .list-item {
              background-position: -135px -5px;
            }
          }

          &:nth-child(4) {
            .list-item {
              background-position: -197px -5px;
            }
          }

          &:nth-child(5) {
            .list-item {
              background-position: -5px -76px;
            }
          }

          &:nth-child(6) {
            .list-item {
              background-position: -70px -76px;
            }
          }

          &:nth-child(7) {
            .list-item {
              background-position: -135px -76px;
            }
          }

          &:nth-child(8) {
            .list-item {
              background-position: -197px -76px;
            }
          }

          &:nth-child(9) {
            .list-item {
              background-position: -5px -146px;
            }
          }

          &:nth-child(10) {
            .list-item {
              background-position: -70px -146px;
            }
          }

          &:nth-child(11) {
            .list-item {
              background-position: -135px -142px;
            }
          }

          &:nth-child(12) {
            .list-item {
              background-position: -200px -142px;
            }
          }
        }
      }

      .ads {
        width: 100%;
        height: 125px;
        margin-top: 5px;
        overflow: hidden;

        img {
          opacity: 0.8;
          transition: all 400ms;
          width: 95%;
          height: 100%;
          object-fit: cover;


          &:hover {
            opacity: 1;
          }
        }
      }
    }
  }
}
</style>
