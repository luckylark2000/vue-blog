<script setup></script>
<template>
  <div class="home-container">
    <div class="blogs">
      <div class="blogs-header">全部博客</div>
      <div class="bolg-content">neirong</div>
    </div>
    <div class="sider">
      <div class="category">分类</div>
      <div class="tag">标签</div>
      <div class="newest">最新推荐</div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.home-container {
  display: flex;
  width: 80%;
  height: 100%;
  margin-top: 10px;
  justify-content: center;
}

.blogs {
  padding-right: 10px;
  background-color: white;
  border-radius: 5px;
  flex: 3;
  margin-inline: 10px;
  min-height: 300px;
}

.sider {
  margin-right: 10px;
  background-color: aquamarine;
  border-radius: 5px;
  flex: 1;
}

@media screen and (width <= 800px) {
  .home-container {
    width: 100%;
  }
}

@media screen and (width <= 415px) {
  .sider {
    display: none;
  }
}
</style>
