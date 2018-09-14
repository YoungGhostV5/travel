<template>
	<div>
		<div class="title">热销推荐</div>
		<ul>
			<li class="item border-bottom" v-for="item of recommendList" :key="item.id">
				<img class="item-img" :src="item.imgUrl" />
				<div class="item-info">
					<p class="item-title">{{item.title}}</p>
					<p class="item-desc">{{item.desc}}</p>
					<button class="item-btn">查看详情</button>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data() {
  	return {
  		recommendList: [{
  			id: '0001',
  			imgUrl: 'http://img1.qunarzz.com/sight/p0/1809/5a/5a830e3948493224a3.water.jpg_200x200_8d0fd369.jpg',
  			title: '世界之窗',
  			desc: '深圳世界之窗是位于深圳湾畔美丽华侨城的大型文化旅游景区。'
  		}, {
  			id: '0002',
  			imgUrl: 'http://img1.qunarzz.com/sight/p0/1807/99/992c99c98928c509a3.water.jpg_200x200_fc4df6ea.jpg',
  			title: '深圳欢乐谷',
  			desc: '全球至尊弹射过山车“雪域雄鹰”飙爽来袭，过山车中的F1！'
  		}, {
  			id: '0003',
  			imgUrl: 'http://img1.qunarzz.com/sight/p0/1508/2e/d9363ce50a88c8c5ff5a138c67687cd4.water.jpg_200x200_1c15c8f5.jpg',
  			title: '深圳野生动物园',
  			desc: '山清水秀的深圳西丽湖畔， 园内奇异多姿的飞禽走兽，幽雅恬静的自然环境。'
  		}, {
  			id: '0004',
  			imgUrl: 'http://img1.qunarzz.com/sight/p0/201307/18/f25ac054eec3804dc8d65eac.jpg_200x200_a008b6ca.jpg',
  			title: '海洋奇梦馆',
  			desc: '深圳欢乐海岸海洋奇梦馆位于欢乐海岸购物中心二楼西侧，占地面积2800平方。'
  		}, {
  			id: '0005',
  			imgUrl: 'http://img1.qunarzz.com/sight/p0/1805/17/176c2114bb8ae255a3.water.png_200x200_a1b6cfdf.png',
  			title: '深圳玛雅水公园',
  			desc: '深圳欢乐谷玛雅水公园是一座以玛雅文化为主题的水上乐园。'
  		}]
  	};
  }
};
</script>

<style lang="stylus" scoped>
	@import '~styles/mixins.styl'

	.title
		margin-top: .2rem
		line-height: .8rem
		background: #eee
		text-indent: .2rem
	.item
		overflow: hidden
		display: flex
		height: 2.4rem
		.item-img
			width: 2rem
			height 2rem
			padding: .2rem
		.item-info
			flex: 1
			padding: .2rem
			min-width: 0
			.item-title
				line-height: .70rem
				font-size: .35rem
				ellipsis()
			.item-desc
				line-height: .5rem
				color: #ccc
				ellipsis()
			.item-btn
				line-height: .55rem
				margin-top: .16rem
				background: #ff9300
				padding: 0 .2rem
				border-radius: .06rem
</style>
