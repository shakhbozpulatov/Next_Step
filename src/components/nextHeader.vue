<template>
  <header class="header d-flex justify-content-between">
    <div class="d-flex align-items-center">
      <div class="logo">
        <router-link to="/"><p class="logo_text">NextStep</p></router-link>
      </div>
      <div class="header_pillar"></div>
      <nav class="nav align-items-center">
        <ul class="nav_list d-flex">
          <li class="nav_list-item"><router-link to="/">Home</router-link></li>
          <li class="nav_list-item">
            <router-link to="learn">Learn</router-link>
          </li>
          <li class="nav_list-item"><a href="#">Technology</a></li>
          <li class="nav_list-item"><router-link to="about">About Us</router-link></li>
        </ul>
      </nav>
    </div>
    <div class="header-btns d-flex">
      <router-link to="register"
        ><button class="btn btn_in">Sign in</button></router-link
      >
      <button class="btn btn_up">Sign up</button>
    </div>
  </header>
</template>
<style lang="scss" scoped>
a {
  text-decoration: none !important;
}

ul {
  li {
    list-style-type: none;
  }
}
.header {
  padding: 14px 42px;
  align-items: center;
  background: #AAD5D5;
  width: 100%;
  top: 0;

  .logo {
    &_text {
      font-family: Open Sans, sans-serif;
      font-weight: bold;
      font-size: 32px;
      line-height: 44px;
      color: #5a5a5a;
      margin: 0;
    }
  }

  &_pillar {
    background: #d7e1ef;
    border: 1px solid #d7e1ef;
    height: 78px;
    margin: 0 60px;
  }

  .nav {
    &_list {
      gap: 32px;
      margin: 0;
      padding: 0;
      &-item {
        border: none;
        position: relative;
        a {
          font-family: Open Sans, sans-serif;
          font-weight: bold;
          font-size: 22px;
          line-height: 38px;
          color: #5a5a5a;
          transition: all 0.1s;
        }
      }
      &-item:hover {
        a {
          color: #4b9de9;
          border: none;
        }
      }
      &-item::after {
        content: "";
        position: absolute;
        width: 0px;
        height: 3px;
        left: 50%;
        bottom: 0;
        background-color: #4b9de9;
        transition: all ease-in-out 0.3s;
      }
      &-item:hover::after {
        width: 100%;
        left: 0;
      }
    }
  }

  .header-btns {
    gap: 8px;
    .btn {
      background: #797878;
      border-radius: 5px;
      color: #fff;
      font-family: Roboto;
      font-size: 18px;
      line-height: 21px;
      transition: all 0.3s;
    }
    .btn:hover {
      color: #5a5a5a;
      background: #fff;
    }
  }
}
</style>
