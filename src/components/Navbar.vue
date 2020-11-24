<template>
  <nav class="nav">
    <div class="logo">
      <img
        src="https://raw.githubusercontent.com/alifaraji64/eagle-css/eef997d938788fd69dc328ba1859da4c344640ba/Asset%202.svg"
        alt="logo"
        width="50"
      />
    </div>
    <div class="hamburger" @click="hamburgerToggle" ref="hamburger">
      <span class="bar"></span>
      <span class="bar"></span>
      <span class="bar"></span>
    </div>
    <aside ref="menu">
      <div class="close" @click="hamburgerToggle">
        <span></span>
        <span></span>
      </div>
      <ul>
        <li v-for="(link, index) in links" :key="index">
          <a :href='"#"+link.toLowerCase()'>{{ link }}</a>
        </li>
      </ul>
    </aside>
  </nav>
</template>

<script>
export default {
  components: {},
  methods: {
    hamburgerToggle() {
      let menu = this.$refs.menu;
      menu.classList.toggle("is-open");
    },
    goto(link) {
      this.$router.push(link.toLowerCase());
    },
  },
  data() {
    return {
      links: ["Contact", "About", "Projects"],
    };
  },
};
</script>

<style lang='scss'>
nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: purple;
  border-bottom: 2px solid rgba(0, 0, 0, 0.4);
  .logo {
    img {
      padding-top: 5px;
      transform: scale(1.6);
      margin-left: 10px;
    }
  }
  .hamburger {
    width: 30px;
    height: 30px;
    cursor: pointer;
    margin-right: 30px;
    span {
      display: block;
      width: 100%;
      height: 4px;
      background-color: white;
      margin: 3.5px 0;
    }
  }
  aside {
    display: none;
    position: absolute;
    right: 0;
    top: 0;
    max-width: 330px;
    width:0;
    background: #d81b60;
    height: 100%;
    z-index: 1000;
    transform: translateX(360px);
    transition: all 0.5s ease-in;
    .close {
      width: 30px;
      height: 30px;
      cursor: pointer;
      margin-right: 10px;
      margin-top: 12px;
      span {
        display: block;
        width: 100%;
        height: 4px;
        background-color: white;
        margin: 3.5px 0;
        transform-origin: 33% 30%;
        &:nth-child(1) {
          transform: rotateZ(45deg);
        }
        &:nth-child(2) {
          transform: rotateZ(-45deg);
        }
      }
    }
    ul {
      list-style: none;
      text-align: center;
      li {
        margin: 1.5rem;
        border: 1px solid purple;
        padding: 5px;
        color: white;
        cursor: pointer;
        &:hover {
          background-color: purple;
        }
        a{
          padding:8px 110px
        }
      }
    }
  }
  .is-open {
    transform: translateX(0);
    width:100%;
    display: block;
    ul li {
      animation: scaling 1.1s 0.5s 1 forwards ease-in;
    }
  }
}
@keyframes scaling {
  0% {
    transform: scale(1.3);
  }
  25% {
    transform: scale(0.8);
  }
  50% {
    transform: scale(1.3);
  }
  75% {
    transform: scale(0.8);
  }
  100% {
    transform: scale(1);
  }
}
</style>