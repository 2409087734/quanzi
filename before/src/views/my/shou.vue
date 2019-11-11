<template>
    <div class="plbox">

       <div class="plbox-item">
           <div class="tuleft">
                <img src="http://upload.mnw.cn/2017/0814/1502698443378.jpg" alt="">
                <div class="ziti">
                     <span>江琪</span>
                    <p>太盟了</p>
                </div> 
           </div>
           <img class="imgs" src="http://upload.mnw.cn/2017/0814/1502698443378.jpg" alt="">
       </div>
       <div class="plbox-item">
           <div class="tuleft">
                <img src="http://upload.mnw.cn/2017/0814/1502698443378.jpg" alt="">
                <div class="ziti">
                     <span>江琪</span>
                    <p>太盟了</p>
                </div> 
           </div>
           <img class="imgs" src="http://upload.mnw.cn/2017/0814/1502698443378.jpg" alt="">
       </div>
       <div class="plbox-item">
           <div class="tuleft">
                <img src="http://upload.mnw.cn/2017/0814/1502698443378.jpg" alt="">
                <div class="ziti">
                     <span>江琪</span>
                    <p>太盟了</p>
                </div> 
           </div>
           <img class="imgs" src="http://upload.mnw.cn/2017/0814/1502698443378.jpg" alt="">
       </div>
    </div>
</template>
<script>

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
    padding:0 15px;
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
</style>