<template>
  <div class="home">
    <next-header />
    <section class="intro">
      <div class="container d-flex justify-content-between">
        <div>
          <div class="search-bar">
            <div class="input-wrapper">
              <input
                class="search-input"
                type="text"
                placeholder="Search for"
                v-model="query"
                @blur="searchResultVisible = false"
                @focus="searchResultVisible = true"
              />
              <div v-if="query.length > 0" @click="reset" class="clean">&times;</div>
            </div>
            <div
              v-if="query.length > 0 && searchResultVisible"
              class="result-bar"
            >
              <h3 class="title">Title here</h3>
              <p class="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                culpa reprehenderit voluptatem doloribus, officiis nobis
                laboriosam vitae repellat, nostrum quasi cumque.
              </p>
              <hr />
              <p class="result">
                No results for '<b>{{ query }}</b
                >'
              </p>
            </div>
          </div>
          <p class="leader-text">The Leader in Learning Cloud</p>
          <div class="heading-text-wrap">
            <h1 class="heading-text">Learn by doing with Next Step</h1>
          </div>
          <div class="desc-heading">
            <p class="description">
              Learn faster. Move faster. Transform your courses. We recommend
              you the best ability to learn new things or improve your skills.
            </p>
          </div>
        </div>
        <div class="intro-img-wrapper d-flex flex-column gap-4">
          <img src="@/assets/images/intro-img1.png" alt="" />
          <img src="@/assets/images/intro-img2.png" alt="" />
        </div>
      </div>
    </section>
    <div class="cards-wrapper">
      <div
        class="container d-flex align-items-center justify-content-center gap-4"
      >
        <router-link to="learn">
          <div class="cards d-flex align-items-center">
            <div class="img-part back-color-dark">
              <img src="@/assets/images/website.png" alt="" />
            </div>
            <div class="text-part">
              <h4 class="heading">Learn</h4>
              <p class="text">
                Discover training paths by role, subject matter or technology
              </p>
            </div>
          </div>
        </router-link>
        <div class="cards d-flex align-items-center">
          <div class="img-part back-color-medium">
            <img src="@/assets/images/communities.png" alt="" />
          </div>
          <div class="text-part">
            <h4 class="heading">Community</h4>
            <p class="text">
              Ask questions and learn from others in the technical community
            </p>
          </div>
        </div>
        <router-link to="about">
          <div class="cards d-flex align-items-center">
            <div class="img-part back-color3-light">
              <img src="@/assets/images/chat.png" alt="" />
            </div>
            <div class="text-part">
              <h4 class="heading">About us</h4>
              <p class="text m-10">Find here about us and apply to our team</p>
            </div>
          </div>
        </router-link>
      </div>
    </div>
    <next-footer />
  </div>
</template>

<script>
import NextFooter from "../components/nextFooter.vue";
import NextHeader from "../components/nextHeader.vue";
export default {
  name: "Home",
  components: {
    NextHeader,
    NextFooter,
  },
  data() {
    return {
      query: "",
      searchResultVisible: false,
    };
  },
  methods:{
    reset(){
      this.query = ''
    }
  },
};
</script>
<style lang="scss" scoped>
a {
  text-decoration: none;
}
.intro {
  background: url("../assets/images/backimg.png") no-repeat center center;
  user-select: none;
  padding: 34px 0 72px;
  .search-bar {
    max-width: 428px;
    margin-bottom: 28px;
    position: relative;
    .input-wrapper {
      position: relative;
      width: 100%;
      .search-input {
        background: #ffffff;
        width: 100%;
        border-radius: 5px;
        font-family: Open Sans, sans-serif;
        font-weight: bold;
        font-size: 13px;
        line-height: 18px;
        color: #181515;
        padding: 8px 12px;
        outline: none;
        border: 1px solid #a55ff5;
      }
      .clean{
        position: absolute;
        top: 6px;        
        right: 10px;
        cursor: pointer;
      }
    }
    .result-bar {
      position: absolute;
      font-family: Open Sans, sans-serif;
      top: 44px;
      left: 0;
      background: #fff;
      border-radius: 10px;
      padding: 14px;
      .title,
      .text,
      .result {
        margin: 0;
      }
      .title {
        font-size: 24px;
        font-weight: bold;
        margin-bottom: 8px;
      }
      .text {
        font-size: 15px;
      }
    }
  }
  .leader-text {
    font-family: Open Sans, sans-serif;
    font-weight: bold;
    font-size: 24px;
    line-height: 33px;
    color: #ffb034;
  }
  .heading-text-wrap {
    max-width: 542px;
    .heading-text {
      width: 100%;
      font-family: Open Sans, sans-serif;
      font-weight: 800;
      font-size: 55px;
      line-height: 75px;
      letter-spacing: 0.15em;
      color: #ffffff;
    }
  }
  .desc-heading {
    max-width: 568px;
    margin-top: 28px;
    .description {
      width: 100%;
      font-family: Roboto, sans-serif;
      font-size: 28px;
      line-height: 33px;
      letter-spacing: 0.15em;
      color: #ffffff;
    }
  }
  .intro-img-wrapper {
    max-width: 375px;
    img {
      transition: all 0.3s;
      width: 100%;
    }
  }
}
.cards-wrapper {
  height: 140px;
  position: relative;
  .container {
    position: absolute;
    bottom: 50px;
    left: 10%;
    .cards {
      max-width: 294px;
      width: 100%;
      background: #ffffff;
      border-radius: 10px;
      cursor: pointer;
      height: 120px;
      transition: all 0.3s;
      .img-part {
        width: 10px;
        height: 100%;
        transition: all 0.3s;
        padding: 32px 10px;
        img {
          opacity: 0;
          transition: all 0.3s;
        }
      }
      .back-color-dark {
        background: #0065b3;
        border-radius: 10px 0px 0px 10px;
      }
      .back-color-medium {
        background: #0091ff;
        border-radius: 10px 0px 0px 10px;
      }
      .back-color3-light {
        background: #4db2ff;
        border-radius: 10px 0px 0px 10px;
      }
      .text-part {
        padding: 20px;
        max-height: 120px;
        height: 100%;
        .heading {
          font-family: Open Sans, sans-serif;
          font-weight: bold;
          font-size: 18px;
          line-height: 25px;
          color: #565aaf;
          margin-bottom: 4px;
        }
        .text {
          font-family: Open Sans, sans-serif;
          font-weight: 600;
          font-size: 12px;
          line-height: 15px;
          color: #4f4f4f;
          margin: 0;
        }
        .m-10 {
          margin-bottom: 18px;
        }
      }
    }
    .cards:hover {
      .img-part {
        width: 74px;
        padding: 32px 10px;
        img {
          opacity: 1;
        }
      }
    }
  }
}
</style>
