<template>
  <!--商标-->
  <div class="brand">
    <div class="py-container">
      <ul class="brand-list">
        <li class="brand-item">
          <img src="./images/brand_21.png" />
        </li>
        <li class="brand-item">
          <img src="./images/brand_03.png" />
        </li>
        <li class="brand-item">
          <img src="./images/brand_05.png" />
        </li>
        <li class="brand-item">
          <img src="./images/brand_07.png" />
        </li>
        <li class="brand-item">
          <img src="./images/brand_09.png" />
        </li>
        <li class="brand-item">
          <img src="./images/brand_11.png" />
        </li>
        <li class="brand-item">
          <img src="./images/brand_13.png" />
        </li>
        <li class="brand-item">
          <img src="./images/brand_15.png" />
        </li>
        <li class="brand-item">
          <img src="./images/brand_17.png" />
        </li>
        <li class="brand-item">
          <img src="./images/brand_19.png" />
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup lang="ts">

</script>
<style lang="scss">
.brand {
  margin: 10px 0;

  .py-container {
    width: 1000px;
    margin: 0 auto;

    .brand-list {
      overflow: hidden;
      padding: 15px 0;
      background: #f7f7f7;
      line-height: 18px;

      display: flex;
      justify-content: space-between;

      .brand-item {
        width: 10%;
        height: 37px;
        border-left: 1px dotted #ccc;

        img {
          width: 90%;
        }

        &:first-child {
          img {
            border-left: 0;
          }
        }
      }
    }
  }
}
</style>
