<template>
  <div>
    <div class="list-wrapper">
      <div v-for="item in workListGetter" :key="item.id">
        <img :src="item.cover_image" alt="" />
        <p>{{ item.title }}</p>
      </div>
    </div>
    <el-pagination
      layout="prev, pager, next"
      :page-size="5"
      :current-page="pageGetter.current_page"
      :total="pageGetter.count"
      @current-change="handleCurrentChange"
    />

  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  asyncData({store,route: { params: { page }}}) {
     const currentPage = page || 1;
   
    return store.dispatch("queryWorkData", { currentPage });
  },
  data() {
    return {
     
    }
  },

  computed: {
    ...mapGetters(["workListGetter", "pageGetter"]),
  },
  methods: {
    handleCurrentChange(val) {
    
      this.$router.push({
        name: "Index",
        params: {
          page: val,
        },
      });
    },
  },
};
</script>
<style lang="less" scoped>
.list-wrapper {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  div{
    margin-right: 20px;
    margin-bottom: 20px;
  }
}
</style>
