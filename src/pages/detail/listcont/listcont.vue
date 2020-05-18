<template>
  <div id="cont">
    <div class="movie_cont" v-for="(v,i) in listdata" :key="i">
        <div class="right">
                <h3>{{v.title}}</h3>
                <p>{{v.fen}} xxxxxx人观看</p>
                <br />
                <i>剧情 / 犯罪 蒂姆·罗宾斯 / 摩根·弗里曼 / 鲍勃·冈顿 / 威廉姆·赛德勒 / 克兰西·布朗 / 吉尔·贝罗斯 / 马克·罗斯顿 / 詹姆斯·惠特摩 / 杰弗里·德曼 /美国</i>
                <br />
                <span>用App查看影人资料</span>
        </div>
        <div class="left">
            <img :src="v.img" />
        </div>
        <div class="want">
            <span>想看</span>
            <span>看过</span>
        </div>
        <div class="jianjie">
            <p>{{v.title}}的简介:</p>
            <span>20世纪40年代末，小有成就的青年银行家安迪（蒂姆·罗宾斯 Tim Robbins 饰）因涉嫌杀害妻子及她的情人而锒铛入狱。在这座名为肖申克的监狱内，希望似乎虚无缥缈，终身监禁的惩罚无疑注定了安迪接下来灰暗绝望的人生。未过多久，安迪尝试接近囚犯中颇有声望的瑞德（摩根·弗里曼 Morgan Freeman 饰），请求对方帮自己搞来小锤子。以此为契机，二人逐渐熟稔，安迪也仿佛在鱼龙混杂、罪恶横生、黑白混淆的牢狱中找到属于自己的求生之道。他利用自身的专业知识，帮助监狱管理层逃税、洗黑钱，同时凭借与瑞德的交往在犯人中间也渐渐受到礼遇。表面看来，他已如瑞德那样对那堵高墙从憎恨转变为处之泰然，但是对自由的渴望仍促使他朝着心中的希望和目标前进。而关于其罪行的真相，似乎更使这一切朝前推进了一步……</span>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["listdata"]
};
</script>
<style scoped>
#cont {
  width: 100%;
  height: 100%;
}
.movie_cont {
  width: 85%;
  margin: 0 auto;
  padding: 0.14rem 0;
}
.movie_cont .right {
  width: 64%;
  float: left;
}
.right h3 {
  font-size: 0.18rem;
  color: #333;
  font-weight: 700;
  line-height: 0.32rem;
}
.right p {
  font-size: 0.12rem;
  color: #aaaaaa;
  line-height: 0.2rem;
  text-align: right;
}
.right i {
  font-size: 0.14rem;
  margin-top: 0.12rem;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
}
.right span {
  color: #42bd56;
}
.movie_cont .left {
  width: 32%;
  float: right;
}
.movie_cont .left img {
  width: 100%;
}
.want{
    width: 100%;
    height: .5rem;
    margin-top: .14rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    float: left;
}
.want span{
    width: 48%;
    height: 90%;
    text-align: center;
    line-height: .45rem;
    color: #ffb712;
    border: 1px solid #ffb712;
    border-radius: .06rem;
}
.jianjie{
    float: left;
    margin-top: .14rem;
}
.jianjie p{
    font-size: .16rem;
    line-height: .36rem;
    color: #aaaaaa;
}
.jianjie span{
    line-height: .2rem;
    font-size: .14rem;
    margin-top: .12rem;
    display: block;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 6;
}
</style>