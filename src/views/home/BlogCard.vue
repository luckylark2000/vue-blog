<script setup>
import { PersonOutline, EyeOutline, CalendarClearOutline } from '@vicons/ionicons5';
// const content = {
//   picture: '',
//   tittle: '',
//   desc: '好好啊哈',
//   tags: ['ass', 'fff', 'ggg'],
//   author: '阿猫',
//   date: 'dddd',
//   see: 1000,
//   categories: ['dd', 'fff', 'hhh']
// }
</script>
<template>
  <div class="card">
    <img src="../../assets/images/homebg.png" alt="博客图片" />
    <div class="card-content">
      <div class="card-title">作用域链</div>
      <div class="card-desc">这个人很懒，什么也没说</div>
      <div class="card-tags">各种标签</div>
      <div class="card-bottom">
        <span class="card-author"
          ><n-icon size="10" :component="PersonOutline" style="margin-right: 3px" />阿猫</span
        >
        <span class="card-time"
          ><n-icon size="10" :component="CalendarClearOutline" style="margin-right: 3px" />2024 0203
          12:13:20</span
        >
        <span class="card-views"
          ><n-icon size="10" :component="EyeOutline" style="margin-right: 3px" />5</span
        >
        <span class="card-category">各种分类</span>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.card {
  display: flex;
  height: 150px;
  margin-bottom: 5px;
  padding: 0 10px;
  background-color: rgb(255 255 255 / 70%);
  align-items: center;
  justify-content: center;

  img {
    width: 160px;
    height: 100px;
    margin-right: 10px;
    border-radius: 5px;
  }

  .card-content {
    flex: 1;

    .card-title {
      margin-bottom: 5px;
      font-size: 18px;
      font-weight: bold;
    }

    .card-desc {
      margin-bottom: 5px;
      color: #bdbdbd;
    }

    .card-tags {
      margin-bottom: 5px;
    }

    .card-bottom {
      display: flex;
      font-size: 10px;
      line-height: 10px;

      .card-author {
        display: flex;
        margin-right: 15px;
        font-weight: bold;
        color: green;
        align-items: baseline;
      }

      .card-time {
        display: flex;
        margin-right: 15px;
        align-items: baseline;
      }

      .card-views {
        display: flex;
        align-items: baseline;
      }

      .card-category {
        text-align: end;
        flex: 1;
      }
    }
  }
}
</style>
