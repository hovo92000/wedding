<template>
  <section>
    <div class="image-animation">
     <div class="voice-indicator" @click="toggleSound">
      <img
        class="sound-off"
        src="./assets/icons/sound_off.png"
        alt=""
        v-show="!isSoundOn"
      />
      <img
        class="sound-on"
        src="./assets/icons/sound_on.png"
        alt=""
        v-show="isSoundOn"
      />
      <audio ref="audioRef" loop :src="song"></audio>
    </div>
      <div class="left-img" :style="leftStyle"></div>
      <div class="right-img" :style="rightStyle"></div>
      <div class="text-box"   v-animateonscroll="{
        enterClass: 'animate-enter fadein animation-duration-2000',
        leaveClass: 'animate-leave fadeout'
      }">
          <div class="text-box-title">
            SAVE THE DATE
          </div>
          <div class="text-box-name-container">
            <img width="270px" src="./assets/images/title.png" alt="">
          </div>
          <div class="text-box-date">01.08.2025</div>
          <div class="text-box-img-container">
            <img class="text-box-img1" src="./assets/images/section1Img.jpg" alt="">
            <img class="text-box-img2" src="./assets/images/section1Img2.png" alt="">
          </div>
      </div>
    </div>
    <Section2/>
    <Section3/>
    <Section4/>
    <Section5/>
    <Section6/>
    <Section7/>
  </section>
</template>


<script setup>
import { reactive, ref, onMounted, onBeforeUnmount } from 'vue';
import Section2 from './components/Section2.vue';
import Section3 from './components/Section3.vue';
import Section4 from './components/Section4.vue';
import Section5 from './components/Section5.vue';
import Section6 from './components/Section6.vue';
import Section7 from './components/Section7.vue';
import song from "./assets/audio/song.mp3"
const DESIGN_WIDTH = 1440;
const animate = ref(false);
const isSoundOn = ref(false);
const audioRef = ref(null);

const leftStyle = reactive({});
const rightStyle = reactive({});

const toggleSound = () => {
  isSoundOn.value = !isSoundOn.value;
  const audio = audioRef.value;

  if (audio) {
    if (isSoundOn.value) {
      audio.play();
    } else {
      audio.pause();
    }
  }
};

const updateImageStyles = () => {
  const screenWidth = window.innerWidth;
  const offset = Math.max((screenWidth - DESIGN_WIDTH) / 2, 0);

  leftStyle.width = `${screenWidth}px`;
  leftStyle.left = `-${offset}px`;
  leftStyle.transform = animate.value ? `translateX(-100%)` : `translateX(0%)`;

  rightStyle.width = `${screenWidth}px`;
  rightStyle.right = `-${offset}px`;
  rightStyle.transform = animate.value ? `translateX(100%)` : `translateX(0%)`;
};

onMounted(() => {
  updateImageStyles();
  window.addEventListener('resize', updateImageStyles);

  // Delay to trigger animation
  setTimeout(() => {
    animate.value = true;
    updateImageStyles();
  }, 100); // can adjust timing if needed
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateImageStyles);
});
</script>



<style lang="scss">
@font-face {
  font-family: arial-black;
  font-weight: 400;
  src: url(@/assets/fonts/arial-black.ttf);
}
@font-face {
  font-family: arial-rus;
  font-weight: 300;
  src: url(@/assets/fonts/arial-rus.otf);
}
@font-face {
  font-family: arial-black-ru;
  font-weight: 400;
  src: url(@/assets/fonts/arial-black-ru.ttf);
}
@font-face {
  font-family: mardoto-black;
  font-weight: 400;
  src: url(@/assets/fonts/mardoto-black.TTF);
}
@font-face {
  font-family: mardoto-light;
  font-weight: 300;
  src: url(@/assets/fonts/mardoto-light.TTF);
}
@font-face {
  font-family: mardoto-regular;
  font-weight: 300;
  src: url(@/assets/fonts/mardoto-regular.TTF);
}
@font-face {
  font-family: arial-regular;
  font-weight: 400;
  src: url(@/assets/fonts/arial-regular.ttf);
}

@font-face {
  font-family: arial-light;
  font-weight: 300;
  src: url(@/assets/fonts/arial-light.ttf);
}

@font-face {
  font-family: montserratarm-regular;
  font-weight: 400;
  src: url(@/assets/fonts/Montserratarm-Regular.otf) format("truetype");
  font-style: normal;
}
@font-face {
  font-family: montserratarm-light;
  font-weight: 300;
  src: url(@/assets/fonts/Montserratarm-Light.otf) format("truetype");
  font-style: normal;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: $backgroundColor;
}
#app {
  min-height: auto;
  display: flex;
  flex-direction: column;
}
.grecaptcha-badge {
  display: none !important;
}
.fixed-header{
  display: none;
}
h1,h2,h3,h4,h5,h6{
  font-family: arial-black;
  text-transform: uppercase;
  font-size: 50px;
}
/* html[lang='ru']{
  h1,h2,h3,h4,h5,h6{
    font-family: arial-black-ru;
  }
} */
/* html[lang='am']{
  h1,h2,h3,h4,h5,h6{
    font-family:mardoto-black;
  }
} */
@media screen and (max-width: 1000px) {
  h1,h2,h3,h4,h5,h6{
    font-size: 30px;
  }
}

.image-animation{
  display: flex;
  position: relative;
  overflow: hidden;
  // min-height: 100vh;
  .text-box{
    padding-top: 40px;
    max-width: 650px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 10px;
    .text-box-title{
      font-family: montserratarm-regular;
      text-align: center;
      font-size: 25px;
      color: #504129;
    }
    .text-box-name-container{
      user-select: none;
      font-family: montserratarm-regular;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2px;
      text-align: center;
      img{
       user-select: none;
      }
    }
    .text-box-date{
       font-size: 18px;
        color: #504129;
        text-align: center;
    }
    .text-box-img-container{
      display: flex;
      // flex-direction: column;
      // align-items: center;
      justify-content: flex-end;
      position: relative;
      .text-box-img1{
        width: 60%;
        object-fit: contain;
      }
      .text-box-img2{
        width: 22%;
        // height: 100%;
        object-fit: cover;
        // position: absolute;
        right: -200px;
      }
    }
  }
  .voice-indicator{
    user-select: none;
    cursor: pointer;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    position: fixed;
    display: flex;
    width: 60px;
    height: 60px;
    right: 40px;
    top: 20px;
    z-index: 999;
    img{
      width: 37px;
      height: 37px;
    }
  }
.left-img,
.right-img {
  // width: 500px;
  position: absolute;
  top: 0;
  height: 100%;
  z-index: 999;
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  border-color: transparent;
  border-style: solid;
  transition: transform 1.2s linear; 
}
.left-img {
  background-image: url("./assets/images/left.png");
  left: 0; // fallback
}
.right-img {
  background-image: url("./assets/images/right.png");
  right: 0; // fallback
}
}
</style>
