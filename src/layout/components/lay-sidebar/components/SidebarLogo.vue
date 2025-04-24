<script setup lang="ts">
import { getTopMenu } from "@/router/utils";
import { useNav } from "@/layout/hooks/useNav";

defineProps({
  collapse: Boolean
});

const { title, getLogo } = useNav();
</script>

<template>
  <div class="sidebar-logo-container" :class="{ collapses: collapse }">
    <transition name="sidebarLogoFade">
      <router-link
        v-if="collapse"
        key="collapse"
        :title="title"
        class="sidebar-logo-link"
        :to="getTopMenu()?.path ?? '/'"
      >
        <img :src="getLogo()" alt="logo" />
        <span class="sidebar-title">{{ title }}</span>
      </router-link>
      <router-link
        v-else
        key="expand"
        :title="title"
        class="sidebar-logo-link"
        :to="getTopMenu()?.path ?? '/'"
      >
        <!-- <img :src="getLogo()" alt="logo" />
        <span class="sidebar-title">{{ title }}</span> -->
        <div class="logo">
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 5L5 12.5V27.5L20 35L35 27.5V12.5L20 5Z"
              stroke="#3498DB"
              stroke-width="2"
            />
            <path
              d="M20 5V20M20 20V35M20 20L5 12.5M20 20L35 12.5"
              stroke="#3498DB"
              stroke-width="2"
            />
          </svg>
          <h1>{{ title }}</h1>
        </div>
      </router-link>
    </transition>
  </div>
</template>

<style lang="scss" scoped>
.sidebar-logo-container {
  position: relative;
  display: flex; /* 添加 flex 布局 */
  align-items: center; /* 垂直居中 */
  justify-content: center; /* 水平居中 */
  width: 100%;
  overflow: hidden;
  border-bottom: 1px solid #34495e;

  .sidebar-logo-link {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center; /* 确保内容水平居中 */
    height: 100%;

    img {
      display: inline-block;
      height: 32px;
    }

    .sidebar-title {
      display: inline-block;
      height: 32px;
      margin: 0 0 0 12px; /* 调整 margin 以适配居中布局 */
      overflow: hidden;
      font-size: 18px;
      font-weight: 600;
      line-height: 32px;
      color: var(--pure-theme-sub-menu-active-text);
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
}

.logo {
  display: flex; /* 添加 flex 布局 */
  flex-direction: column; /* 垂直排列 */
  align-items: center; /* 水平居中 */
  justify-content: center; /* 垂直居中 */
  padding: 30px 0 40px;
  text-align: center;

  img {
    width: 40px;
    margin-bottom: 5px;
  }

  h1 {
    font-size: 16px;
    font-weight: 600;
    color: var(--pure-theme-sub-menu-active-text);
  }
}
</style>
