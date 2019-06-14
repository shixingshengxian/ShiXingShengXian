<template>
  <div class="fresh-row cart-bottom-wrapper">
    <div class="cart-bottom">
      <div class="cart-bottom-information">
        <div class="select">
          <input type="checkbox">
          <span style="margin-left:5px">全选</span>
        </div>
        <div class="information">
          <div style="text-align:left">
            合计:
            <span class="price">
              ¥
              <span class="price-int">0.</span>00
            </span>
          </div>
          <div class="information-tip">
            已省:
            ¥0.00
            <span style="color: rgb(153, 153, 153);">（已免运费）</span>
          </div>
        </div>
      </div>
      <div class="cart-bottom-action">
        <div class="button is-empty">去结算(0)</div>
        <!---->
      </div>
    </div>
  </div>
</template>

<style scoped>
.cart-bottom-wrapper {
  position: fixed;
  bottom: 3rem;
  width: 100%;
  z-index: 10;
  left: 0;
}

.cart-bottom {
  height: 3.625rem;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  background-color: #fff;
  max-width: 640px;
  margin: 0 auto;
  font-size: 0.875rem;
  padding: 0 1rem;
}

.cart-bottom-information {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  flex: 1;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.select {
  display: flex;
}

*,
:after,
:before {
  box-sizing: inherit;
}

.mn-icon,
.mn-icon-svg {
  width: 1.5rem;
  height: 1.5rem;
}

.mn-icon {
  display: inline-block;
  fill: currentColor;
  text-align: center;
}

.cart-bottom .information {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  flex: 1;
  margin-left: 1rem;
}

.cart-bottom .information-tip {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-wrap: wrap;
  flex-wrap: wrap;
  font-size: 0.75rem;
}

.cart-bottom-action {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.price {
  color: #ff4b46;
  font-size: 0.75rem;
}

.price-int {
  font-size: 1rem;
}

.cart-bottom .button {
  text-align: center;
  width: 6.4rem;
  padding: 0.6rem 0.4rem;
  border-radius: 2rem;
  color: #fff;
  background-image: -webkit-linear-gradient(left, #ff705b, #ff3f57);
  background-image: linear-gradient(90deg, #ff705b, #ff3f57);
}
</style>

