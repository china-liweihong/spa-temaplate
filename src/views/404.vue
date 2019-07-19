<template>
  <div class="page not-found">
    <img class="not-found-img" src="../assets/images/404.jpg" alt="">
    <p>找不到你要访问的页面</p>
  </div>
</template>

<script>
  export default {
    name: "404"
  };
</script>

<style scoped lang="less">
  .page.not-found{
    text-align: center;
    .not-found-img{
      display: block;
      width: 100%;
      margin-top: 30%;
    }
  }
</style>