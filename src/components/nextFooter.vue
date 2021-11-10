<template>
  <footer class="footer">
    <div class="container">
      <div class="row">
        <div class="col-md-4 d-flex flex-column justify-content-between">
          <router-link to="home">
            <div class="logo">
              <h3 class="common">NextStep</h3>
            </div>
          </router-link>
          <div class="website">
            <p class="common">nextep.uz 2021</p>
            <p class="common extra">Barcha huquqlar kafolatlangan</p>
          </div>
        </div>
        <div class="col-md-4">
          <ul class="list">
            <li class="list__item">Foydali havolalar</li>
            <li class="list__item">
              <router-link to="/">Bosh sahifa</router-link>
            </li>
            <li class="list__item">Yordam kerakmi?</li>
            <li class="list__item">Foydalanish shartlari</li>
            <li class="list__item">Maxfiylik siyosati</li>
            <li class="list__item">
              <span class="social">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
                    fill="#2F89CE"
                  />
                  <path
                    d="M5.6099 12.225L8.36894 13.253L9.44492 16.713C9.49192 16.947 9.7719 16.994 9.9589 16.854L11.5019 15.591C11.6429 15.451 11.8759 15.451 12.0629 15.591L14.8219 17.602C15.0089 17.742 15.2899 17.649 15.3369 17.415L17.3939 7.59499C17.4409 7.36099 17.2069 7.12799 16.9729 7.22099L5.6099 11.617C5.3299 11.71 5.3299 12.131 5.6099 12.225ZM9.30491 12.739L14.7289 9.419C14.8219 9.372 14.9159 9.512 14.8219 9.559L10.3799 13.721C10.2399 13.861 10.0989 14.048 10.0989 14.282L9.9589 15.404C9.9589 15.544 9.72493 15.591 9.67893 15.404L9.11692 13.347C8.97692 13.113 9.07091 12.832 9.30491 12.739Z"
                    fill="white"
                  />
                </svg>
              </span>
              <span class="social">
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.947 24C19.5744 24 24.947 18.6274 24.947 12C24.947 5.37258 19.5744 0 12.947 0C6.3196 0 0.947021 5.37258 0.947021 12C0.947021 18.6274 6.3196 24 12.947 24Z"
                    fill="#4E6297"
                  />
                  <path
                    d="M18.347 8.291C18.347 7.393 17.555 6.60001 16.656 6.60001H9.83899C8.93999 6.60001 8.14697 7.393 8.14697 8.291V15.109C8.14697 16.007 8.93999 16.8 9.83899 16.8H13.274V12.942H12.005V11.251H13.274V10.564C13.274 9.401 14.119 8.397 15.176 8.397H16.55V10.088H15.176C15.018 10.088 14.859 10.247 14.859 10.564V11.251H16.55V12.942H14.859V16.8H16.656C17.555 16.8 18.347 16.007 18.347 15.109V8.291Z"
                    fill="white"
                  />
                </svg>
              </span>
              <span class="social">
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.4209 24C19.0483 24 24.4209 18.6274 24.4209 12C24.4209 5.37258 19.0483 0 12.4209 0C5.79348 0 0.420898 5.37258 0.420898 12C0.420898 18.6274 5.79348 24 12.4209 24Z"
                    fill="url(#paint0_linear_401:56)"
                  />
                  <path
                    d="M16.3701 7.2H9.07312C8.24912 7.2 7.62109 7.82799 7.62109 8.65199V15.949C7.62109 16.772 8.24912 17.4 9.07312 17.4H16.3701C17.1931 17.4 17.8211 16.772 17.8211 15.949V8.65199C17.8211 7.82799 17.1931 7.2 16.3701 7.2ZM12.7211 15.36C14.4081 15.36 15.7811 14.026 15.7811 12.418C15.7811 12.143 15.7421 11.829 15.6631 11.594H16.5261V15.752C16.5261 15.949 16.3701 16.145 16.1341 16.145H9.30811C9.11211 16.145 8.91614 15.988 8.91614 15.752V11.555H9.81812C9.74012 11.829 9.70013 12.104 9.70013 12.379C9.66113 14.026 11.0341 15.36 12.7211 15.36ZM12.7211 14.183C11.6231 14.183 10.7601 13.32 10.7601 12.261C10.7601 11.202 11.6231 10.339 12.7211 10.339C13.8201 10.339 14.6831 11.202 14.6831 12.261C14.6831 13.359 13.8201 14.183 12.7211 14.183ZM16.4871 9.985C16.4871 10.221 16.2912 10.417 16.0562 10.417H14.9571C14.7221 10.417 14.5261 10.221 14.5261 9.985V8.92599C14.5261 8.69099 14.7221 8.495 14.9571 8.495H16.0562C16.2912 8.495 16.4871 8.69099 16.4871 8.92599V9.985Z"
                    fill="white"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_401:56"
                      x1="5.5209"
                      y1="21.3"
                      x2="21.4209"
                      y2="4.8"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#EEA054" />
                      <stop offset="0.502762" stop-color="#D64763" />
                      <stop offset="1" stop-color="#B62A99" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </li>
          </ul>
        </div>
        <div class="col-md-4">
          <ul class="list">
            <li class="list__item">Biz haqimizda</li>
            <li class="list__item">Manzil:Turin Politexnika Universiteti</li>
            <li class="list__item">Korxona nomi:nextep</li>
            <li class="list__item">Telefon raqam:+998 94 698 36 81</li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  name: "NextFooter",
};
</script>
<style lang="scss" scoped>
a {
  text-decoration: none;
}
ul {
  margin: 0;
  padding: 0;
  li {
    list-style-type: none;
  }
}
.footer {
  user-select: none;
  background: #343a40;
  padding: 20px 0;
  .common {
    font-family: Open Sans, sans-serif;
    color: #fff;
    margin: 0;
  }
  .logo {
    font-weight: bold;
    font-size: 32px;
    line-height: 44px;
    margin-bottom: 32px;
  }
  .website {
    font-weight: 600;
    font-size: 18px;
    line-height: 25px;
    .extra {            
      font-weight: 600;
      font-size: 13px;
      line-height: 18px;
    }
  }
  .list {
    &__item {
      color: #ffffff;
      font-family: Roboto, sans-serif;
      a {
        color: #ffffff;
      }
    }
    &__item:first-child {
      font-weight: bold;
      font-size: 19px;
      line-height: 22px;
    }
    &__item:not(:last-child :first-child) {
      font-size: 14px;
      line-height: 16px;
      margin-bottom: 10px;
    }
    .social:not(:last-child) {
      margin-right: 4px;
    }
  }
}
</style>
