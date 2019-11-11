<template>
    <div>
    
         <div class="plbox-item">
           <div class="tuleft">
                <img src="http://upload.mnw.cn/2017/0814/1502698443378.jpg" alt="">
                <div class="ziti">
                     <span>江琪</span>
                    <p>太盟了</p>
                </div> 
           </div>
           <div class="youzi">
        
            天青色等烟雨而我在等你，炊烟...
                
           </div>
           <!-- <img class="imgs" src="http://upload.mnw.cn/2017/0814/1502698443378.jpg" alt=""> -->
       </div>


    </div>
</template>
<script>
import api from "../../api";
import { get, post } from "../../utils/request";
export default {
    props:{

    },
    components:{

    },
    data(){
        return {

        }
    },
    computed:{

    },
    methods:{
       
    },
    created(){
        post(api.home.HUIFU_API,{
            toCommentReplyid:this.toCommentReplyid,
            replyContent:this.replyContent
        }).then(res => {
          console.log(res)
      });
    },
    mounted(){

    }
}
</script>
<style scoped lang="">
.plbox{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}
.plbox-item{
    width: 100%;
    height: 100px;
    border-bottom:1px solid #ccc;
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding: 15px;
    box-sizing: border-box;
}
.tuleft{
  display: flex;
}
.tuleft img{
    width: 50px;
    height: 50px;
    margin-left:5px;
    border-radius: 50%;
}
.imgs{
    width: 70px;
    height: 70px;
    border-radius: 10px;
}
.ziti{
    margin-top:10px;
    margin-left:5px 
}
.youzi{
    width: 90px;
}
</style>