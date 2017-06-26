<template>
    <div class="header">
        <div class="content-warp">
            <div class="avatar">
                <img :src="seller.avatar"/>
            </div>
            <div class="content-title">
                <div class="title">
                       <span class="brand">
                           <img src="./img1.png" alt="" />
                       </span>
                       <span class="name">{{seller.name}}</span>
                </div>
                <div class="description">
                       {{seller.description}}/{{seller.deliveryTime}}分钟送达
                </div>
                <div v-if="seller.supports" class="supports">
                       <span class="icon" :class="classMap[seller.supports[0].type]">
                       </span>
                       <span class="text">{{seller.supports[0].description}}</span>
                </div>
            </div>
            <div v-if="seller.supports" class="support-count" @click="showDetail">
                    <span class="count">{{seller.supports.length}}个</span>
            </div>
        </div>
        <div class="bulletin-warp" @click="showDetail">
            <span class="bulletin-title"><img src="./img7.png" alt="" /></span>
            <span class="bulletin-text">{{seller.bulletin}}</span>
        </div>
        
        <div class="background">
            <img :src="seller.avatar" width="100%" height="100%" alt="" />
        </div>

        <div class="detail" v-show="detailShow">
            <div class="detail-warp clearfix" >
                <div class="detail-main">
                   <h1 class="name">{{seller.name}}</h1>
                   <div class="star-wrap">
                        <star :size="48" :score="seller.score"></star>
                   </div>
                   <div class="line-title">
                        <div class="line"></div>
                        <div class="text">优惠信息</div>
                        <div class="line"></div>
                   </div>
                   <ul v-if="seller.supports" class="list-supports">
                       <li v-for="(itme,index) in seller.supports" class="supports-item">
                          <span :class="classMap[seller.supports[index].type]" class="icon"></span>
                          <span class="supports-text">{{seller.supports[index].description}}</span>
                       </li>
                   </ul>
                   <div class="line-title">
                        <div class="line"></div>
                        <div class="text">商家公告</div>
                        <div class="line"></div>
                   </div>
                   <div class="bulletion-text">
                       <p class="bulletion-content">{{seller.bulletin}}</p>
                   </div>
                </div>
            </div>
            <div class="detail-close" @click="hideDetail">
                ×
            </div>
        </div>
    </div>
</template>
<script type="text/ecmascript-6">
import star from 'components/star/star'
export default{
    data(){
      return{
        detailShow:false
      } 
    },
    props:{
        seller:{
            type:Object
        }
    },
    methods:{
        showDetail(){
            this.detailShow=true;
        },
        hideDetail(){
             this.detailShow=false;
        }
    },
    created(){
        this.classMap=['decrease','discount','special','invoice','guarantee'];
    },
    components:{
        star
    }
}
</script>
<style>
.header{
    position: relative;
    color:#fff;
    background:rgba(7,17,27,0.5);
   overflow: hidden;
}
.avatar img{
    width: 64px;
    height: 64px;
    border-radius: 3px;
}
.content-warp{
    padding:24px 12px 18px 24px;
    font-size: 0;
    position: relative;
}
.avatar{
    display: inline-block;
    vertical-align: top;
}
.content-title{
    display: inline-block;
    font-size: 14px;
    margin-left: 16px;
}
.content-title .title .brand{
    width: 30px;
    height:18px;
    display: inline-block;
    vertical-align: top;
}
.content-title .title .brand img{
    width: 30px;
    height:18px;
    display: inline-block;
}
.content-title .title .name{
    font-size:16px;
    font-weight: 800;
    margin-left: 6px;
    line-height: 18px;
}
.content-title .description{
    margin-bottom: 10px;
    line-height: 12px;
    font-size: 12px;
    margin-top: 8px;
}
.content-title .supports .icon{
    display: inline-block;
    width: 13px;
    height: 13px;
    margin-right: 4px;
    vertical-align: top;
    
}
.content-title .supports .decrease{
    background:url(./img2.png);
    background-size:13px 13px;
    background-repeat: no-repeat;
}
.content-title .supports .discount{
    background:url(./img3.png);
    background-size:13px 13px;
    background-repeat: no-repeat;
}
.content-title .supports .special{
    background:url(./img4.png);
    background-size:13px 13px;
    background-repeat: no-repeat;
}
.content-title .supports .invoice{
    background:url(./img5.png);
    background-size:13px 13px;
    background-repeat: no-repeat;
}

.content-title .supports .guarantee{
    background:url(./img6.png);
    background-size:13px 13px;
    background-repeat: no-repeat;
}

