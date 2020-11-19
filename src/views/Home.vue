<template>
  <div class="home">
    <Main />
    <About />
    <Contact />
    <Projects />
    <Footerc />
  </div>
</template>

<script>
import Main from "@/components/Main.vue";
import About from "@/components/About.vue";
import Contact from "@/components/Contact.vue";
import Projects from "@/components/Projects.vue";
import Footerc from "@/components/Footer.vue";
export default {
  name: "Home",
  components: { Main, About, Contact, Projects, Footerc },
  data() {
    return {};
  },
};
</script>
<style lang="scss">
</style>
