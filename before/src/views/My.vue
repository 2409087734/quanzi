<template>
  
       <div class="page">
          <header class="header"> 
               <div class="yong">  
                    <img src="http://upload.mnw.cn/2017/0814/1502698443378.jpg" alt="">
                    <div class="zi">
                        <span class="ziti">{{user}}</span>
                        <p>年龄:<span>18</span></p>
                    </div>
               </div>  
                <span>活跃度<span class="spanss">23</span></span>
          </header>

          
          <p class="pps"></p>

          <div>
             <div class="liebiao" @click="geren(user)">  
                 <div class="liebiao-item">
                    <i class="iconfont icon-gerenxinxi"></i>
                    <span>个人信息</span>
                 </div>
                 <i class="iconfont icon-angle-right"></i>
             </div>
              <div class="liebiao" @click="wdpl()">
                 <div class="liebiao-item">
                    <i class="iconfont icon-xinxi"></i>
                    <span>我的评论</span>
                 </div>
                 <i class="iconfont icon-angle-right"></i>
             </div> 
             <div class="liebiao" @click="grsc()">
                 <div class="liebiao-item">
                    <i class="iconfont icon-pingfen"></i>
                    <span>个人收藏</span>
                 </div>
                 <i class="iconfont icon-angle-right"></i>
             </div>
          </div>

          <p class="pps"></p>

            <div>
             <div class="liebiao" @click="()=>{this.xgmm()}">
                 <div class="liebiao-item">
                    <i class="iconfont icon-anquanshezhi"></i>
                    <span>修改密码</span>
                 </div>
                 <i class="iconfont icon-angle-right"></i>
             </div>
              <div class="liebiao" @click="tuichu()">
                 <div class="liebiao-item">
                    <i class="iconfont icon-tuichu"></i>
                    <span>退出</span>
                 </div>
                 <i class="iconfont icon-angle-right"></i>
             </div> 
          </div>
             <p class="pas"></p>
       </div>
  
</template>
<script>

import api from "../api";
import { get, post } from "../utils/request";
export default {
    props:{

    },
    components:{

    },
    data(){
        return {
            user:[]
        }
    },
    computed:{

    },
    methods:{
      geren(){
                  
           this.$router.push("/xinxi")
      },
      wdpl(){
           this.$router.push("/myping")

      },
      grsc(){
           this.$router.push("/shoucang")

      },
      xgmm(){
           this.$router.push("/change")

      },
      tuichu(){
           this.$router.push("/login")

      },

         userinfo(){
            get(api.home.USER_API).then(res => {
                this.user=res.data
                console.log(this.user)
            });
        }
    },
    created(){

     
         this.userinfo()
    },
    mounted(){

    }
}
</script>
<style scoped lang="">
.page{ 
    width: 100%;
    height:100px;
    display: flex;
    flex-direction: column;
}
.page .pps{
    width: 100%;
    height: 23px;
    background: #eee;
}
.header{
    width: 100%;
    height:100px;
    background: rgb(253, 103, 103);
    display: flex;
    box-sizing: border-box;
    padding: 25px;
    color:#fff;
    align-items: center;
    justify-content: space-around;
}
.header img{
    width: 60px;
    height: 60px;
    border-radius: 50%;

}
.header .spanss{
    font-size:26px;
}
.yong{
    display: flex;
    margin-left:-35px;
}
.yong .zi{
    margin-top:11px;
    margin-left:5px;
    font-size:17px;
} 
.liebiao{
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding:8px 25px;
    font-size:16px;
    box-sizing: border-box;
}
.liebiao i{
   font-size:20px;
   
}
.liebiao-item i{
   color:red;
   font-size:19px;
}
.pas{
    flex: 1;
    background: #eee;
}

</style>