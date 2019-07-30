<template>
  <b-container class="bg--gray" fluid>
    <b-container class="header__margin pl-5 pr-5">
      <b-row class="pt-5 pb-5">
        <b-col lg="9" cols="12" class="pb-5">
          <b-row>
            <b-col lg="4" cols="12" class="product product__style--3">
              <div class="product__thumb">
                <a class="first__img"><img :src="info.img1" alt="product image"></a>
                <a class="second__img animation1"><img :src="info.img2" alt="product image"></a>
                <div class="hot__box" v-if="info.label">
                  <span class="hot-label">{{info.label}}</span>
                </div>
              </div>
            </b-col>
            <b-col lg="6" cols="12" class="d-flex align-items-center">
              <div class="product__info__main">
                <h1>{{info.name}}</h1>
                <div class="product-info-stock-sku d-flex">
                  <p>{{$t('singleProduct.availability')}}:<span> {{info.available ? $t('singleProduct.inStock') : $t('singleProduct.outOfStock')}}</span></p>
                </div>
                <div class="price-box" v-if="info.available">
                  <span>{{$t('common.currencySymbol')+info.price}}</span>
                </div>
                <div class="box-tocart d-flex" v-if="info.available">
                  <span>{{$t('singleProduct.quantity')}}</span>
                  <input id="qty" class="input-text qty" name="qty" min="1" value="1" :title="$t('singleProduct.quantity')" type="number">
                  <div class="addtocart__actions">
                    <button class="tocart" type="submit" :title="$t('common.addToCart')">{{$t('common.addToCart')}}</button>
                  </div>
                </div>
              </div>
            </b-col>
          </b-row>
          <b-row>
            <div class="product__info__detailed">
              <div class="pro_details_nav nav justify-content-start" role="tablist">
                <a class="nav-item nav-link active">Details</a>
              </div>
              <div class="tab__container">
                <div class="pro__tab_label tab-pane fade active show" id="nav-details" role="tabpanel">
                  <div class="description__attribute" v-html="info.description"></div>
                </div>
              </div>
            </div>
          </b-row>
        </b-col>
        <b-col lg="3" cols="12">
          <div class="shop__sidebar">
            <aside class="wedget__categories poroduct--cat">
              <h3 class="wedget__title">Related Products</h3>
              <ProductListItem :info="info" related/>
              <ProductListItem :info="info" related/>
            </aside>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </b-container>
</template>

<script>

import ProductListItem from '../components/ProductListItem'

export default {
  name: 'SingleProduct',
  components: {
    ProductListItem
  },
  computed: {
    info() {
      return this.$store.getters.productById(this.id)
    }
  },
  props: {
    id: String
  }
}
</script>

<style lang="css" scoped>
  .product__info__main {
    height: 60%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
</style>