<template>
  <header
    id="wn__header"
    class="header__area header__absolute sticky__header"
    :class="!onTop ? 'is-sticky' : ''"
    :style="onTop ? 'margin-top: 25px' : ''"
  >
    <b-container fluid>
      <b-row>
        <b-col cols="6" md="6" sm="6" lg="2">
          <div class="logo">
            <router-link to="/">
              <img class="logo-image" src="../assets/images/logo/te-de-tetera-logoi-black.png" alt="logo images">
            </router-link>
          </div>
        </b-col>
        <b-col lg="8" class="d-none d-lg-block">
          <nav class="mainmenu__nav">
            <ul class="meninmenu d-flex justify-content-start">
              <li class="drop with--one--item"><router-link to="/">{{$t('header.menus.home')}}</router-link></li>
              <li class="drop with--one--item"><router-link to="/about">{{$t('header.menus.about')}}</router-link></li>
              <li class="drop with--one--item"><router-link to="/Sets">{{$t('header.menus.sets')}}</router-link></li>
              <li class="drop">
                <router-link to="/mugs">{{$t('header.menus.mugs')}}</router-link>
                <div class="megamenu mega02">
                  <ul class="item item02">
                    <li class="title">{{$t('common.categories')}}</li>
                    <li v-for="category in $t('common.categoriesList.mugs')" :key="'mugs.'+category"><router-link :to="`mugs?f=${category}`">{{category}}</router-link></li>
                  </ul>
                  <ul class="item item02">
                    <li><router-link class="shopbtn" to="mugs">{{$t('common.seeAll')}}</router-link></li>
                  </ul>
                </div>
              </li>
              <li class="drop">
                <router-link to="/teapots">{{$t('header.menus.teapots')}}</router-link>
                <div class="megamenu mega02">
                  <ul class="item item02">
                    <li class="title">{{$t('common.categories')}}</li>
                    <li v-for="category in $t('common.categoriesList.teapots')" :key="'teapots.'+category"><router-link :to="`teapots?f=${category}`">{{category}}</router-link></li>
                  </ul>
                  <ul class="item item02">
                    <li><router-link class="shopbtn" to="teapots">{{$t('common.seeAll')}}</router-link></li>
                  </ul>
                </div>
              </li>
              <li class="drop with--one--item"><router-link to="/contact">{{$t('header.menus.contact')}}</router-link></li>
            </ul>
          </nav>
        </b-col>
        <b-col md="6" sm="6" lg="2">
          <ul class="header__sidebar__right d-flex justify-content-end align-items-center">
            <li class="shopcart" v-b-tooltip.hover :title="$t('header.seeCart')"><router-link class="cartbox_active" to="cart"><span class="product_qun">3</span></router-link>
            <li class="setting__bar__icon" v-b-tooltip.hover :title="$t('header.settings')"><a class="setting__active" @click="openSettings = !openSettings"></a>
              <div class="searchbar__content setting__block is-visible" tabindex="-1" @blur="closeSettings" v-focus v-if="openSettings">
                <div class="content-inner">
                  <div class="switcher-currency">
                    <strong class="label switcher-label">
                      <span>{{$t("header.currency")}}</span>
                    </strong>
                    <div class="switcher-options" @click="openCurrencies = !openCurrencies">
                      <div class="switcher-currency-trigger">
                        <span class="currency-trigger">USD - US Dollar</span>
                        <span class="currency-trigger">CLP - Chilean Peso</span>
                        <!-- <ul class="switcher-dropdown" :class="openCurrencies ? 'is-visible' : ''">
                          <li>CLP - Peso Chileno</li>
                        </ul> -->
                      </div>
                    </div>
                  </div>
                  <div class="switcher-currency">
                    <strong class="label switcher-label">
                      <span>{{$t("header.language")}}</span>
                    </strong>
                    <div class="switcher-options" @click="openLanguages = !openLanguages">
                      <div class="switcher-currency-trigger">
                        <span class="currency-trigger" @click="setLang('en')">English</span>
                        <span class="currency-trigger" @click="setLang('es')">Spanish</span>
                        <!-- <ul class="switcher-dropdown" :class="openLanguages ? 'is-visible' : ''">
                          <li>Español</li>
                        </ul> -->
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </b-col>
      </b-row>
    </b-container>  
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      onTop: true,
      openSettings: false,
      openCurrencies: false,
      openLanguages: false,
    }
  },
  watch: {
    '$route' (to) {
      if(to.name !== 'index') {
        window.removeEventListener('scroll', this.handleScroll);
        this.onTop = false
      }
      else {
        this.handleScroll()
        window.addEventListener('scroll', this.handleScroll);
      }
    }
  },
  methods: {
    setLang: function (lang) {
          this.$i18n.locale = lang;
    },
    handleScroll() {
      const scrollValue = document.body.scrollTop + document.documentElement.scrollTop
      this.onTop = scrollValue < 250
    },
    closeSettings() {
      this.openSettings = false
      this.openCurrencies = false
      this.openLanguages = false
    },
  },
  created() {
    if(this.$route.name === 'index')
      window.addEventListener('scroll', this.handleScroll);
    else
      this.onTop = false
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  },
  directives: {
    focus: {
      inserted: function (el) {
        el.focus()
      }
    }
  },
}
</script>

<style lang="css" scoped>
.logo-image {
  
  margin-top: -8px;
  padding-bottom: 100px;
  height: auto;
  width: 100px;
}
</style>