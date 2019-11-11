<template>
    <div>
        <header>圈子登录</header>
       <div class="login">
             <input type="text" class="deng" placeholder="用户名" v-model="userName"/>
             <div class='pwd'>
                 <input type="text" placeholder="密码" ref="mima" v-model="userPwd"/>
                 <i  ref="password" class="iconfont icon-eyeopen" @click="eye()"></i>
             </div>
             <button @click="login()">登录</button>
       </div>
       <div class='spans'>
            <span @click="zhu()">没有账号，快速注册</span>
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
        zhu(){
            this.$router.push('/zhuce')
        },


        login(){
             post(api.home.LOGIN_API,{
              userName:this.userName,
              userPwd:this.userPwd,
          }).then(res=>{
              console.log(res)
              this.$router.push('/home')
          })
        },


        eye(){
        
            if(this.$refs.password.className  == "iconfont icon-eyeopen"){
                this.$refs.password.className="iconfont icon-eyeoclose"
                this.$refs.mima.type="password"
            }else{
                this.$refs.password.className="iconfont icon-eyeopen"
                 this.$refs.mima.type="text"
            }
      
        }
    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="css">
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
    /* margin-top:20px; */
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
.pwd i{
    line-height: 35px;
    margin-left:-30px;
    font-size:19x;
}
.spans{
    margin-top:10px;
}
</style>