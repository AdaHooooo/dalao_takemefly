<template>
    <div class="top">
        <div class="content">
            <div class="left">
                <img src="../../assets/images/logo.png" alt="" >
                <div class="front_page">首页</div>
                <div class="live_streaming">直播</div>
                <div class="left_3">学习</div>
                <div class="left_4">大佬</div>
                <div class="left_5">小白</div>
                <div class="left_6">活动</div>
            </div>
             <div class="search_bar">搜索框</div>
            <div class="right">
                <div class="login_register">登录注册</div>
                <div class="history record">历史记录</div>
                <div class="creation_center">创作中心</div>
                <div class="information">消息</div>
                <div class="help_me">帮助中心</div>
                

            </div>
           
        </div>
    </div>
        

</template>
<script setup lang="ts">

</script>
<style scoped lang="scss">
.top {
    position: fixed;
    z-index: 999;
    width: 100%;
    height:65px;
    background:#e6ccee;
    display: flex;
    justify-content: center;
    .content {
        width: 98%;
        height: 65px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        
        .left {
             display: flex;
             justify-content: center;
             align-items: center;
            img{
                width: 50px;
            }
            div{
                margin-left:5px;

            }
            
        }
        .search_bar{
            

        }
        .right{
            display: flex;
             justify-content: center;
             align-items: center;
             div{
                margin-left:5px;

            }

        }



    }

    

}

</style>