.content-title .supports .text{
    font-size: 12px;
    line-height: 12px;
    vertical-align: top;
}
.support-count{
    position: absolute;
    right:12px;
    bottom:18px;
    padding:0 8px;
    height:24px;
    line-height: 24px;
    border-radius: 14px;
    background:rgba(0, 0, 0, 0.2);
    text-align: center;
}
.support-count .count{
   vertical-align: top;
   font-size: 10px; 
}
.bulletin-warp{
    height:28px;
    line-height:28px;
    padding:0 22px 0 12px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow:ellipsis;
    background: rgba(7,17,27,0.2);

}
.bulletin-warp .bulletin-title{
    display: inline-block;
    width: 22px;
    height: 12px;
}
.bulletin-warp .bulletin-title img{
    display: inline-block;
    width: 22px;
    height: 12px;
    vertical-align: top;
    margin-top: 8px;
}
.bulletin-warp .bulletin-text{
    font-size: 10px;
    margin:0 4px;
    vertical-align: top;
}
.background{
    position: absolute;
    top:0;
    left:0;
    width: 100%;
    height: 100%;
    z-index:-1;
    filter:blur(10px);
}

.detail{
    position: fixed;
    top:0;
    left:0;
    z-index:100;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background:rgba(7,17,27,0.8);

}

.detail .clearfix{
    display: inline-block;
}
.detail .clearfix &:after{
    display: block;
    content:".";
    height:0;
    line-height: 0;
    clear: both;
    visibility: hidden;
}
.detail .detail-warp{
    min-height:100%;
    width: 100%;
}
.detail .detail-warp .detail-main{
    margin-top:64px;
    padding-bottom: 64px;
}
.detail .detail-warp .detail-main .name{
    line-height: 16px;
    text-align: center;
    font-size: 16px;
   font-weight: 700;
}
.detail .detail-warp .detail-main .star-wrap{
    margin-top: 18px;
    padding: 2px 0;
    text-align: center;
}
.detail .detail-warp .detail-main .line-title{
    display:flex;
    width: 80%;
    margin: 30px auto 24px auto;
}
.detail .detail-warp .detail-main .line-title .line{
    flex:1;
    position: relative;
    top:-6px;
    border-bottom:1px solid rgba(255,255,255,0.2) 
}
.detail .detail-warp .detail-main .line-title .text{
    padding:0 12px;
    font-size: 14px;
    line-height: 14px;
    font-weight: 800;
}
.detail .detail-warp .detail-main .list-supports{
    width: 80%;
    margin: 0 auto;
}
.detail .detail-warp .detail-main .list-supports .supports-item{
    padding:0 12px;
    margin-bottom: 12px;
    list-style: none;
}
.detail .detail-warp .detail-main .list-supports .supports-item .icon{
    display: inline-block;
    width: 16px;
    height: 16px;
    vertical-align: top;
    margin-right: 6px;
}
.detail .detail-warp .detail-main .list-supports .supports-item .decrease{
    width: 16px;
    height: 16px;
    background: url(./img2.png);
    background-size:16px 16px;
    background-repeat:no-repeat;
     
}
.detail .detail-warp .detail-main .list-supports .supports-item .discount{
    width: 16px;
    height: 16px;
    background: url(./img5.png);
    background-size:16px 16px;
    background-repeat:no-repeat;
     
}
.detail .detail-warp .detail-main .list-supports .supports-item .special{
    width: 16px;
    height: 16px;
    background: url(./img4.png);
    background-size:16px 16px;
    background-repeat:no-repeat;
     
}

.detail .detail-warp .detail-main .list-supports .supports-item .invoice{
    width: 16px;
    height: 16px;
    background: url(./img6.png);
    background-size:16px 16px;
    background-repeat:no-repeat;
     
}
.detail .detail-warp .detail-main .list-supports .supports-item .guarantee{
    width: 16px;
    height: 16px;
    background: url(./img3.png);
    background-size:16px 16px;
    background-repeat:no-repeat;
     
}
.detail .detail-warp .detail-main .list-supports .supports-item .supports-text{
    line-height: 16px;
    font-size: 12px;
    vertical-align: top;
}
.detail .detail-warp .detail-main .bulletion-text{
    width: 80%;
    margin: 0 auto;
}
.detail .detail-warp .detail-main .bulletion-text .bulletion-content{
    padding: 0 12px;
    line-height: 24px;
    font-size: 12px;
}
.detail .detail-close{
    position: relative;
    width: 32px;
    height: 32px;
    margin: -64px auto 0 auto;
    clear: both;
    font-size: 38px;
}
</style>