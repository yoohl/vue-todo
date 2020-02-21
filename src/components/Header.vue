<template>
  <div class="header">
    <div class="header_inner">
      <h1>
        <a href="./">{{ this.$store.state.headerText }}</a>
        <i class="fas fa-grin-hearts"></i>
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'header',
  props: {
    msg: String,
  },
};
</script>

<style scoped>
.header {
  height: 43px;
  top: 0;
  position: fixed;
  z-index: 200;
  width: 100%;
  border-bottom: solid 1px #ca2100;
  background-color: #db4c3f;
}
.header_inner{
  width: 960px;
  margin: 0 auto;
}
h1 {
  float: left;
  margin-left: 36px;
  padding-top:7px
}
h1 a {
  color:#fff;
  font-size: 20px;
}
h1 .fas {
  color:#fff;
  font-size: 20px;
  padding-left:5px;
}
</style>
