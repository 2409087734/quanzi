<template>
    <div class="homebox">
         <router-view></router-view>
         <div class="footer">
            <router-link to="/home/quanzi">圈子</router-link>
            <router-link to="/home/my">我的</router-link>
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
.homebox{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}
.page{
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
}
 .footer{
    width: 100%;
    height: 50px;
    display: flex;
    position: absolute;
    bottom:0;
    left:0;
    font-size:18px;
}
.footer a{
    flex: 1;
    text-align: center;
    line-height: 50px;
    background: #fff;
    border-top:1px solid #ccc;
}
.router-link-active{
    color:red
}
</style>