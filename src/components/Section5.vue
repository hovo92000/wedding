<template>
    <section class="section5" >
        <!-- <div class="img-container" >
            <img src="../assets/images/section5Img.png" alt="">
        </div> -->
        <div class="section5-content-box">
            <div class="content-column1">
                <div class="content">
                    <img width="100px" height="100px" src="../assets//images/section5Icon1.png" alt="">
                    <div class="content-time">
                        12:30
                    </div>
                    <div class="content-text">Հարսի տուն</div>
                </div>
                 <div class="content">
                    <img width="100px" height="100px" src="../assets//images/section5Icon3.png" alt="">
                    <div class="content-time">
                        18:00
                    </div>
                    <div class="content-text">Ռեստորան</div>
                    <div class="content-sub-text">(խնդրում ենք հաշվի առնել, որ միջոցառումը նախատեսված է միայն մեծահասակների համար)</div>
                </div>
            </div>
            <div class="dotted-line">
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
            </div>
             <div class="content-column2">
                <div class="content">
                    <img width="100px" height="100px" src="../assets//images/section5Icon2.png" alt="">
                    <div class="content-time">
                        15:00
                    </div>
                    <div class="content-text">Եկեղեցի</div>
                </div>
            </div>
        </div>
    </section>
</template>


<script setup>

</script>


<style lang="scss">
.section5{
    max-width: 650px;
    margin: 0 auto;
    padding-top: 10px;
    padding-bottom: 40px;
    display: flex;
    flex-direction: column;
    .img-container{
        margin: 0 30px;
        display: flex;
        flex-direction: column;
        img{

        }
    }
    .section5-content-box{
        padding-top: 40px;
        display: flex;
        gap: 10px;
        margin: 0 40px;
        .content-column1{
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            font-family: montserratarm-regular;
            font-size: 18px;
            .content{
                display: flex;
                flex-direction: column;
                align-items: center;
                .content-time{
                    color: #504129;
                }
                .content-text{
                    color: #504129;
                }
                .content-sub-text{
                   margin-top: 5px;
                   margin-bottom: 20px;
                   text-align: center;
                   color: #3A3F33;
                   font-family: montserratarm-regular;
                   font-size: 10px;
               }
            }
        }
        .dotted-line{
            margin: 20px 0;
            position: relative;
            width: 1px;
            height: 600px;
            background: #737F65;
            .dot {
        position: absolute;
        left: 50%;
        width: 12px;
        height: 12px;
        background: #737F65;
        border-radius: 50%;
        transform: translateX(-50%);
      }
      .dot:nth-child(1) {
        top: 0;
        transform: translate(-50%, -50%);
      }
      .dot:nth-child(2) {
        top: 50%;
        transform: translate(-50%, -50%);
      }
      .dot:nth-child(3) {
        bottom: 0;
        transform: translate(-50%, 50%);
      }
        }
        .content-column2{
            width: 100%;
             display: flex;
            flex-direction: column;
            justify-content: center;
            font-family: montserratarm-regular;
            font-size: 18px;
            .content{
                display: flex;
                flex-direction: column;
                align-items: center;
                .content-time{
                    color: #504129;
                }
                .content-text{
                    color: #504129;
                }
            }
        }
    }
}

</style>