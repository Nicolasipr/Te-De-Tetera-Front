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
      <br>
      <b-row class="d-flex justify-content-start align-items-center">
        <!-- Start Single Team Gloria -->
        <b-col lg="4" md="4" sm="6" cols="12">
          <div class="wn__team ">
            <div class="thumb">
              <img src="../assets/images/about/team/gloria.jpg" alt="Team images">
            </div>
            <div class="content text-center">
              <h4>{{$t('about.gloriaName')}}</h4>
              <p>{{$t('about.gloriaRole')}}</p>

            </div>
          </div>
        </b-col>
        <b-col lg="8" md="8" sm="6" cols="12">
            <!--          Description -->
            <div class="text-justify ">
              <p> {{$t('about.gloriaDescription1')}}</p>
              <br>
              <p>{{$t('about.gloriaDescription2')}}  </p>
              <br>
              <p>{{$t('about.gloriaDescription3')}}  </p>
            </div>
        </b-col>
      </b-row>
<!--      Benito -->
      <b-row class="d-flex justify-content-end align-items-center"  >
<!--        Description-->
        <b-col lg="8" md="8" sm="6" cols="12">
          <!--          Description -->
          <div class="text-justify ">
            <p> {{$t('about.catDescription1')}}</p>
            <br>
            <p>{{$t('about.catDescription2')}}  </p>
          </div>
        </b-col>
        <!--        card -->
        <b-col lg="4" md="4" sm="6" cols="12">
          <div class="wn__team">
            <div class="thumb">
              <img src="../assets/images/about/team/benito.jpg" alt="Team images">
            </div>
            <div class="content text-center">
              <h4>{{$t('about.catName')}}</h4>
              <p>{{$t('about.catRole')}}</p>
            </div>
          </div>
        </b-col>
      </b-row>
<!--      Viole -->
      <b-row class="d-flex justify-content-start align-items-center">
        <!-- Start Single Team Gloria -->
        <b-col lg="4" md="4" sm="6" cols="12">
          <div class="wn__team ">
            <div class="thumb">
              <img src="../assets/images/about/team/viole.jpg" alt="Team images">
            </div>
            <div class="content text-center">
              <h4>{{$t('about.violeName')}}</h4>
              <p>{{$t('about.violeRole')}}</p>

            </div>
          </div>
        </b-col>
        <b-col lg="8" md="8" sm="6" cols="12">
          <!--          Description -->
          <div class="text-justify ">
            <p> {{$t('about.violeDescription')}}</p>
            <br>
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