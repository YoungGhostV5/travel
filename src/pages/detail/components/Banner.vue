<template>
    <div>
        <div class="banner" @click="handleBannerClick">
            <img class="banner-img" src="http://img1.qunarzz.com/sight/p0/1603/9d/9d8c0e9a01bba92e90.water.jpg_600x330_18d5b736.jpg" alt="">
            <div class="banner-info">
                <p class="banner-title">锦绣中华民俗村(AAAAA景区)</p>
                <p class="banner-number">
                    <span class="iconfont banner-icon">&#xe692;</span>
                    39
                </p>
            </div>
        </div>
        <common-gallery :imgs="imgs" v-show="showGallery" @close="handleGalleryClose"></common-gallery>
    </div>
</template>

<script>
import CommonGallery from 'common/gallery/Gallery'

export default {
    name: 'DetailBanner',
    data() {
        return {
            showGallery: false,
            imgs: ['http://img1.qunarzz.com/sight/p0/201309/24/8569aa6427fda869c8d65eac.jpg_r_800x800_9530e6f4.jpg', 'http://img1.qunarzz.com/sight/p0/201403/04/a895ad32e2815a392fe161c121927221.jpg_r_800x800_aa8700c0.jpg']
        }
    },
    components: {
        CommonGallery
    },
    methods: {
        handleBannerClick() {
            this.showGallery = true;
        },
        handleGalleryClose() {
            this.showGallery = false;
        }
    }
}
</script>

<style lang="stylus" scoped>
    .banner
        position: relative
        overflow: hidden
        height: 0
        padding-bottom: 55%
        .banner-img
            width: 100%
        .banner-info
            display: flex
            position: absolute
            left: 0
            right: 0
            bottom: 0
            line-height: .6rem
            color: #fff
            background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));
            .banner-title
                flex: 1
                font-size: .32rem
                padding: 0 .2rem
            .banner-number
                height: .32rem
                line-height: .32rem
                padding: 0 .4rem
                margin-top: .14rem
                border-radius: .2rem
                background: rgba(0, 0, 0, .8)
                font-size: .24rem
                .banner-icon
                    font-size: .24rem
</style>