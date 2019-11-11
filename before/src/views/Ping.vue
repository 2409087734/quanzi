<template>

    <div class="pl">
        <!-- {{item}} -->

        <div class="plbox">
           <input v-model="commentContent" type="text" placeholder="请输入..."><button @click="ping(item)">评论</button>
        </div>
      
          <p class="cont" v-for="(item,index) in item.comments" :key="index"> 
              <span>  <span>{{item.userName}}</span>:{{item.commentContent}}</span>
          </p>
    </div>
</template>
<script>

import api from "../api";
import { get, post } from "../utils/request";
export default {
    props:["item"],

    components:{

    },
    data(){
        return {
          commentContent:"",
          dynamicid:''
        }
    },
    computed:{

    },
    methods:{
        ping(item){
              // console.log(this.item)
          this.dynamicid = this.item.dynamicid;
              post(api.home.PUBLISHCOMMENT_API,{
                 dynamicid:this.dynamicid,
                 commentContent:this.commentContent
            }).then(res=>{

          })
            
              this.$emit("renderpl")
        }
    },
    created(){
        this.ping()
        // this.xuan
    },
    mounted(){

    }
}
</script>
<style scoped lang="">
.pl {
  width: 100%;
  /* height: 210px; */
  display: flex;
  flex-direction: column;
}
.pl .plbox {
  width: 100%;
  height: 40px;
  display: flex;
}
.pl div input {
  width: 85%;
  height: 28px;
  border: 1px solid #ccc;
  text-indent: 15px;
}
.pl div button {
  width: 60px;
  height: 30px;
  background: #eee;
  border: none;
  outline: none;
}

.cont{
  width: 100%;
  /* height: 800px; */
}

</style>