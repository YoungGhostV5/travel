<template>
    <div>
        <detail-banner></detail-banner>
        <detail-header></detail-header>
        <div class="content">
            <detail-list :list="list"></detail-list>
        </div>
    </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
import axios from 'axios'

export default {
    name: 'Detail',
    components: {
        DetailBanner,
        DetailHeader,
        DetailList
    },
    data() {
        return {
            sightName: '',
            bannerImg: '',
            gallaryImgs: [],
            categoryList: []
        }
    },
    methods: {
        getDetailInfo() {
            axios.get('/api/detail.json', {
                params: {
                    id: this.$route.params.id
                }
            }).then(this.handleGetDataSucc)
        },
        handleGetDataSucc(res) {
            res = res.data
            if (res.ret && res.data) {
                const data = res.data
                this.sightName = data.sightName
                this.bannerImg = data.bannerImg
                this.gallaryImgs = data.gallaryImgs
                this.categoryList = data.categoryList
            }
        }
    },
    mounted() {
        this.getDetailInfo()
    },
    data() {
        return {
            list: [{
                title: '成人票',
                children: [{
                    title: '成人套餐票A',
                    children: [{
                        title: '成人套餐票A — 七天酒店'
                    }, {
                        title: '成人套餐票A — 如家酒店'
                    }]
                }, {
                    title: '成人套餐票B'
                }]
            }, {
                title: '学生票'
            } ,{
                title: '儿童票'
            }, {
                title: '特惠票'
            }]
        }
    }
}
</script>

<style lang="stylus" scoped>
    .content
        height: 50rem
</style>