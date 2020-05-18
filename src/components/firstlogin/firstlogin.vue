<template>
    <div id="flogin">
        <div class="flogin_con">
            <div class="flogin_left">
                <h2>
                    <img src="images/avatar_male_30.png" />
                </h2>
                <em>请先登录</em>
            </div>
            <div class="flogin_right">
                <i>
                    <img src="images/ic_status_send_text.png" />
                </i>
                <em>
                    <img src="images/ic_status_send_pic.png" />
                </em>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    #flogin{
        width: 100%;
    }
    .flogin_con{
        width: 85%;
        height: .34rem;
        margin: 0 auto;
        padding: .14rem 0;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #e8e8e8;
    }
    .flogin_left{
        width: 44%;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    .flogin_left>h2{
        width: .54rem;
        height: .54rem;
    }
    .flogin_left>h2 img{
        width: 100%;
        height: 100%;
        border-radius: 50%;
    }
    .flogin_left>em{
        font-size: .18rem;
        color: #aaaaaa;
    }
    .flogin_right{
        width: 40%;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    .flogin_right>i{
        width: .36rem;
        height: .36rem;
    }
    .flogin_right>em{
        width: .36rem;
        height: .36rem;
    }
    .flogin_right img{
        width: 100%;
        height: 100%;
    }
</style>