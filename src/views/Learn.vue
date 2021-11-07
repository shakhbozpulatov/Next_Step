<template>
  <div class="learn">
    <next-header />
    <div class="container d-flex align-items-center gap-4">
      <div class="card-wrap">
        <h3 class="subject">Microcontrol</h3>
        <div class="card-item">
          <div class="img-card">
            <img src="@/assets/images/microcontroller.png" alt="" />
          </div>
          <div class="text-wrap">
            <h4 class="title">Microcontrollers</h4>
            <p class="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Provident, recusandae.
            </p>
            <h4 class="title">Arduino</h4>
            <p class="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Provident, recusandae.
            </p>
            <h4 class="title">ESP 32</h4>
            <p class="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Provident, recusandae.
            </p>
          </div>
        </div>
      </div>
      <div class="card-wrap">
        <h3 class="subject">Language</h3>
        <div class="card-item">
          <div class="img-card">
            <img src="@/assets/images/lang.png" alt="" />
          </div>
          <div class="text-wrap">
            <h4 class="title">Arduino code</h4>
            <p class="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Provident, recusandae.
            </p>
            <h4 class="title">C++</h4>
            <p class="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Provident, recusandae.
            </p>
            <h4 class="title">Python</h4>
            <p class="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Provident, recusandae.
            </p>
          </div>
        </div>
      </div>
      <div class="card-wrap">
        <h3 class="subject">Modules</h3>
        <div class="card-item">
          <div class="img-card">
            <img src="@/assets/images/modules.png" alt="" />
          </div>
          <div class="text-wrap">
            <h4 class="title">Modules</h4>
            <p class="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Provident, recusandae.
            </p>
            <h4 class="title">Sensors</h4>
            <p class="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Provident, recusandae.
            </p>
            <h4 class="title">Displays</h4>
            <p class="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Provident, recusandae.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import nextHeader from '../components/nextHeader.vue';
export default {
  components: { nextHeader },
  name: "Learn",
};
</script>
<style lang="scss" scoped>
.learn {
  background-color: #ebebeb;
  .card-wrap {
    margin-top: 60px;
    .subject {
      text-align: center;
      font-family: Open Sans, sans-serif;
      font-weight: bold;
      font-size: 36px;
      line-height: 49px;
      color: #000000;
    }
    .card-item {
      background: #ffffff;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 10px;
      max-width: 350px;
      margin-bottom: 62px;
      .img-card {
        width: 100%;
      }
      .text-wrap {
        padding: 20px 24px;
        .title {
          font-family: Roboto, sans-serif;
          font-weight: 500;
          font-size: 24px;
          line-height: 28px;
          color: #0065b3;
          margin-bottom: 4px;
        }
        .text {
          font-family: Roboto, sans-serif;          
          font-weight: 500;
          font-size: 14px;
          line-height: 16px;          
          color: #4f4f4f;
        }
      }
    }
  }
}
</style>
