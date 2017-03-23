<template>
  <div class="full-height">
    <router-view :class="'vux-pop-' + (direction === 'forward' ? 'in' : 'out')"></router-view>
  </div>
</template>

<script>

export default {
  data(){
    return{
      direction:'forward',
    }
  }
}

</script>

<style lang="less">
@import '~vux/src/styles/reset.less';

body {
  background-color: #fbf9fe;
}

/**
* vue-router transition
*/
.router-view {
  width: 100%;
  animation-duration: 0.5s;
  animation-fill-mode: both;
  backface-visibility: hidden;
}
.vux-pop-out-enter-active,
.vux-pop-out-leave-active,
.vux-pop-in-enter-active,
.vux-pop-in-leave-active {
  will-change: transform;
  height: 100%;
  position: absolute;
  left: 0;
}
.vux-pop-out-enter-active {
  animation-name: popInLeft;
}
.vux-pop-out-leave-active {
  animation-name: popOutRight;
}
.vux-pop-in-enter-active {
  perspective: 1000;
  animation-name: popInRight;
}
.vux-pop-in-leave-active {
  animation-name: popOutLeft;
}
@keyframes popInLeft {
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}
@keyframes popOutLeft {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
}
@keyframes popInRight {
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}
@keyframes popOutRight {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
}
</style>
