<template>
	<div class="star" :class="starType">
		<span v-for="itemClass in itemClass" :class="itemClass" class="star-item"></span>
	</div>
</template>
<script>
var LENGTH=5;
var CLS_ON='on';
var CLS_HALF='half';
var CLS_OFF='off';
	export default{
		props:{
			size:{
				type:Number
			},
			score:{
				type:Number
			}
		},
		computed:{
			starType(){
				return 'star-'+this.size
			},
			itemClass(){
				var result=[];
				var score=Math.floor(this.score*2)/2;
				var hasDecimal=score%1!==0;
				var integer=Math.floor(score);
				for(var i=0;i<integer;i++){
					result.push(CLS_ON);
				}
				if(hasDecimal){
					result.push(CLS_HALF);
				}
				while(result.length<LENGTH){
					result.push(CLS_OFF);
				}
				return result;
			}
		}
	}
</script>
<style>
	.star .star-item{
		display: inline-block;
		border-radius: no-repeat;
	}
	.star-48 .star-item{
		width: 20px;
		height: 20px;
		margin-right: 22px;
		
	}
	.star-48 &:last-child{
		margin-right: 0;
	}
	.star-48 .on{
		background: url("./img3.png");
		background-size: 20px 20px;
	}
	.star-48 .half{
		background: url("./img1.png");
		background-size: 20px 20px;
	}
	.star-48 .off{
		background: url("./img2.png");
		background-size: 20px 20px;
	}
	.star-36 .star-item{
		width: 15px;
		height: 15px;
		margin-right: 16px;
		
	}
	.star-36 &:last-child{
		margin-right: 0;
	}
	.star-36 .on{
		background: url("./img3.png");
		background-size: 15px 15px;
	}
	star-36 .half{
		background: url("./img1.png");
		background-size: 15px 15px;
	}
	star-36 .off{
		background: url("./img2.png");
		background-size: 15px 15px;
	}


	.star-24 .star-item{
		width: 10px;
		height: 10px;
		margin-right: 3px;
		
	}
	.star-24 &:last-child{
		margin-right: 0;
	}
	.star-24 .on{
		background: url("./img3.png");
		background-size: 10px 10px;
	}
	.star-24 .half{
		background: url("./img1.png");
		background-size: 10px 10px;
	}
	.star-24 .off{
		background: url("./img2.png");
		background-size: 10px 10px;
	}
</style>