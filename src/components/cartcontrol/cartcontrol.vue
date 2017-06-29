<template>
    <div class='cartcontrol'>
        <transition name="fade">
           <div class='cart-decrease' v-show='food.count>0' @click="decreaseCart">
              <span class="inner icon-remove_circle_outline"></span>
            </div>
        </transition>
        <div class='cart-count' v-show='food.count>0'>{{food.count}}</div>
        <div class='cart-add icon-add_circle' @click="addCart"></div>
    </div>
</template>

<script type='text/ecmascript-6'>
    import Vue from 'vue';

    export default {
        props: {
            food: {
                type: Object
            }
        },
        methods: {
            addCart(event) {
                if(!event._constructed){
                    return;
                }
                console.log('点击生效！')
                if(!this.food.count){
                    Vue.set(this.food,'count',1);
                }else{
                    this.food.count++;
                }
                this.$emit('cart.add',event.target);
            },
            decreaseCart(event) {
                if(!event._constructed){
                    return;
                }
                if(this.food.count){
                    this.food.count--;
                }
            }
        }
    };
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .cartcontrol
        font-size:0
        .cart-decrease
            display:inline-block
            padding:6px
            &.fade-enter-active, &.fade-leave-active
                 transition:all 0.3s linear
            &.fade-enter-active
                 opacity:1
                 transform:rotate(0deg) translate3D(0,0,0)
            &.fade-leave-active
                 opacity:0
                 transform:rotate(0deg) translate3D(24px,0,0)
            &.fade-enter,&.fade-leave
                 opacity:0
                 transform:rotate(0deg) translate3D(24px,0,0)
            .inner
                display:inline-block
                line-height:24px
                font-size:24px
                color:rgb(0,160,220)
        .cart-count
            display:inline-block
            vertical-align: top
            width:12px
            padding-top:6px
            line-height:24px
            text-align:center
            font-size:10px
            color: rgb(147,153,159)
        .cart-add
            display:inline-block
            padding:6px
            line-height:24px
            font-size:24px 
            color:rgb(0,160,220)          
</style>