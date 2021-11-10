<template>
  <div>
    <next-header />
    <div class="microcontroller">
      <h3 class="title">Modules</h3>
      <div class="container">
        <div class="row">
          <div v-for="(elem, index) in Controllers" :key="index" class="col-4">
            <div class="card-item d-flex align-items-center">
              <div class="img-part">
                <img :src="elem.img" alt="" />
              </div>
              <div class="line"></div>
              <div class="right-part">
                <h4 v-if="elem.title.length <= 10" class="mc-name1">{{ elem.title }}</h4>
                <h4 v-else class="mc-name2">{{ elem.title }}</h4>
                <p class="text">
                  {{ elem.text }}
                </p>
                <router-link to="#" class="readmore">
                  <span class="btn-readmore">Read More</span>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import NextHeader from "../../components/nextHeader.vue";
export default {
  name: "Microcontroller",
  components: {
    NextHeader,
  },
  data() {
    return {
      titleLogic: false,
      Controllers: [
        {
          img: require("../../assets/images/mod1.png"),
          title: "Connection",
          text: "Prosfessional loyhalarni qilishga mo'ljallangan,ancha kuchli  mikrokontroller. Lorem ipsum lorem ipsum",
        },
        {
          img: require("../../assets/images/mod2.png"),
          title: "Schemes and technicues",
          text: "Iot loyhalarni qilishga mo'ljallangan arzon , kam  quvvatli ajoyib mikrokontroller",
        },
        {
          img: require("../../assets/images/mod3.png"),
          title: "Sensores",
          text: "Judayam arzon kichik kompyuter va shu bilan birga mikrokontroller Lorem ipsum lorem ipsum",
        },
        {
          img: require("../../assets/images/mod4.png"),
          title: "Drivers and engines",
          text: "Prosfessional loyhalarni qilishga mo'ljallangan,ancha kuchli mikrokontroller.",
        },
        {
          img: require("../../assets/images/mod5.png"),
          title: "Display",
          text: "Sanoatda avtomatlashtirish uchun ishlatiladigan kuchli kontroller Lorem ipsum lorem ipsum lorem ",
        },
      ],
    };
  }, 
};
</script>
<style lang="scss" scoped>
a {
  text-decoration: none;
}
.microcontroller {
  padding: 32px 0 50px;
  box-sizing: border-box;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  background-image: url("../../assets/images/bg-modules.png");
  .title {
    font-family: Open Sans, sans-serif;
    font-weight: bold;
    font-size: 48px;
    line-height: 65px;
    color: #ffffff;
    text-align: center;
    margin-bottom: 60px;
  }
  .card-item {
    transition: all 0.3s;
    background: #ffffff;
    border-radius: 10px;
    gap: 20px;
    padding: 20px;
    box-sizing: border-box;
    width: 100%;
    max-width: 392px;
    min-height: 233px;
    margin-top: 18px;
    .img-part {
      img {
        transition: 0.3s;
      }
    }
    .line {
      border: 1px solid #747474;
      height: 160px;
    }
    .right-part {
      .mc-name1 {
        font-family: Open Sans, sans-serif;
        font-weight: 600;
        font-size: 32px;
        line-height: 49px;
        color: #0065b3;
      }
      .mc-name2 {
        font-family: Open Sans, sans-serif;        
        font-weight: 600;
        font-size: 24px;
        line-height: 30px;
        color: #0065b3;
      }
      .text {
        font-family: Open Sans, sans-serif;
        font-weight: 600;
        font-size: 13px;
        line-height: 18px;
        color: #828282;
        margin-bottom: 22px;
      }
      .readmore {
        display: block;
        text-align: end;
        .btn-readmore {
          font-family: Open Sans, sans-serif;
          font-weight: bold;
          font-size: 11px;
          line-height: 15px;
          color: #ffffff;
          background: #5ab2f1;
          border-radius: 125px;
          padding: 5px 18px;
        }
      }
    }
  }
  .card-item:hover {
    cursor: pointer;
    box-shadow: rgba(202, 201, 201, 0.25) 0px 54px 55px,
      rgba(190, 188, 188, 0.527) 0px -12px 30px,
      rgba(202, 202, 202, 0.555) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px,
      rgba(0, 0, 0, 0.09) 0px -3px 5px;
    img {
      transform: scale(1.1);
    }
  }
}
</style>
