<template>
    <div class="xinxi">
        <header>
            <span>返回</span>
            <span>个人信息</span>
            <span class="update" @click="bian()">编辑</span>
        </header>

         <span>账号名称：<span v-if='flag'>{{name}}</span><input type="text" v-model='name' v-else></span>

         <span>年龄：<span v-if='flag'>{{age}}</span><input type="text" v-model='age' v-else></span>

    </div>
</template>
<script>
export default {
    props:{
    //    user:string
    },
    components:{

    },
    data(){
        return {
           flag:true,
           name:"chenjiaqi123",
           age:18
        }
    },
    computed:{

    },
    methods:{
        bian(){
             if(this.flag){
                 this.flag=false
             }else{
                 this.flag=true
             }
       }
    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="">
.xinxi{
  width: 100%;
  display: flex;
  flex-direction: column;
}
.xinxi header{
  width: 100%;
  height: 44px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #eee;
}
.xinxi span{
    margin:10px;
}
.update{
    color:red;
}
</style>