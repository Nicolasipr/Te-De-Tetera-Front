<template>
  <b-col cols="12" lg="4" md="4" sm="6" class="pt-3 pb-3">
    <div class="product">
      <div class="product__thumb">
        <a class="first__img" href="single-product.html"><img src="../assets/images/product/1.jpg" alt="product image"></a>
        <a class="second__img animation1" href="single-product.html"><img src="../assets/images/product/2.jpg" alt="product image"></a>
        <ul class="prize position__right__bottom d-flex">
          <li>{{$t('common.currencySymbol')+info.price}}</li>
          <li class="old_prize" v-if="info.oldPrice">{{$t('common.currencySymbol')+info.oldPrice}}</li>
        </ul>
      </div>
      <div class="product__content d-flex flex-column align-items-center">
        <p><a href="single-product.html">{{info.name}}</a></p>
        <ul class="rating d-flex">
          <li class="on" v-for="n in info.stars" :key="'starOn#'+n"><FontAwesome icon="star" class="star"></FontAwesome></li>
          <li v-for="n in 5-info.stars" :key="'starOff#'+n"><FontAwesome icon="star" class="star"></FontAwesome></li>
        </ul>
      </div>
    </div>
  </b-col>
</template>

<script>
export default {
  name: 'ProductGridItem',
  props: {
    info: Object
  }
}
</script>

<style lang="css" scoped>
</style>