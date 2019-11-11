<template>
        <div class="page">
            <div class="tou">
              <i class="iconfont icon-Instagram" @click="fabu()"></i>
              <div class="inp">
                  <i class="iconfont icon-fangdajing"></i>
                  <input type="text" placeholder="试试搜索你的好友名字">
              </div>
            </div>

      
            <div class="zhezhao" v-show="flag">
               <div class="mark">
                <input type="text" placeholder="请输入内容" v-model="dynamicContent">
                   <div class="xuanze">
                       <span></span>
                       <span></span>
                      <span @click="quxiao()">取消</span>
                      <span @click="fa()">发布</span>
                   </div>
                    
               </div>
            </div>


          <div class="scroll">
                <div class="list" v-for="(item,index) in getList" :key="index">
                    <div class="list-item">
                        <div class="touxiang">
                              <div class="tu-item">
                                  <img src="http://upload.mnw.cn/2017/0814/1502698443378.jpg" alt="">
                                    <div class="touxiang-item"> 
                                        <span>{{item.userName}}</span>
                                        <p>2019-11-04</p>
                                    </div>
                              </div>    
                              <span class="xing" @click="college(item)">★</span>
                        </div> 
                        <div class="imgs">
                            <img src="http://upload.mnw.cn/2017/0814/1502698443378.jpg"/> 
                            <img src="http://upload.mnw.cn/2017/0814/1502698443378.jpg"/>     
                        </div>
                        <p class="ps">{{item.dynamicContent}}</p>
                        <div class='ping'>
                          <i class="iconfont icon-dianzan"><span>{{num}}</span></i>
                          <div><i class="iconfont icon-xinxi"></i><span>3</span></div>
                        </div>

                    </div>
                      <Ping :item="item" @renderpl="renderpl"/> 

                </div>

          </div>

            
      </div>

</template>
<script>
import api from "../api";
import { get, post } from "../utils/request";
import { mapMutations } from "vuex";
import Ping from './Ping'
export default {
  props: {},
  components: {
    Ping
  },
  data() {
    return {
      getList: [],
      num: 32,
      flag: false,
      dynamicContent: "",
      pingflag: false,
      dynamicContents: "",
      id: 0
    };
  },
  computed: {},
  methods: {
    
    ...mapMutations(['addListShouList']),

    
    list() {
      get(api.home.SHOW_API).then(res => {
        this.getList = res.data;
        // console.log(res)
      });
    },

    fabu() {
      this.flag = true;
    },

    quxiao() {
      this.flag = false;
    },

    fa() {
      post(api.home.SENDWORD_API, {
        dynamicContent: this.dynamicContent,
        dynamicid: this.dynamicid,
        uid: this.uid
      }).then(res => {
        this.list();
      });
      this.flag = false;
    },
    college(obj) {
        console.log(obj)
        this.addListShouList(obj)
    },

    renderpl(){
      this.list()
    }
  },

  created() {
    this.list();
  },
  mounted() {}
};
</script>
<style scoped lang="">
.page {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.page .tou {
  width: 100%;
  height: 55px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.tou .inp {
  width: 83%;
  display: flex;
  align-items: center;
  text-indent: 18px;
  height: 28px;
  border-radius: 15px;
  background: #eee;
}
.tou .inp input {
  background: #eee;
  border: none;
  outline: none;
  text-align: center;
}
.icon-Instagram {
  color: rgb(255, 87, 115);
  font-size: 25px;
}
.xing {
  color: #aaa;
  font-size: 20px;
  margin-top: 5px;
}
.scroll .list {
  width: 100%;
 /* height: 400px; */
  display: flex;
  flex-direction: column;
}

.scroll{
    width: 100%;
    flex: 1;
    overflow-y: scroll;
}
.page .list-item {
  width: 100%;
  display: flex;
  border-bottom: 1px solid rgb(255, 87, 115);
  flex-direction: column;
}
.touxiang {
  width: 100%;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 15px;
}
.touxiang img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
.tu-item {
  display: flex;
}
.tu-item .touxiang-item {
  margin-top: 3px;
  margin-left: 5px;
}
.imgs {
  width: 100px;
  display: flex;
}
.imgs img {
  width: 60px;
  height: 50px;
  margin-left: 15px;
}
.ps {
  margin: 5px 10px;
}
.ping {
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 5px 14px;
  box-sizing: border-box;
}
.ping i {
  font-style: normal;
  color: rgb(255, 87, 115);
  font-size: 19px;
}
.ping span {
  color: #000;
}
.zhezhao {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  position: absolute;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.6);
}
.mark {
  width: 250px;
  height: 180px;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  align-items: center;
  background: #fff;
  border-radius: 6px;
}
.mark input {
  width: 85%;
  height: 27px;
  margin-top: 60px;
  border: none;
  outline: none;
  text-indent: 15px;
}

.xuanze {
  width: 100%;
  height: 30px;
  margin-top: 20px;
  display: flex;
  color: red;
  align-items: center;
  justify-content: space-around;
}

</style>