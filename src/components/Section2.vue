<template>
    <section class="section2" >
        <div class="text-container">
            <div class="title" v-animateonscroll.once="{
                enterClass: 'animate-enter fadein animation-duration-1000',
                leaveClass: 'animate-leave fadeout'
            }">
                <img width="325px" height="77px" src="../assets/images/section2Img.png" alt="">
            </div>
            <div class="description" v-animateonscroll.once="{
                enterClass: 'animate-enter fadein animation-duration-1000',
                leaveClass: 'animate-leave fadeout'
            }">Սիրով հրավիրում ենք Ձեզ ներկա գտնվելու մեր հարսանյաց արարողությանը:</div>
            <div class="date" v-animateonscroll.once="{
                enterClass: 'animate-enter fadein animation-duration-1000',
                leaveClass: 'animate-leave fadeout'
            }">Օգոստոս 1/2025</div>
        </div>
        <div class="img-container" >
            <img src="../assets/images/calendar.png" alt="">
        </div>
    </section>
</template>


<script setup>

</script>


<style lang="scss">
.section2{
    max-width: 650px;
    margin: 0 auto;
    padding-top: 80px;
    display: flex;
    flex-direction: column;
    .text-container{
        display: flex;
        text-align: center;
        flex-direction: column;
        gap: 10px;
        .title{

        }
        .description{
            margin: 0 25px;
            font-size: 18px;
            letter-spacing: 0.5px;
            font-family: montserratarm-regular;
            color: #261914;
        }
        .date{
            margin: 40px 25px 40px 25px;
            font-size: 20px;
            letter-spacing: 0.5px;
            font-family: montserratarm-regular;
            color: #261914;
        }
    }
    .img-container{
        margin: 0 30px;
        display: flex;
        flex-direction: column;
        img{

        }
    }
}

</style>