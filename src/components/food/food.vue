<template>
    <div v-show="showFlag" class="food" transition="move">
        <div class="food-content">
            <div class="image-header">
                <img :src="food.image" alt="">
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
       props: {
           food: {
               type: Object
           }
       },
       data() {
           return {
               showFlag:false
           };
       },
       methods: {
           show() {
               this.showFlag = true
           }
       }
   }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .food
       position:fixed
       left:0
       top:0
       bottom:48px
       z-index:30
       width: 100%
       background:#fff
       &.move-transition
           transition: all 0.2s linear
           transform: translate3d(0,0,0)
       &.move-enter, &.move-leave
           transform: translate3d(100%,0,0)
       .image-header
           position: relative
           width:100%
           height:0
           padding-top:100%
           img 
               position:absolute
               top:0
               left:0
               width:100%
               height:100%
               
</style>