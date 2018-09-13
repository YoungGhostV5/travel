<template>
	<div class="wrapper">
		<swiper :options="swiperOption">
		  <swiper-slide v-for="item of swiperList" :key="item.id">
				<img class="swiper-img" :src="item.imgUrl" />
			</swiper-slide>
			<div class="swiper-pagination"  slot="pagination"></div>
	    </swiper>
	</div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data() {
  	return {
  		swiperOption: {
  			pagination: '.swiper-pagination',
  			loop: true,
  			autoplay: 2000,
  		},
  		swiperList: [{
  			id: '0001',
  			imgUrl: 'http://img1.qunarzz.com/piao/fusion/1808/18/2dbce82b07a23402.jpg_750x200_14356b03.jpg',
  		}, {
  			id: '0002',
  			imgUrl: 'http://img1.qunarzz.com/piao/fusion/1809/28/869966be5963e102.jpg_750x200_f23248ba.jpg',
  		}, {
  			id: '0003',
  			imgUrl: 'http://img1.qunarzz.com/piao/fusion/1808/18/2dbce82b07a23402.jpg_750x200_14356b03.jpg',
  		}, {
  			id: '0004',
  			imgUrl: 'http://img1.qunarzz.com/piao/fusion/1809/cc/94c4565e59038102.jpg_750x200_44746f2d.jpg',
  		}, {
  			id: '0005',
  			imgUrl: 'http://img1.qunarzz.com/piao/fusion/1808/3e/f1975f6bde70b202.jpg_750x200_c28601f0.jpg',
  		}],
  	};
  },
};
</script>

<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
  	background: #fff
  .wrapper
  	overflow: hidden
  	width: 100%
  	height: 0
  	padding-bottom: 26.67%
  	background: #eee
  	.swiper-img
  		width: 100%
</style>
