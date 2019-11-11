<template>
   <div>
        <header>圈子注册</header>
       <div class="login">
             <input type="text" class="deng" placeholder="用户名" v-model="userName"/>
             <div class='pwd'>
                 <input type="text" placeholder="密码" v-model="userPwd"/>
             </div>
             <button @click='register()'>注册</button>
       </div>
    </div>
</template>
<script>
import api from '../api'
import {get,post} from '../utils/request'
export default {
    props:{

    },
    components:{

    },
    data(){
        return {
           userName:"",
           userPwd:""
        }
    },
    computed:{

    },
    methods:{
      register(){
          post(api.home.REGISTER_API,{
              userName:this.userName,
              userPwd:this.userPwd,
          }).then(res=>{
              console.log(res)
              this.$router.push('/login')
          })
      }

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