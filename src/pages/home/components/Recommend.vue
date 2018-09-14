<template>
	<div>
		<div class="title">热销推荐</div>
		<ul>
			<li class="item border-bottom" v-for="item of list" :key="item.id">
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
  props: {
    list: Array
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
