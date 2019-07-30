<template>
  <b-container class="bg--gray" fluid>
    <b-container class="header__margin pl-5 pr-5 pt-5">
      <b-row>
        <b-col lg="12">
          <div class="section__title--3 text-center pb--30">
            <h2>{{$t('about.ourStory')}}</h2>
          </div>
        </b-col>
      </b-row>
      <b-row class="pb-5 justify-content-center">
        <b-col cols="12" class="text-justify">
          <p class="mt--20 mb--20">{{$t('about.story')}}</p>
        </b-col>
      </b-row>
      <b-row>
        <b-col lg="12">
          <div class="section__title--3 text-center">
            <h2>{{$t('about.meetOurTeam')}}</h2>
          </div>
        </b-col>
      </b-row>
      <b-row class="d-flex justify-content-center">
        <!-- Start Single Team -->
        <b-col lg="4" md="4" sm="6" cols="12">
          <div class="wn__team">
            <div class="thumb">
              <img src="../assets/images/about/team/1.jpg" alt="Team images">
            </div>
            <div class="content text-center">
              <h4>{{$t('about.gloriaName')}}</h4>
              <p>{{$t('about.gloriaRole')}}</p>
<!--               <ul class="team__social__net">
                <li><a href="#"><FontAwesome :icon="['fab', 'facebook']"></FontAwesome></a></li>
                <li><a href="#"><FontAwesome :icon="['fab', 'instagram']"></FontAwesome></a></li>
              </ul> -->
            </div>
          </div>
        </b-col>
        <b-col lg="4" md="4" sm="6" cols="12">
          <div class="wn__team">
            <div class="thumb">
              <img src="../assets/images/about/team/2.jpg" alt="Team images">
            </div>
            <div class="content text-center">
              <h4>{{$t('about.catName')}}</h4>
              <p>{{$t('about.catRole')}}</p>
<!--               <ul class="team__social__net">
                <li><a href="#"><FontAwesome :icon="['fab', 'facebook']"></FontAwesome></a></li>
                <li><a href="#"><FontAwesome :icon="['fab', 'instagram']"></FontAwesome></a></li>
              </ul> -->
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </b-container>
</template>

<script>
export default {
  name: 'About',
}
</script>

<style lang="css" scoped>
</style>