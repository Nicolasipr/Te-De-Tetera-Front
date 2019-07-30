<template>
    <b-col cols="12" lg="3" md="4" sm="6" class="product product__style--3" :style="related ? 'max-width: 100%' : ''">
      <div class="product__thumb">
        <router-link :to="`product/${info.id}`" class="first__img"><img :src="info.img1" alt="product image"></router-link>
        <router-link :to="`product/${info.id}`" class="second__img animation1"><img :src="info.img2" alt="product image"></router-link>
        <div class="hot__box" v-if="info.label">
          <span class="hot-label">{{info.label}}</span>
        </div>
      </div>
      <div class="product__content content--center">
        <h4 class="name"><a :href="info.url">{{info.name}}</a></h4>
        <ul class="prize d-flex">
          <li>{{$t('common.currencySymbol')+info.price}}</li>
          <li v-if="info.oldPrice" class="old_prize">{{$t('common.currencySymbol')+info.oldPrice}}</li>
        </ul>
        <div class="action">
          <div class="actions_inner">
            <ul class="add_to_links">
              <li><a class="cart" href="cart.html" v-b-tooltip.hover :title="$t('common.addToCart')"><FontAwesome icon="shopping-cart"></FontAwesome></a></li>
            </ul>
          </div>
        </div>
        <div class="product__hover--content">
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

  name: 'ProductListItem',
  props: {
    info: Object,
    related: Boolean
  },
}
</script>

<style lang="css">
  .productContainer {
    max-width: 100%
  }
  .star {
    color: #3c3c3c;
  }
  .on .star {
    color: #ce7852;
  }
</style>