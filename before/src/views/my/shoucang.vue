<template>
    <div class="list">
                <div class="list-item" v-for="(item,index) in shouList" :key="index">
                    <div class="touxiang">
                           <div class="tu-item">
                               <img src="http://upload.mnw.cn/2017/0814/1502698443378.jpg" alt="">
                                <div class="touxiang-item"> 
                                    <span>{{item.userName}}</span>
                                    <p>2019-11-04</p>
                                </div>
                           </div>    
                          <span class="xing">★</span>
                   </div> 
                    <!-- <div class="imgs">
                        <img src="http://upload.mnw.cn/2017/0814/1502698443378.jpg"/> 
                        <img src="http://upload.mnw.cn/2017/0814/1502698443378.jpg"/>     
                    </div> -->
                    <p class="ps">{{item.dynamicContent}}</p>
                    <div class='ping'>
                       <i class="iconfont icon-dianzan"><span>34</span></i>
                       <i class="iconfont icon-xinxi"><span>3</span></i>
                    </div>
                </div>

            </div>
</template>
<script>
import {mapState} from 'vuex'
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
        ...mapState(['shouList'])

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
.list{
    width: 100%;
    height: 220px;
    display: flex;
    flex-direction: column;
}
.list-item{
    width: 100%;
     height: 150px;
    display: flex;
    border-bottom:1px solid rgb(255, 87, 171);
    flex-direction: column;
}
.touxiang{
    width: 100%;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    padding:15px ;
}
.touxiang img{
    width: 40px;
    height: 40px;
    border-radius: 50%;
}
.tu-item{
    display: flex;
}
.tu-item .touxiang-item{
    margin-top:3px;
    margin-left:5px;

} 
/* .imgs{
    width: 100px;
    display: flex;
}
.imgs img{
    width: 100px;
    height: 90px;
    margin-left:15px;
} */
.ps{
    margin:5px 10px;
}
.ping{
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding:5px 14px;
    box-sizing: border-box;
}
.ping i{
    font-style: normal;
    color: rgb(255, 87, 171);
    font-size:19px;
} 
.ping span{
    color:#000;
}
</style>