<template>
  <div class="blog-container">
    <h2>博客</h2>
    <ul class="post-list">
      <li v-for="(post, index) in posts" :key="index">
        <a href="#" class="post-title">{{ post.title }}</a>
        <span class="post-date">{{ post.date }}</span>
      </li>
    </ul>
  </div>
</template>

<script setup>
const posts = [
  {
    title: 'Vue3重构计划，最新音乐播放器，进来瞅瞅！',
    date: '2020-11-16',
  },
  {
    title: 'TypeScript学习--联想壁纸库',
    date: '2020-11-04',
  },
];
</script>

<style scoped lang="scss">
.blog-container {
  max-width: 700px;
  margin: auto;
  padding: 1rem;

  h2 {
    margin-bottom: 1rem;
  }

  ul {
    list-style-type: none;
    padding: 0;

    li {
      display: flex;
      margin-bottom: 1rem;
      align-items: center;

      .post-title {
        margin-right: 0.5rem;
        font-weight: bold;
        flex-grow: 1;
      }

      .post-date {
        color: #777;
      }
    }
  }
}
</style>
