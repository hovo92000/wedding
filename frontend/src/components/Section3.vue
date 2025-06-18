<template>
    <section class="section3" >
        <div class="text-container">
            <div class="title" v-animateonscroll="{
                enterClass: 'animate-enter fadein animation-duration-1000',
                leaveClass: 'animate-leave fadeout'
            }">
                Location
            </div>
            <div class="description" v-animateonscroll="{
                enterClass: 'animate-enter fadein animation-duration-1000',
                leaveClass: 'animate-leave fadeout'
            }">Ձեր հարմարավետության համար մենք պատրաստել ենք քարտեզ: Հուսով ենք, որ Դուք հեշտությամբ կգտնեք հարսանիքի վայրը և կուրախացնեք մեզ Ձեր ներկայությամբ:</div>
            <div class="">
                <div class="date" v-animateonscroll="{
                    enterClass: 'animate-enter fadein animation-duration-1000',
                    leaveClass: 'animate-leave fadeout'
                }">Սուրբ Աննա Եկեղեցի/ժամը 15:00</div>
                <div>երևան, Աբովյան փող., 15/1</div>
            </div>
        </div>
        <div class="img-container" >
            <img src="../assets/images/church.png" alt="">
        </div>
        <div class="button-container">
            <a href="https://maps.app.goo.gl/2K8366aMFMiMqhv6A" target="_blank">Քարտեզ</a>
        </div>
    </section>
</template>


<script setup>

</script>


<style lang="scss">
.section3{
    max-width: 650px;
    margin: 0 auto;
    padding-top: 100px;
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

        }
    }
    .img-container{
        margin: 0 40px;
        display: flex;
        flex-direction: column;
        img{

        }
    }
    .button-container{
        display: flex;
        justify-content: center;
    }
}

</style>