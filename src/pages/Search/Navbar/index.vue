<template>
  <div class="sui-navbar">
    <div class="navbar-inner filter">
      <ul class="sui-nav">
        <li class="active">
          <a href="#">综合</a>
        </li>
        <li>
          <a href="#">销量</a>
        </li>
        <li>
          <a href="#">新品</a>
        </li>
        <li>
          <a href="#">评价</a>
        </li>
        <li>
          <a href="#">价格⬆</a>
        </li>
        <li>
          <a href="#">价格⬇</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss">
.sui-navbar {
  overflow: visible;
  margin-bottom: 0;

  .filter {
    min-height: 40px;
    padding-right: 20px;
    background: #fbfbfb;
    border: 1px solid #e2e2e2;
    padding-left: 0;
    border-radius: 0;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.065);

    .sui-nav {
      position: relative;
      left: 0;
      display: block;
      float: left;
      margin: 0 10px 0 0;

      li {
        float: left;
        line-height: 18px;

        a {
          display: block;
          cursor: pointer;
          padding: 11px 15px;
          color: #777;
          text-decoration: none;
        }

        &.active {
          a {
            background: #e1251b;
            color: #fff;
          }
        }
      }
    }
  }
}
</style>
