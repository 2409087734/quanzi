<template>
<div class="bian">
    <header>个人信息</header>
    <div>
          <span>账号密码：</span>
          <input type="text">
    </div>
    <div>
          <span>年龄：</span>
          <input class="inp" type="text">
    </div>
    <button class="btn">保存</button>
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
.bian{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}
.bian header{
    width: 100%;
    height: 44px;
    display: flex;
    flex-direction: column;
    background: #eee;
    align-items: center;
    justify-content: center;
}
.btn{
    width: 180px;
    height: 35px;
    background: rgb(252, 141, 141);
    border:none;
    outline: none;
    color:#fff;
    font-size:18px;
    position: absolute;
    bottom:50px;
    margin-left:100px;
}
.bian div{
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    margin-top:10px;
}
.bian div span{
  text-indent:20px;
}
.bian div input{
    width: 200px;
    height: 28px;
    border:1px solid #ccc;
}
.inp{
    margin-left:32px;
}

</style>