<template>
    <div class="homelist">
       <buytime></buytime>
        <morewidth></morewidth>
        <div class="home-title">
            <div><img src="http://pic2.34580.cn/group1/M00/C0/C4/wKgNY1z-aDKAdLnJAACkPjWKjFA55.jpeg" alt=""></div>
            <div><img src="http://pic2.34580.cn/group1/M00/C0/E5/wKgNY1z_A02AOA8XAAEnjrcVIyo97.jpeg" alt=""></div>
        </div>
    </div>
</template>


<script>
import buytime from '../AllCommon/BuyTime.vue' ;
import morewidth from '../AllCommon/MoreWidth.vue'
export default {
    components: {
        buytime,morewidth
    }
};
</script>

<style lang="scss" scoped>
.homelist{
    .home-title{
        display: flex;
        padding: 0 10px;
        justify-content: space-between;
        div{
            width: 48%;img{
                width: 100%;
            }
        }
    }
}
</style>
