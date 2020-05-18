<template>
  <div id="find">
    <div class="cont">
      <h3>
        {{title}}
        <i class="more">更多</i>
      </h3>
      <div class="bottom">
        <div class="b1">
            <div class="item" v-for="(v,i) in textdata" :key="i">{{v}}</div>
        </div>
        <div class="b2">
            <div class="item" v-for="(v,i) in textdatab" :key="i">{{v}}</div>
        </div>
      </div>
    </div>
    <div class="cont">
        <h3>
            分类浏览
        </h3>
            <div class="fenlei">
                <ul>
                    <li>
                        经典
                        <i>></i>
                    </li>
                    <li>豆瓣高分<i>></i></li>
                    <li>喜剧<i>></i></li>
                    <li>科幻<i>></i></li>
                    <li>悬疑<i>></i></li>
                    <li>文艺<i>></i></li>
                    <li>动画<i>></i></li>
                    <li>日本<i>></i></li>
                    <li>欧美<i>></i></li>
                </ul>
                 <ul>
                    <li>
                        冷门佳片
                        <i>></i>
                    </li>
                    <li>动作<i>></i></li>
                    <li>爱情<i>></i></li>
                    <li>恐怖<i>></i></li>
                    <li>治愈<i>></i></li>
                    <li>成长<i>></i></li>
                    <li>华语<i>></i></li>
                    <li>韩国<i>></i></li>
                </ul>
            </div>
    </div>
  </div>
</template>
<script>
export default {
    props:["title","textdata","textdatab"]
};
</script>
<style scoped>
#find {
  width: 100%;
}
.cont {
  width: 80%;
  margin: 0 auto;
}
.cont h3 {
  margin: 0.14rem 0;
  line-height: 0.3rem;
}
.more {
  float: right;
  font-size: 0.14rem;
  line-height: 0.3rem;
  color: #00b600;
}
.bottom {
  width: 100%;
  height: 1.6rem;
  overflow-x: auto;
  white-space: nowrap;
  display: flex;
  flex-wrap: wrap;
}
.b1{
    width: 100%;
    height: 48%;
    display: flex;
    align-items: center;
}
.b2{
    width: 100%;
    height: 48%;
    display: flex;
}
.item {
    height: 49%;
    padding: .05rem .1rem;
    margin-left: .14rem;
    text-align: center;
    line-height: 0.36rem;
    border: 1px solid #ffac2d;
}
.b1 .item:nth-child(1){
    margin: 0;
    color: #ffac2d;
}
.b1 .item:nth-child(2){
    color: #ff4055;
}
.b2 .item:nth-child(1){
    margin: 0;
    color: #2384e8;
}
.b2 .item:nth-child(2){
    color: #ff4055;
}
.fenlei{
    width: 100%;
}
.fenlei ul{
    width: 49%;
    float: left;
    border-right: 1px solid #eeeeee;
}
.fenlei ul:nth-child(2):last-child{
    border-bottom: 1px solid #eeeeee;
}
.fenlei li{
    height: .4rem;
    line-height: .4rem;
    text-indent: 8px;
    font-size: .14rem;
    color: #42bd56;
    border-top: 1px solid #eeeeee;
}
.fenlei li i{
    float: right;
    margin-right: .08rem;
    color: #eeeeee;
}
</style>