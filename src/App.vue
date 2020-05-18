<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
  html{
  font-size:26.67vw;
}
/* 清除默认边框样式 */
html,body,ul,li,ol,dl,dd,dt,p,h1,h2,h3,h4,h5,h6,form,fieldset,legend,img,input{
    margin:0;
    padding:0
}
/* 设置页面基本字体及大小 */
body{
    font-size: .14rem;
    font-family: '微软雅黑';
}
/* 清除列表默认样式 */
ul, li, ol, dl{
    list-style: none;
}
/* 斜体变正常 */
i, em{
    font-style: normal;
}
/* 加粗变不加粗 */
b, strong {
    font-style: normal;
}
/* 清除下划线 */
u, a{
    text-decoration: none;
}

/* 清除标题标签默认样式(重要) */
h1,h2,h3,h4,h5,h6{
    font-size: 16px;
    font-weight: normal;
}
/* 清除表单和按钮默认边框 */
input,button{
    border: none;
}
/* 清除表单轮廓线 */
form input{
    outline: none;
}
</style>
