<template>
    <div class="pl">
      <header>我的评论</header>
    <div class="tit">  
      <router-link to="/myping/shou">收到的评论</router-link>
      <router-link to="/myping/taren">给他人评价</router-link>
    </div> 
      <router-view></router-view>

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
.pl{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}
.pl header{
    width: 100%;
    height: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #eee;
}
.tit{
    width: 100%;
    height: 50px;
    display: flex;
    padding:0 25px;
    box-sizing: border-box;
}
.tit a{
   flex: 1;
   text-align: center;
   line-height: 50px;
   font-size:17px;

}
.router-link-active{
    color:red;
    border-bottom:1px solid red;
}
</style>