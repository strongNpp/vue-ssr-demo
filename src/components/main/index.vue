<template>
  <el-container>
    <el-header height="50px">
      <div class="ggac-header">
        <div>菜单1</div>
        <div>菜单2</div>
        <div>菜单3</div>
        <div>菜单4</div>
        <div>菜单5</div>
      </div>
    </el-header>
    <el-main>
      <router-view></router-view>
    </el-main>
    <el-footer height="200px">Footer</el-footer>
  </el-container>
</template>
<script>
export default {
  created() {},
  computed: {},
  watch: {},
  methods: {},
};
</script>
<style lang="less" scoped>
body,html{
    height: 100%;
}
.el-container {
    display: flex;
    justify-content: space-between;
    height: 100%;
  .el-header {
    background: #ffe300;
    color: #2b2e36;
    .ggac-header {
      height: 100%;
      width: 1200px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto;
      div {
        padding: 25px 30px;
        cursor: pointer;
     
        &:hover{
            background: #fff;
        }
      }
    }
  }
  .el-main{
      flex: 1;
  }
  .el-footer {
    background: #2b2e36;
    color: #fff;
  }
}
</style>
