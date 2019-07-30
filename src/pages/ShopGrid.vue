<template>
  <b-container class="bg--gray" fluid>
    <b-container class="header__margin pl-5 pr-5">
      <b-row>
          <b-col lg="12">
              <div class="bradcaump__inner text-center mt-5">
                <h2 class="bradcaump-title mb-3">{{type}}</h2>
                <p class="bradcaump-content">{{$t(`shopGrid.descriptions.${type}`)}}</p>
              </div>
          </b-col>
      </b-row>
      <b-row class="pt-5 pb-5">
        <b-col lg="3" cols="12">
          <div class="shop__sidebar">
            <aside class="wedget__categories poroduct--cat">
              <h3 class="wedget__title">{{$t('common.categories')}}</h3>
              <ul>
                <li class="pl-1 pr-1"><router-link :to="type" @click.native="handleFilter($t('shopGrid.all'))" :class="selectedCategory === $t('shopGrid.all') ? 'active' : ''">{{$t('shopGrid.all')}}</router-link></li>
                <li v-for="category in $t(`common.categoriesList.${type}`)" :key="category" class="pl-1 pr-1"><router-link :to="`${type}?f=${category}`" @click.native="handleFilter(category)" :class="selectedCategory === category ? 'active' : ''">{{category}}</router-link></li>
              </ul>
            </aside>
          </div>
        </b-col>
        <b-col lg="9" cols="12" class="pb-5">
          <div class="shop__list__wrapper d-flex flex-wrap flex-md-nowrap justify-content-center pl-3 pr-3">
            <!-- <p>{{`${$t('shopGrid.showing')} 1–12 ${$t('shopGrid.of')} ${filtered.length} ${$t('shopGrid.results')}`}}</p> -->
            <div class="orderby__wrapper">
              <span>{{$t('shopGrid.sortBy')}}</span>
              <select class="shot__byselect" v-model="sortOption" @change="handleSort">
                <option value="newest">{{$t('shopGrid.sortOptions.newest')}}</option>
                <option value="nameAZ">{{$t('shopGrid.sortOptions.nameAZ')}}</option>
                <option value="nameZA">{{$t('shopGrid.sortOptions.nameZA')}}</option>
                <option value="priceL2H">{{$t('shopGrid.sortOptions.priceL2H')}}</option>
                <option value="priceH2L">{{$t('shopGrid.sortOptions.priceH2L')}}</option>
              </select>
            </div>
          </div>
          <b-row>
            <ProductGridItem v-for="product in filtered" :key="product.id" :info="product"/>
          </b-row>
          <!-- <ul class="wn__pagination mt-3">
            <li class="active"><a href="#">1</a></li>
            <li><a href="#">2</a></li>
            <li><a href="#">3</a></li>
            <li><a href="#">4</a></li>
          </ul> -->
        </b-col>
      </b-row>
    </b-container>
  </b-container>
</template>

<script>
import ProductGridItem from '../components/ProductGridItem'
import { mapGetters } from 'vuex'

export default {

  name: 'ShopGrid',
  components: {
    ProductGridItem
  },
  computed: {
    ...mapGetters(['productsByType', 'productsByCategory']),
    products() {
      return this.productsByType(this.type)
    },
  },
  props: {
    type: String,
    category: String
  },
  data () {
    return {
      filtered: [],
      selectedCategory: this.$t('shopGrid.all'),
      sortOption: 'newest'
    }
  },
  created () {
    this.filtered = this.products
    if(this.$attrs.filter) {
      this.selectedCategory = this.$attrs.filter
      this.handleFilter(this.$attrs.filter)
    }
  },
  methods: {
    handleFilter(category) {
      this.selectedCategory = category
      this.filtered = category !== 'All' ? this.productsByCategory(this.type, category) : this.products
      this.handleSort()
    },
    handleSort() {
      switch(this.sortOption) {
        case 'newest':
          this.filtered.sort((a,b) => b.id - a.id)
          break

        case 'nameAZ':
          this.filtered.sort((a,b) => a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1)
          break

        case 'nameZA':
          this.filtered.sort((a,b) => a.name.toLowerCase() > b.name.toLowerCase() ? -1 : 1)
          break

        case 'priceL2H':
          this.filtered.sort((a,b) => a.price - b.price)
          break

        case 'priceH2L':
          this.filtered.sort((a,b) => b.price - a.price)
          break

        default:
          this.filtered = this.products
      }
    }
  }
}
</script>

<style lang="css" scoped>
</style>