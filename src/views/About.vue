<template>
  <div class="about">
    <next-header />
    <div class="about__intro">
      <h2 class="title">Come help us the education the world deserves</h2>
    </div>
    <div class="about__mission">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <h4 class="title">About Nextep</h4>
            <p class="text">
              When we started Nextep, our goal was to give anyone in the world
              the ability to learn the skills they’d need to succeed in the 21st
              century. We set out to create a new, interactive way of learning —
              making it engaging, flexible, and accessible for as many people as
              possible. Since then, we have helped millions of people worldwide
              unlock modern technical skills and reach their full potential
              through coding and creating.
            </p>
          </div>
          <div class="col-md-6">
            <h4 class="title">Our Mission</h4>
            <p class="text">
              We want to create a world where anyone can build something
              meaningful with technology, and everyone has the learning tools,
              resources, and opportunities to do so. Nextep contains a world of
              possibilities — all that’s required is the curiosity and drive to
              learn. At Nextep, we are committed to empowering all people,
              regardless of where they are in their coding journeys, to continue
              to learn, grow, and make an impact on the world around them.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="about__team">
      <div class="container">
        <h3 class="title">Our Team</h3>
        <div class="row">
          <div class="col-md-3">
            <div class="member">
              <div class="img-wrapper">
                <img src="@/assets/images/me2.png" alt="" />
              </div>
              <p class="member__name">Po'latov Shaxbozbek</p>
              <p class="member__job">Front End Developer</p>
            </div>
          </div>
          <div class="col-md-3">
            <div class="member">
              <div class="img-wrapper">
                <img src="@/assets/images/me.png" alt="" />
              </div>
              <p class="member__name">Po'latov Shaxbozbek</p>
              <p class="member__job">Front End Developer</p>
            </div>
          </div>
          <div class="col-md-3">
            <div class="member">
              <div class="img-wrapper">
                <img src="@/assets/images/me2.png" alt="" />
              </div>
              <p class="member__name">Po'latov Shaxbozbek</p>
              <p class="member__job">Front End Developer</p>
            </div>
          </div>
          <div class="col-md-3">
            <div class="member">
              <div class="img-wrapper">
                <img src="@/assets/images/me.png" alt="" />
              </div>
              <p class="member__name">Po'latov Shaxbozbek</p>
              <p class="member__job">Front End Developer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <next-footer />
  </div>
</template>
<script>
import NextFooter from '../components/nextFooter.vue';
import nextHeader from "../components/nextHeader.vue";
export default {
  name: "About",
  components: { nextHeader, NextFooter },
};
</script>
<style lang="scss" scoped>
.about {
  &__intro {
    padding: 50px 0;
    background: #5d30da80;
    .title {
      font-family: Open Sans, sans-serif;
      font-weight: bold;
      font-size: 72px;
      line-height: 84px;
      color: #4f4f4f;
      max-width: 790px;
      margin: 0 auto;
      text-align: center;
      width: 100%;
    }
  }
  &__mission {
    padding: 40px 0;
    .title {
      font-family: Roboto, sans-serif;
      font-weight: bold;
      font-size: 32px;
      line-height: 42px;
      color: #000000;
    }
    .text {
      font-family: Roboto, sans-serif;
      font-size: 18px;
      line-height: 32px;
      color: #000000;
      margin: 0;
    }
  }
  &__team {
    background: #5d30da80;
    padding: 48px 0 120px;
    .title {
      text-align: center;
      font-family: Roboto, sans-serif;
      font-weight: bold;
      font-size: 48px;
      line-height: 56px;
      color: #4f4f4f;
      margin-bottom: 50px;
    }
    .member {
      text-align: center;
      .img-wrapper {
        width: 150px;
        height: 150px;
        margin: 0 auto;
        border-radius: 50%;
        overflow: hidden;
        img {
          text-align: center;
          width: 100%;
          height: 100%;
        }
      }
      &__name {
        font-family: Roboto, sans-serif;
        font-weight: bold;
        font-size: 27px;
        line-height: 20px;
        color: #4f4f4f;
        margin: 24px 0 12px;
      }
      &__job {
        font-family: Roboto, sans-serif;
        font-weight: bold;
        font-size: 20px;
        line-height: 22px;
        color: #828282;
      }
    }
  }
}
</style>
