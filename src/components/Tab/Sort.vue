<template>
  <div class="fresh-app">
    <div class="fresh-stage">
      <div class="fresh-rows">
        <div class="fresh-row" style="position: relative;">
          <div class="category-flexes">
            <div data-v-e73a4f8c class="category-flex category-menu">
              <div data-v-e73a4f8c class="mn-scroller is-hide-bar">
                <div class="mn-scroller-contents">
                  <!---->
                  <ul data-v-e73a4f8c class="category-menu-list">
                    <li
                      data-v-e73a4f8c
                      v-for="(s,index) in arr"
                      :key="index"
                      @click="gaoliang(index)"
                    >
                      <a data-v-e73a4f8c href="#" :class="{'is-active':bool ===index}" v-text="s"></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="category-flex category-contents">
              <div class="mn-scroller is-hide-bar">
                <div class="mn-scroller-contents">
                  <div class="category-contents-container">
                    <div>
                      <div class="category-banner">
                        <Swipe class="lunbo"></Swipe>
                        <!-- 右边部分 -->
                        <div class="category-section">
                          <div class="category-square">
                            <div
                              class="category-square-item"
                              v-for="(s) in news"
                              :key="s.pid"
                              @click="xiangqing(s.pid)"
                            >
                              <div class="image">
                                <div class="mn-image">
                                  <div
                                    class="mn-image-holder"
                                    style="padding-bottom: 100%; background-image: url(&quot;undefined&quot;);"
                                  ></div>
                                  <img :src="s.img" class="mn-image-source is-active">
                                </div>
                              </div>
                              <div class="title" v-text="s.title"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swipe from "../AllCommon/Swipe.vue";
import Axios from "axios";
export default {
  components: {
    Swipe
  },
  data() {
    return {
      news: [],
      aLuanXu: [],
      arr: [
        "推荐分类",
        "蔬菜豆菇",
        "新鲜水果",
        "鲜肉蛋禽",
        "水产海鲜",
        "乳品烘焙",
        "面点速食",
        "名厨配菜",
        "粮油调味",
        "冰淇淋",
        "休闲零食",
        "酒水饮料",
        "酒水饮料",
        "厨卫百货",
        "个护美妆",
        "营养保健",
        "母婴用品"
      ],
      bool: 0
    };
  },
  mounted() {
    this.getNew();
  },
  methods: {
    getNew() {
      Axios.get(
        "https://www.easy-mock.com/mock/5cee272db198552aa3fde20d/example/123"
      ).then(data => {
        // console.log(data);
        //   console.log(123);
        this.news = data.data;
      });
    },
    gaoliang(i) {
      this.bool = i;
    },
    xiangqing(id){
      this.$router.push({
        name:'goodsdetail',
        params:{id}
      })
    }
  }
};
</script>

<style lang="scss" scoped>
*,
:after,
:before {
  box-sizing: inherit;
}
.category-menu-list > li > a.is-active {
  background: #fff;
  border-left: 0.1875rem solid #45ac2a;
  color: #45ac2a;
}
.category-section {
  margin-bottom: 2rem;
}
.category-square {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-wrap: wrap;
  flex-wrap: wrap;
  margin: 0 -0.25rem;
}
.category-square-item > .image {
  margin-bottom: 0.5rem;
}
.mn-image-holder {
  display: none;
  width: 100%;
  background-color: #ddd;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  -webkit-filter: blur(3.125rem);
  filter: blur(3.125rem);
}
.category-square-item > .title {
  font-size: 0.875rem;
  text-align: center;
  color: #333;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.category-square-item {
  width: 33.3%;
  //   padding: 0 0.25rem;
  margin-bottom: 1rem;
  img {
    width: 5rem;
    height: 5rem;
  }
}
.lunbo {
  height: 6.25rem;
}
.category-contents {
  position: relative;
  background: #fff;
}
.category-flex {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  flex: 1;
}
.mn-scroller {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
}
.category-contents-container {
  padding: 0.5rem;
}
.category-banner {
  width: 100%;
  height: -webkit-calc((100vw - 6.25rem - 1rem)/440 * 160);
  height: calc((100vw - 6.25rem - 1rem) / 440 * 160);
  max-height: -webkit-calc((40rem - 6.25rem - 1rem)/440 * 160);
  max-height: calc((40rem - 6.25rem - 1rem) / 440 * 160);
  margin-bottom: 1rem;
}
.category-menu-list > li > a {
  display: block;
  text-decoration: none;
  color: #666;
  height: 2.875rem;
  line-height: 2.875rem;
  text-align: center;
}
.category-menu-list > li > a.is-active {
  background: #fff;
  border-left: 0.1875rem solid #45ac2a;
  color: #45ac2a;
}
li {
  display: list-item;
  text-align: -webkit-match-parent;
}
.category-menu-list > li {
  border-bottom: 0.0625rem solid #dfdfdf;
}
.category-menu-list {
  width: 100%;
  list-style: none;
  padding: 0;
  margin: 0;
  padding-bottom: 3rem;
}
.mn-scroller {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
}
.category-menu {
  position: relative;
  -webkit-box-flex: 0;
  -webkit-flex: 0 0 6.25rem;
  flex: 0 0 6.25rem;
  border-right: 0.0625rem solid #ddd;
}
.category-flexes {
  position: absolute;
  width: 100%;
  height: 100%;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
}
.fresh-row {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  flex: 1;
}
.fresh-app {
  position: relative;
  width: 100%;
  max-width: 40rem;
  margin: 0 auto;
  height: 100%;
}
.fresh-stage {
  position: relative;
  width: 100%;
  height: 100%;
}
.fresh-rows {
  position: relative;
  width: 100%;
  height: 100%;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  flex-direction: column;
}
</style>
