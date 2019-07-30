<template>
  <b-row>
    <b-carousel
      id="carousel-index"
      :interval="3000"
      controls
      background="#ababab"
    >
      <b-carousel-slide v-for="slide in slides" :key="slide.id">
          <img
            slot="img"
            class="d-block img-fluid w-100 slideImg"
            :src="slide.url"
            alt="image slot"
          >
          <div class="slideContent" v-html="slide.content"></div>
      </b-carousel-slide>
    </b-carousel>
  </b-row>
</template>

<script>
export default {

  name: 'Carousel',
  props: {
    slides: Array
  }
}
</script>

<style lang="css" scoped>
</style>