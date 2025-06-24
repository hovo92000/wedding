<template>
    <section class="section6" >
        <div class="img-container"  v-animateonscroll.once="{
        enterClass: 'animate-enter fadein animation-duration-1000',
        leaveClass: 'animate-leave fadeout'
      }">
            <img src="../assets/images/section6Img.jpg" alt="">
        </div>
        <div class="text">ՄԵՐ ՀԱՐՍԱՆԻՔԻՆ ՄՆԱՑԵԼ Է ․․․</div>
        <div class="timer-container">
            <div class="count-box">
                <div class="count">
                    {{ days }}
                </div>
                <div class="count-text">
                        օր
                </div>
            </div>
            <div class="count-dots">
                :
            </div>
              <div class="count-box">
                <div class="count">
                    {{ hours }}
                </div>
                <div class="count-text">
                        ժամ
                </div>
            </div>
            <div class="count-dots">
                :
            </div>
             <div class="count-box">
                <div class="count">
                    {{ minutes }}
                </div>
                <div class="count-text">
                        րոպե
                </div>
            </div>
            <div class="count-dots">
                :
            </div>
              <div class="count-box">
                <div class="count">
                    {{ seconds }}
                </div>
                <div class="count-text">
                        վայրկյան
                </div>
            </div>
        </div>
        <div class="last-img-container">
            <img width="235px" height="137px" src="../assets/images/section6Img2.png" alt="">
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const days = ref('00');
const hours = ref('00');
const minutes = ref('00');
const seconds = ref('00');

let timerId;

function updateCountdown() {
  const now = new Date().getTime();
  // target: August 1, 2025 at midnight local time
  const target = new Date(2025, 7, 1, 0, 0, 0).getTime();
  const diff = target - now;

  if (diff <= 0) {
    clearInterval(timerId);
    days.value = hours.value = minutes.value = seconds.value = '00';
    return;
  }

  const d = Math.floor(diff / (1000 * 60 * 60 * 24));
  const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const m = Math.floor((diff / (1000 * 60)) % 60);
  const s = Math.floor((diff / 1000) % 60);

  days.value = String(d).padStart(2, '0');
  hours.value = String(h).padStart(2, '0');
  minutes.value = String(m).padStart(2, '0');
  seconds.value = String(s).padStart(2, '0');
}

onMounted(() => {
  updateCountdown();
  timerId = setInterval(updateCountdown, 1000);
});

onUnmounted(() => {
  clearInterval(timerId);
});
</script>


<style lang="scss">
.section6{
    max-width: 650px;
    margin: 0 auto;
    padding-top: 10px;
    display: flex;
    flex-direction: column;
    .img-container{
        margin: 0 30px;
        display: flex;
        flex-direction: column;
        img{

        }
    }
    .text{
        margin: 20px 35px;
        color: #A9B09C;
        text-align: center;
        font-size: 18px;
    }
    .timer-container{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5px;
        margin-bottom: 50px;
        .count-dots{
            font-family: mardoto-black;
            color: #3A3F33;
            font-size: 40px;
            margin-bottom: 20px;
        }
        .count-box{
            display: flex;
            flex-direction: column;
            gap: 5px;
            .count{
                font-family: mardoto-black;
                color: #3A3F33;
                font-size: 45px;
            }
            .count-text{
                font-family: montserratarm-regular;
                font-size: 16px;
                color: #261914;
            }
        }
    }
    .last-img-container{
        display: flex;
        justify-content: center;
    }
}

</style>