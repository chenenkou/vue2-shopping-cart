<template>
  <div id="app">
    <cart-nav></cart-nav>
    <transition name="slide-fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import Nav from './components/Nav'

export default {
  name: 'app',
  components: {
    cartNav: Nav
  }
}
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-active {
  opacity: 0
}

/* 准备入场 */
.slide-fade-enter{
  transform: translateX(10px);
  opacity: 0;
}
/* 正在入场 */
.slide-fade-enter-active {
  transition: all .3s ease;
}
/* 准备离场 */
.slide-fade-leave {
}
/* 正在离场 */
.slide-fade-leave-active {
}

</style>
