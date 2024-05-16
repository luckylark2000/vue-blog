<script setup>
import { MenuOutline } from '@vicons/ionicons5';
import { useRouter } from 'vue-router';

const router = useRouter();
const options = [
  {
    label: '首页',
    key: 'home',
  },
  {
    label: '博客',
    key: 'blog',
  },
  {
    label: '生活圈',
    key: 'life',
  },
  {
    label: '留言板',
    key: 'message',
  },
  {
    label: '创作',
    key: 'new',
  },
  {
    label: '登录',
    key: 'login',
  },
  {
    label: '常用网址',
    key: 'login',
  },
  {
    label: '学习',
    key: 'learn',
  },
];
const handleSelect = (key) => {
  router.push(`${key}`);
  console.log(key);
};
</script>
<template>
  <div class="container">
    <!-- TODO 实现滚动鼠标超出一定的距离更换header -->
    <header>
      <h3>AiTi</h3>
      <nav>
        <router-link class="link" to="/home" exact>首页</router-link>
        <router-link class="link" to="/blog">博客</router-link>
        <router-link class="link" to="/life">生活圈</router-link>
        <router-link class="link" to="/message">留言板</router-link>
        <router-link class="link" to="/new"> 创作</router-link>
        <router-link class="link" to="/login" exact> 登录</router-link>
        <router-link class="link" to="/login" exact> 常用网址和工具</router-link>
        <router-link class="link" to="/learn" exact> 学习</router-link>
        <span class="menu">
          <n-dropdown trigger="click" :options="options" @select="handleSelect">
            <n-icon :size="30" :component="MenuOutline" />
          </n-dropdown>
        </span>
      </nav>
    </header>

    <main class="main">
      <router-view />
    </main>

    <footer>
      <p>&copy; 2024 Powered by AiTi</p>
    </footer>
  </div>
</template>

<style scoped lang="scss">
.container {
  display: flex;
  background-image: url('../assets/images/homebg.png');
  background-repeat: no-repeat; /* 确保图片不重复 */
  background-size: cover;
  flex-direction: column;
  min-height: 100vh;

  header {
    display: flex;
    padding: 0.8rem;
    background-color: rgb(255 255 255 / 50%);
    align-items: center;
    justify-content: space-between;

    h3 {
      font-size: 1rem;
      margin-block: 0;
    }

    nav {
      display: flex;
      height: 30px;
      gap: 1rem;

      .link {
        display: flex;
        text-decoration: none;
        color: black;
        align-items: center;
        justify-content: center;

        &:hover {
          color: #42b983;
        }
      }

      @media (width <= 800px) {
        .link:nth-child(n + 5) {
          display: none;
        }
      }

      .menu {
        display: none;
      }

      @media screen and (width <= 437px) {
        .link {
          display: none;
        }

        .menu {
          display: block;
        }
      }

      /* 当屏幕宽度小于375px时，只显示第一个 */
    }
  }

  main {
    display: flex;
    height: 100%;
    flex: 1;
    justify-content: center;
  }

  footer {
    padding: 0.3rem;
    text-align: center;

    p {
      margin: 0;
    }
  }
}
</style>
