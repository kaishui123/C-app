<template>
  <div class="classify-container">
    <RouterLink class="search-btn" tag="div" :to="{ name: 'search' }">
      <van-icon name="search" />
      <div>苹果特价1元一斤</div>
    </RouterLink>
    <OneTab />
    <template v-if="showContent">
      <SideBar />
      <GoodsList />
    </template>
    <van-loading size="2rem" vertical v-else />
  </div>
</template>

<script>
import OneTab from '@/components/OneTab.vue';
import SideBar from '@/components/SideBar.vue';
import GoodsList from '@/components/GoodsList.vue';
import { mapActions, mapMutations, mapState } from 'vuex';

export default {
  computed: {
    ...mapState({
      showContent: (state) => state.showContent,
      sideList: (state) => state.sideList,
    }),
  },
  components: {
    OneTab,
    SideBar,
    GoodsList,
  },
  methods: {
    ...mapMutations(['resetGoodsList']),
    ...mapActions(['getGoodsList']),
  },
  watch: {
    showContent() {
      if (this.showContent) {
        this.resetGoodsList();
        this.getGoodsList({ type: this.sideList[0], page: 1, sortType: 'all' });
      }
    },
  },
};
</script>

<style lang="less" scoped>
.classify-container {
  width: 375px;
  .search-btn {
    width: 355px;
    height: 33px;
    line-height: 33px;
    background: #eee;
    margin: 11px auto 0;
    border-radius: 10px;
    font-size: 14px;
    text-align: center;
    color: #a1a1a1;
    > * {
      display: inline-block;
      vertical-align: middle;
    }
  }
}
</style>
