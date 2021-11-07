<template>
  <div class="register d-flex">
    <div class="left">
      <div class="logo">
        <router-link to="/"><p class="logo_text">NextStep</p></router-link>
      </div>
      <div class="left_item">
        <h3 class="title">Learn microcontrols with nextep</h3>
        <p class="text">
          Make your own robots and create various sructures and learn new
          languages for yourself
        </p>
        <div class="img-group d-flex">
          <img class="phy-img" src="@/assets/images/phyton.png" alt="" />
          <img class="scheme-img" src="@/assets/images/scheme.png" alt="" />
        </div>
      </div>
    </div>
    <div class="right">
      <h4 class="title">Create Account</h4>
      <div class="via-faang">
        <button class="btn">
          <img src="@/assets/images/google.png" alt="" />
          Continue with Google
        </button>
        <button class="btn">
          <img src="@/assets/images/facebook.png" alt="" />
          Continue with Facebook
        </button>
      </div>
      <div class="or d-flex align-items-center justify-content-center">
        <span class="line"></span>
        <p>or</p>
        <span class="line"></span>
      </div>
      <div>
        <form @submit.prevent="submit">
          <div
            class="form-group"
            :class="{ 'form-group--error': $v.form.name.$error }"
          >
            <input
              v-model.trim="$v.form.name.$model"
              class="form__input"
              type="text"
              placeholder="Full Name"
              required
            />
          </div>
          <!-- <div class="error" v-if="!$v.form.name.required">
            Name is required
          </div> -->
          <div
            class="form-group"
            :class="{ 'form-group--error': $v.form.email.$error }"
          >
            <input
              v-model.trim="$v.form.email.$model"
              class="form__input"
              type="email"
              placeholder="Email Address"
              required
            />
          </div>
          <!-- <div class="error" v-if="!$v.form.email.required">
            Name is required
          </div> -->
          <div
            class="form-group"
            :class="{ 'form-group--error': $v.form.passport.$error }"
          >
            <input
              v-model.trim="$v.form.passport.$model"
              class="form__input"
              type="password"
              placeholder="Password"
              required
            />
          </div>
          <!-- <div class="error" v-if="!$v.form.passport.required">
            Name is required
          </div> -->
          <button
            :disabled="submitStatus === 'PENDING'"
            type="submit"
            class="button"
          >
            Create Account
          </button>
        </form>
        <p class="login">
          Already have an account?
          <router-link to="/register">Login</router-link>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import { required } from "vuelidate/lib/validators";
export default {
  name: "Register",
  data() {
    return {
      form: {
        name: "",
        email: "",
        passport: "",
      },
      submitStatus: null,
    };
  },
  validations: {
    form: {
      name: {
        required,
      },
      passport: {
        required,
      },
      email: {
        required,
      },
    },
  },
  methods: {
    submit() {
      console.log("submit");
      this.$v.$touch();
      if (this.$v.invalid) {
        this.submitStatus = "ERROR";
      } else {
        this.submitStatus = "PENDING";
        setTimeout(() => {
          this.submitStatus = "OK";
        }, 500);
      }
    },
  },
};
</script>
<style lang="scss" scoped>
a {
  text-decoration: none;
}
.register {
  .left {
    background: #aad5d5;
    padding: 30px;
    max-width: 434px;
    width: 100%;
    height: 100vh;
    .logo {
      &_text {
        font-family: Open Sans, sans-serif;
        font-weight: bold;
        font-size: 28px;
        line-height: 44px;
        color: #fff;
        margin: 0;
      }
    }
    &_item {
      color: #ffffff;
      .title {
        font-family: Poppins, sans-serif;
        font-weight: bold;
        font-size: 36px;
        line-height: 40px;
        margin: 30px 0 14px;
      }
      .text {
        font-family: Roboto, sans-serif;
        font-size: 16px;
        line-height: 25px;
      }
      .img-group {
        position: relative;
        img {
          position: absolute;
        }
        .phy-img {
          left: 10px;
          top: 30px;
        }
        .scheme-img {
          left: 150px;
          top: 110px;
        }
      }
    }
  }
  .right {
    background: #fff;
    padding: 80px 138px 50px;
    width: 100%;
    .title {
      font-family: Poppins, sans-serif;
      font-weight: 600;
      font-size: 28px;
      line-height: 42px;
      color: #525252;
      margin-bottom: 25px;
    }
    .via-faang {
      display: flex;
      gap: 24px;
      .btn {
        width: 100%;
        background: #ffffff;
        border-radius: 30px 0px 0px 30px;
        border: 1px solid #e8e8e8;
        box-sizing: border-box;
        border-radius: 6px;
        font-family: Poppins, sans-serif;
        font-weight: 600;
        font-size: 12px;
        line-height: 18px;
        color: #a1a1a1;
        padding: 8px 12px;
        width: 100%;

        img {
          margin-right: 12px;
        }
      }
    }
    .or {
      font-family: Poppins, sans-serif;
      font-weight: 500;
      font-size: 14px;
      line-height: 21px;
      color: #a1a1a1;
      text-align: center;
      margin: 40px 0;
      gap: 4px;
      p {
        margin: 0;
      }
      .line {
        width: 8px;
        border: 1px solid #a1a1a1;
      }
    }
    form {
      display: flex;
      flex-direction: column;
      gap: 20px;
      .form-group {
        display: flex;
        flex-direction: column;
        .form__input {
          border: none;
          border-bottom: 1px solid #e8e8e8;
          font-family: Poppins, sans-serif;
          font-weight: 500;
          font-size: 14px;
          line-height: 21px;
          color: #000;
          padding: 8px 0;
          outline: none;
        }
      }
      .button {
        width: 100%;
        background: #8bb3b3;
        border-radius: 6px;
        font-family: Poppins, sans-serif;
        font-weight: 600;
        font-size: 16px;
        line-height: 24px;
        color: #ffffff;
        outline: none;
        padding: 8px 0;
        border: 1px solid #8bb3b3;
        margin-top: 20px;
        transition: all 0.35s;
      }
      .button:hover {
        background: #778b8b;
      }
    }
    .login {
      font-family: Poppins, sans-serif;      
      font-size: 14px;
      line-height: 21px;      
      color: #a1a1a1;
      margin: 0;
      margin-top: 20px;
    }
  }
}
</style>
