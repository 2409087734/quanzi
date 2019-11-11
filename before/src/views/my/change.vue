<template>
  <div>
        <header>更改密码</header>
       <div class="login">
             <input type="text" class="deng" placeholder="输入原密码"/>
             <div class='pwd'>
                 <input type="text" placeholder="输入新密码"/>
             </div>
             <button>确认提交</button>
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
header{
    width: 100%;
    height: 44px;
    background: #eee;
    text-align: center;
    line-height: 44px;
}
.login{
    width:100%;
    display:flex;
    align-items: center;
    justify-content: center;
    flex-direction:column;
}
.login input{
    width:94%;
    height:35px;
    background:#eee;
    border:none;
    outline:none;
    text-indent: 15px;
}
.login button{
    width:94%;
    height:35px;
    background:red;
    border:none;
    outline:none;
    margin-top:20px;
    color:#fff;
}
.deng{
    margin-top:20px;
}
.pwd{
    width: 94%;
    background: #eee;
    display: flex;
    margin-top:20px;
}

</style>