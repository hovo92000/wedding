<template>
    <section class="section4" >
        <div class="text-container">
            <div class="title" v-animateonscroll="{
                enterClass: 'animate-enter fadein animation-duration-1000',
                leaveClass: 'animate-leave fadeout'
            }">
                Հարսանյաց արարողությունը տեղի կունենա Մորենա սպիտակ դահլիճում, Ժամը 18:00-ին:
            </div>
        </div>
        <div class="img-container" >
            <img src="../assets/images/morena.png" alt="">
        </div>
        <div class="button-container">
            <a href="https://maps.app.goo.gl/Dcr1JrvudAviLKUx8" target="_blank">Քարտեզ</a>
        </div>
        <div class="img-container" >
            <img src="../assets/images/section4Img2.png" alt="">
        </div>
    </section>
</template>


<script setup>

</script>


<style lang="scss">
.section4{
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
        a{
            padding: 5px 40px;
            text-decoration: none;
            border-radius: 60px;
            background: #7C8E85;
            color: #fff;
        }
    }
}

</style>