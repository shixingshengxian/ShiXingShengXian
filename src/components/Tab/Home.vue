<template>
    <div class="home">
       <headers></headers>
       <swipe></swipe>
        <homecontent></homecontent>

    </div>
</template>

<script>
import headers from '../AllCommon/Header.vue'
import swipe from '../AllCommon/Swipe.vue'
import homecontent from '../Home/HomeContent.vue'
export default {
    data() {
        return {
            
        }
    },
    components: {
        headers,swipe,homecontent
    }
}
</script>

<style lang="scss" scoped>
.home{
    padding-top: 50px;
}
</style>
