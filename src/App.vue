<template>
  <div id="app">
    <Navbar />
    <main id="page-wrap">
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </main>
  </div>
</template>
<script>
import Navbar from "@/components/Navbar.vue";
export default {
  components: { Navbar },
};
</script>
<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
