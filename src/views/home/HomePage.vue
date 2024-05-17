<script setup>
import { DocumentTextOutline } from '@vicons/ionicons5';
import BlogCard from './BlogCard.vue';
</script>
<template>
  <div class="home-container">
    <div class="blogs">
      <div class="blogs-header">全部博客</div>
      <span class="blog-content">
        <BlogCard v-for="i in 3" :key="i" />
      </span>
    </div>
    <div class="side">
      <div class="category">
        <div class="c-header">分类</div>
        <div class="c-list">
          <div class="c-item" v-for="i in 4" :key="i">
            <n-icon size="20" :component="DocumentTextOutline"></n-icon>
            <span>名称</span>
            <span>1</span>
          </div>
        </div>
      </div>
      <div class="tag">
        <div class="t-header">标签</div>
        <div class="t-list">
          <n-tag v-for="i in 5" :key="i" :color="{ borderColor: 'red', textColor: 'green' }" round>
            哒哒</n-tag
          >
        </div>
      </div>
      <div class="newest">
        <div class="n-header">最新推荐</div>
        <div class="n-list">
          <div class="n-item" v-for="i in 5" :key="i">哒哒</div>
        </div>
      </div>
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
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  flex: 3;
  padding-inline: 10px;
  min-height: 300px;

  .blog-content :first-child {
    border-radius: 0 0 5px 5px;
  }

  .blog-content > :not(:first-child) {
    border-radius: 5px;
  }
}

.blogs-header {
  padding: 10px 10px 5px;
  font-size: 20px;
  font-weight: bold;
  text-align: start;
  background-color: rgb(255 255 255 / 70%);
  border-radius: 5px 5px 0 0;
  border-bottom: 1px solid rgb(0 0 0 / 20%);
}

.side {
  margin-right: 10px;
  border-radius: 5px;
  flex: 1;

  .category {
    margin-bottom: 10px;
    padding: 10px;
    box-sizing: border-box;
    background-color: rgb(255 255 255 / 70%);
    border-radius: 5px;

    .c-header {
      padding-bottom: 5px;
      font-weight: bold;
      border-bottom: 1px solid rgb(0 0 0 / 20%);
    }

    .c-list {
      padding-bottom: 10px;

      .c-item {
        display: flex;
        height: 35px;
        align-items: center;
        border-bottom: 1px solid rgb(0 0 0 / 20%);

        :first-child {
          padding-left: 3px;
        }

        :nth-child(2) {
          padding-left: 15px;
        }

        :last-child {
          padding-right: 15px;
          text-align: right;
          flex: 1;
        }
      }
    }
  }

  .tag {
    margin-bottom: 10px;
    padding: 10px;
    box-sizing: border-box;
    background-color: rgb(255 255 255 / 70%);
    border-radius: 5px;

    .t-header {
      padding-bottom: 5px;
      font-weight: bold;
      border-bottom: 1px solid rgb(0 0 0 / 20%);
    }

    .t-list > * {
      margin: 10px 0 0 10px;
    }
  }

  .newest {
    padding: 10px;
    box-sizing: border-box;
    background-color: rgb(255 255 255 / 70%);
    border-radius: 5px;

    .n-header {
      padding-bottom: 5px;
      font-weight: bold;
      border-bottom: 1px solid rgb(0 0 0 / 20%);
    }

    .n-list {
      .n-item {
        display: flex;
        height: 35px;
        align-items: center;
        border-bottom: 1px solid rgb(0 0 0 / 20%);
      }
    }
  }
}

@media screen and (width <= 800px) {
  .home-container {
    width: 100%;
  }
}

@media screen and (width <= 415px) {
  .side {
    display: none;
  }
}
</style>
