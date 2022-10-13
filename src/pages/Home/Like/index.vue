<template>
  <!-- 猜你喜欢 -->
  <div class="like">
    <div class="py-container">
      <div class="title">
        <h3 class="fl">猜你喜欢</h3>
        <a href="javascript:;" class="fr tip changeBnt">&nbsp;&nbsp;换一换</a>
      </div>
      <div class="bd">
        <ul class="favourate">
          <li>
            <img src="./images/like_02.png" alt="" />
            <div class="like-text">
              <p>阳光美包新款单肩包女包时尚子母包四件套女</p>
              <h3>¥116.00</h3>
            </div>
          </li>
          <li>
            <img src="./images/like_03.png" alt="" />
            <div class="like-text">
              <p>阳光美包新款单肩包女包时尚子母包四件套女</p>
              <h3>¥116.00</h3>
            </div>
          </li>
          <li>
            <img src="./images/like_01.png" alt="" />
            <div class="like-text">
              <p>阳光美包新款单肩包女包时尚子母包四件套女</p>
              <h3>¥116.00</h3>
            </div>
          </li>
          <li>
            <img src="./images/like_02.png" alt="" />
            <div class="like-text">
              <p>阳光美包新款单肩包女包时尚子母包四件套女</p>
              <h3>¥116.00</h3>
            </div>
          </li>
          <li>
            <img src="./images/like_03.png" alt="" />
            <div class="like-text">
              <p>阳光美包新款单肩包女包时尚子母包四件套女</p>
              <h3>¥116.00</h3>
            </div>
          </li>
          <li>
            <img src="./images/like_01.png" alt="" />
            <div class="like-text">
              <p>阳光美包新款单肩包女包时尚子母包四件套女</p>
              <h3>¥116.00</h3>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
.like {
  margin-top: 15px;

  .py-container {
    width: 1000px;
    margin: 0 auto;

    .title {
      overflow: hidden;

      .fl {
        float: left;
        font-size: 20px;
        line-height: 30px;
      }

      .fr {
        float: right;
        background-image: url(./images/icons.png);
        background-position: 182px -105px;

        width: 70px;
        height: 25px;
        line-height: 25px;
        text-align: start;
        font-size: 12px;
        font-weight: 400;
        color: #666;

        span {
          display: block;
          height: 25px;
          line-height: 30px;
        }
      }
    }

    .bd {
      .favourate {
        width: 100%;
        box-sizing: border-box;
        border: 1px solid #e4e4e4;
        overflow: hidden;

        display: flex;
        justify-content: space-between;

        li {
          height: 250px;
          // margin: 0 -1px;
          overflow: hidden;
          background: #fff;
          width: 16.667%;

          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;

          cursor: pointer;

          img {
            width: 90%;
            transition: all 400ms;

            &:hover {
              opacity: 0.8;
              transform: scale(1.1);
            }
          }

          .like-text {
            width: 100%;
            box-sizing: border-box;
            border-right: 1px solid #e4e4e4;

            p {
              width: 95%;
              text-align: center;
              margin: 5px auto;
            }

            h3 {
              color: #df3033;
              font-size: 20px;
              line-height: 30px;
              margin: 9px 0;
              font-weight: 700;
            }
          }
        }
      }
    }
  }
}
</style>
