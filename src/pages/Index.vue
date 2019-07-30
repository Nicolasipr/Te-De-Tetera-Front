<template>
  <b-container class="p-0" fluid>
    <Carousel :slides="slides" fluid/>
    <b-container fluid>
      <b-row class="pt-5 mb-3">
        <div class="section__title text-center">
          <h2 class="title__be--2" v-html="$t('index.newMugs')"></h2>
          <p class="mb-3">{{$t("index.newMugsDescription")}}</p>
          <router-link class="shopbtn" to="mugs">{{$t("common.seeAll")}}</router-link>
        </div>
      </b-row>
      <b-container>
        <b-row>
          <ProductListItem v-for="product in productsByCategory('mugs', 'New')" :info="product" :key="product.id" />
        </b-row>
      </b-container>
    </b-container>
    <b-container class="bg--gray" fluid>
      <b-row class="pt-5 mb-3">
        <div class="section__title text-center">
          <h2 class="title__be--2" v-html="$t('index.newTeapots')"></h2>
          <p class="mb-3">{{$t("index.newTeapotsDescription")}}</p>
          <router-link class="shopbtn" to="teapots">{{$t("common.seeAll")}}</router-link>
        </div>
      </b-row>
      <b-container>
        <b-row>
          <ProductListItem v-for="product in productsByCategory('teapots', 'New')" :info="product" :key="product.id" />
        </b-row>
      </b-container>
    </b-container>
  </b-container>
</template>

<script>
  import Carousel from '../components/Carousel'
  import ProductListItem from '../components/ProductListItem'
  import { mapGetters } from 'vuex'
  
  export default {
    name: 'Index',
    components: {
      Carousel,
      ProductListItem
    },
    computed: {
      ...mapGetters(['productsByCategory'])
    },
    data() {
      return {
        slides: [
          {
            id: 1,
            url: require("../assets/images/bg/tea-leaves.jpg"),
            content: `<h2>Buy <span>your </span></h2>
              <h2>favourite <span>Tea Set </span></h2>
              <h2>from <span>Here </span></h2>
              <a class="shopbtn" href="#">shop now</a>`
          },
          {
            id: 2,
            url: require("../assets/images/bg/tea-leaves.jpg"),
            content: `<h2>The <span>best </span></h2>
              <h2>online <span>teapot shop </span></h2>
              <a class="shopbtn" href="#">shop now</a>`
          }
        ]
      }
    }
  }
</script>

<style lang="css">
  .carousel-caption {
    /*right: 0 !important;*/
    text-align: left !important;
    /*bottom: 25% !important;*/
  }
  .slideImg {
    max-height: 30rem !important;
    object-fit: cover;
  }
  .slideContent {
    color: #3c3c3c;
    text-shadow: none
  }
/*  .slideContent h2 {
    font-size: 2rem;
  }*/
  .slideContent h2 span {
    color: #ce7852;
  }
  div a {
/*    font-size: 1rem;*/
    text-decoration: none !important;
/*    line-height: 4rem;*/
    font-weight: 10;
  }
  div a:hover {
    color: #ce7852;
  }
</style>